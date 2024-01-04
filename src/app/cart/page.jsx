"use client";

import CartCard from "@/components/CartCard";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  // console.log(cartProducts);

  return (
    <div className="min-h-screen px-2 md:px-20 py-5 md:py-10 flex flex-col gap-5 md:mx-0 md:gap-10 bg-neutral-200">
      <h1 className="text-black text-3xl md:text-5xl">Your Product Collection</h1>
      {cartProducts.length > 0 ? (
        <ul className="flex flex-col gap-10">
          {cartProducts.map((cartItem) => (
            <div
            className="max-w-screen-md mx-auto md:max-w-full md:mx-0"
            key={cartItem?.id}
          >
            <CartCard cartItem={cartItem} />
          </div>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center mt-40 flex-col gap-1 ">
            <p className="text-2xl animate-pulse text-red-600">Your cart is Empty</p>
            <Link href={"/"} className="text-base text-stone-500">Go & Buy products</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
