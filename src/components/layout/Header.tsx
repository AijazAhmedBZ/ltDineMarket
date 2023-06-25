import React from "react";
import logo from "public/Logo.webp";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Image src={logo} alt="logo" className="w-40" />
      <ul className="flex gap-x-10">
        <li className="text-lg">Women</li>
        <li className="text-lg">Men</li>
        <li className="text-lg">Kids</li>
        <li className="text-lg">All Products</li>
      </ul>
      <div className="h-10 w-10"></div>
    </div>
  );
}

export default Header;
