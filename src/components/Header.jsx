"use client";

import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { Search } from ".";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "@/lib/features/productSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { logout as authLogout } from "@/lib/features/authSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const cartProducts = useSelector((state) => state.cart.cart);
  const totalQuantity = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const fetchData = async (query) => {
    try {
      // console.log(query);
      await dispatch(getProductData({ query: query }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    }
    setSearchQuery("");
  }, [searchQuery]);

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      dispatch(authLogout());
      router.replace("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const isLogged = useSelector((state) => state.auth.isLoggedin);
  useEffect(() => {
    setIsUserLoggedin(isLogged);
  }, [isLogged]);

  return (
    <header className="flex fixed top-0 w-full justify-between px-6 md:px-24 items-center py-3 bg-stone-500 shadow">
      <Link href="/" className="text-lg md:text-2xl font-bold text-black">
        LOGO
      </Link>
      <div className="flex justify-evenly items-center gap-5 md:gap-20">
        <Search handleSearch={handleSearch} />
        <Link href="/cart" className="relative">
          <IoMdCart className="h-5 w-5" />
          <span className="absolute bg-red-500 h-4 rounded-full w-4 flex items-center justify-center -top-3 -left-2 text-xs">
            {totalQuantity}
          </span>
        </Link>
        {isUserLoggedin ? (
          <button
            onClick={logout}
            className="flex items-center justify-center py-2 px-4 text-white rounded-full bg-red-700 cursor-pointer hover:bg-red-700/50 hover:shadow active:shadow-red-400 transition-all duration-300"
          >
            Logout
          </button>
        ) : null  }
      </div>
    </header>
  );
};

export default Header;
