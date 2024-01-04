import React from "react";
import { useDispatch } from "react-redux";
import { Button } from ".";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/features/cartSlice";

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm md:max-w-full pb-5 md:h-full md:p-5 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-1 overflow-hidden shadow-2xl bg-slate-950/90 text-white">
      <div className="h-48 w-full md:w-2/6 md:h-96 md:rounded-2xl">
        <img
          className="h-48 w-full md:rounded-2xl md:h-96 object-cover"
          src={cartItem?.thumbnail}
          alt={cartItem?.title}
        />
      </div>
      <div className="flex flex-col md:h-96 md:px-16 lg:px-24 md:py-8 gap-3 w-full md:w-3/6">
        <div className="px-6 flex flex-col gap-1 md:gap-2">
          <h2 className="font-bold text-xl md:text-4xl">{cartItem?.title}</h2>
          <p className="text-gray-700 text-base md:text-lg">
            {cartItem?.description}
          </p>
          <p className="text-green-700 font-bold text-lg md:text-xl">
            ${cartItem?.price?.toFixed(2)}
          </p>
        </div>
        <div className="px-6 flex gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            {cartItem?.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            {cartItem?.brand}
          </span>
        </div>
      </div>
      <div className="w-full md:w-2/6 flex flex-col gap-3 md:gap-10 items-center">
        <div className="px-6 py-2">
          <p className="md:text-3xl text-xl text-orange-600 font-bold flex gap-2 items-center">
            Subtotal:{" "}
            <span className="md:text-lg text-base text-white">
              ${(cartItem?.price * cartItem?.quantity)?.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            text="-"
            clicFun={() => dispatch(decrementQuantity(cartItem.id))}
          />
          <span className="text-lg text-white">{cartItem?.quantity}</span>
          <Button
            text="+"
            clicFun={() => dispatch(incrementQuantity(cartItem.id))}
          />
        </div>
        <Button
          text="Remove"
          clicFun={() => dispatch(removeFromCart(cartItem.id))}
        />
      </div>
    </div>
  );
};

export default CartCard;
