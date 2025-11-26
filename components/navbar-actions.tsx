"use client";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { Heart, Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const cart = useCart();
  if (!isMounted) {
    return null;
  }
  return (
    // <div className="ml-auto gap-x-4 flex items-center">
    //   <Button
    //     onClick={() => router.push("/cart")}
    //     className="flex items-center rounded-full bg-black px-4 py-2"
    //   >
    //     <ShoppingBag size={20} color="white" />
    //     <span className="ml-2 text-sm font-medium text-white">
    //       {cart.items.length}
    //     </span>
    //   </Button>
    // </div>

    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 ml-6">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-5 h-4"
            />
            <span className="text-sm">English</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">USD</span>
          </div>

          <button className="relative">
            <Heart size={24} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          <button onClick={() => router.push("/cart")} className="relative">
            <ShoppingCart size={24} className="text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.items.length}
            </span>
          </button>

          <button className="flex items-center gap-2 text-sm">
            <User size={20} className="text-gray-700" />
          </button>

          <button className="bg-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-rose-600 transition-colors">
            Find Store
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarActions;
