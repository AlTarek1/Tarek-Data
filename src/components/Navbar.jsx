import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleMenuClick = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-white px-4 h-24 mx-auto max-w-[1240px] justify-between items-center">
      <h1 className="text-[#00df9a] text-3xl font-bold">Tarek</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleMenuClick} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} />
        )}
      </div>
      <ul
        className={` duration-500 fixed md:hidden bg-[#000300] border-r-gray-900 border-r w-[50%] h-full 
        top-0   ${nav ? " left-0 " : " left-[-100%]"}`}
      >
        <h1 className=" text-3xl font-bold text-[#00df9a] m-4">Tarek</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
