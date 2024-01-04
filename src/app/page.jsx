"use client";

import { ProductCard, ProductLoader } from "@/components";
import { getProductData} from "@/lib/features/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [priceRange, setPriceRange] = useState({ min : 20,  max: 1000 });

  const dispatch = useDispatch();

  const fetchData = async (query, priceRange) => {
    setIsLoading(true);
    try {
      await dispatch(getProductData({ query: query, priceRange: priceRange }));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData("", priceRange);
  }, [priceRange]);

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    setProductData(product);
  }, [product]);

  const handlePriceRange = (e) => {
    const value = parseFloat(e.target.value);
    // console.log(value);
    setPriceRange((prevRange) => ({ ...prevRange, max: value }));
  };

  return (
    <section className="py-10 p md:py-20 px-2 md:px-28 bg-neutral-200 min-h-screen">
      <div className="flex flex-col md:flex-row ">
        <h1 className="text-2xl tracking-wider md:px-28 md:text-5xl font-bold flex items-center justify-center">
          Featured Products
        </h1>
        <div className="flex justify-end items-center gap-4 px-10 mt-5">
          <input
            type="range"
            min={20}
            max={1000}
            value={priceRange.max}
            onChange={handlePriceRange}
          />
          <p className="flex items-center text-lg font-bold text-slate-800 gap-2"><span>atleast</span><span className="text-green-600">${priceRange.max}</span></p>
        </div>
      </div>
      {isloading ? (
        <div className="flex flex-col gap-10 py-10 md:px-20">
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
        </div>
      ) : (
        <div className="flex flex-col gap-10 py-10 md:py-14 md:px-20">
          {productData.length > 0 ? (
            productData?.map((product) => (
              <div
                className="max-w-screen-md mx-auto md:max-w-full md:mx-0"
                key={product?.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-2xl mt-10">
              <p>No product available...</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default HomePage;
