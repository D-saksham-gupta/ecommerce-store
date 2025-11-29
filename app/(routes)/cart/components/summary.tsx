"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("cancelled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    try {
      setLoading1(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = response.data.url;
      setLoading1(false);
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
      console.error(error);
    }
  };
  const onCheckout2 = async () => {
    try {
      setLoading2(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/codcheckout`,
        {
          productIds: items.map((item) => item.id),
        }
      );
      console.log(response);
      removeAll();
      toast.success(`${response.data.message}`);
      setLoading2(false);
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-400">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      {items.length > 0 && (
        <div>
          <Button disabled={loading1} className="w-full mt-6" onClick={onCheckout}>
            {loading1
              ? "Redirecting you to the payment gateway..."
              : "Checkout"}
          </Button>
          <Button disabled={loading2} className="w-full mt-6" onClick={onCheckout2}>
            {loading2 ? "Placing your order..." : "Pay at Shop"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Summary;
