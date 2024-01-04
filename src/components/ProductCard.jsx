import React from "react";
import { Button } from ".";
import { addToCart } from "@/lib/features/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="max-w-sm md:max-w-full pb-5 md:h-full md:p-5 rounded-2xl flex flex-col md:flex-row gap-4 md:gap-1 overflow-hidden shadow-2xl bg-slate-950/90 text-white">
      <div className="h-48 w-full md:w-2/6 md:h-96 md:rounded-2xl">
        <img
          className="h-48 w-full md:rounded-2xl md:h-96 "
          src={product?.thumbnail}
          alt={product?.title}
        />
      </div>
      <div className=" flex flex-col md:h-96 md:px-16 lg:px-24 md:py-8 gap-3 w-full md:w-3/6">
        <div className="px-6 flex flex-col gap-1 md:gap-2">
          <h2 className="font-bold text-xl md:text-4xl">{product?.title}</h2>
          <p className="text-gray-700 text-base md:text-lg">{product?.description}</p>
          <p className="text-green-700 font-bold text-lg md:text-xl">
            ${product?.price?.toFixed(2)}
          </p>
        </div>
        <div className="px-6 flex gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            {product?.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            {product?.brand}
          </span>
        </div>
        <div className="px-6 flex flex-col gap-2 md:gap-4 ">
          <span className="text-sm text-gray-600">
            Rating: {product?.rating}/5 ({product?.stock} in stock)
          </span>
          <div className="flex gap-1 md:gap-5">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full mr-2"
                src={image}
                alt={`PI ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="px-6 py-2">
          <span className="text-sm text-gray-600">
            Discount: {product?.discountPercentage}%
          </span>
        </div>
      </div>
      <div className="md:w-1/6 px-6 flex items-center">
        <Button clicFun={() =>dispatch(addToCart(product))} text={"Buy Now"}/>
      </div>
    </div>
  );
};

export default ProductCard;
