"use client";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { ArrowBigRight, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="flex items-end justify-between mt-3">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="w-6 h-6 border border-gray-600 rounded-full"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="flex items-center mt-10 gap-x-4">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 w-full justify-center bg-blue-600"
        >
          <ShoppingCart />
          Add To Cart
        </Button>
        {cart.items.length > 0 && (
          <Button
            onClick={() => router.push("/cart")}
            className="flex items-center gap-x-2 w-full justify-center bg-black"
          >
            Go To Cart
            <ArrowBigRight />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Info;
