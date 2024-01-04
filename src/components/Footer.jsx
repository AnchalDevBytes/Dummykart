import React from "react";
import { Button } from ".";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="h-[35vh] bg-stone-500 flex md:flex-row flex-col items-center justify-between gap-3 md:gap-0 px-20 py-10">
      <div className="text-white md:text-start text-center text-base md:text-xl font-normal">
        <Link href="/" className="cursor-pointer">DUMMY ASSIGNMENT</Link>
        <p>112, ELECTRONIC CITY</p>
        <p>BANGALORE, INDIA</p>
      </div>
      <div className="text-white text-base md:text-xl flex flex-col items-center md:items-start gap-6 font-normal">
        <p>SOME TEXT ABOUT SOMETHING <br /> AND THEN SOME OTHER THING</p>
        <div className="flex gap-4 md:gap-8">
        <Link href='/'>
        <Button text={"HOME"}/></Link>
        <Link href='/cart'>
        <Button text={"CART"}/></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;