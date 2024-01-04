import React from "react";
import { Button } from ".";
import Link from "next/link";
import Image from "next/image";

const ProductLoader = () => {
  return (
    <div className="max-w-sm md:max-w-full pb-5 md:h-full md:p-5 animate-pulse rounded-2xl flex flex-col md:flex-row gap-4 md:gap-1 overflow-hidden shadow-2xl bg-slate-950/90 text-white">
      <div className="h-48 w-full md:w-2/5 md:h-96 md:rounded-2xl">
        <div
          className="h-48 w-full md:rounded-2xl md:h-96 text-white "
        ></div>
      </div>
      <div className=" flex flex-col md:h-96 md:px-16 lg:px-24 md:py-8 gap-3 w-full md:w-3/5">
        <div className="px-6 flex flex-col gap-1 md:gap-2">
          <h2 className="font-bold text-xl md:text-4xl">...Title loading...</h2>
          <p className="text-gray-700 text-base md:text-lg">...description loading...</p>
          <p className="text-green-700 font-bold text-lg md:text-xl">...price loading...
          </p>
        </div>
        <div className="px-6 flex gap-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            ...category loading...
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:px-6 md:py-3 text-sm font-semibold text-gray-700">
            ...brand loading...
          </span>
        </div>
        <div className="px-6 flex flex-col gap-2 md:gap-4 ">
          <span className="text-sm text-gray-600">
            Rating: ...loading...
          </span>
          <div className="flex gap-1 md:gap-5">
            ...img loading.....
          </div>
        </div>
        <div className="px-6 py-2">
          <span className="text-sm text-gray-600">
            Discount: ...loading...
          </span>
        </div>
      </div>
      <Link href="/cart" className="md:mx-10 px-6 flex items-center">
        <Button text={"...loading..."} />
      </Link>
    </div>
  );
};

export default ProductLoader;
