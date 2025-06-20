import Image from "next/image";
import React from "react";
import logo from "../imgs/Logo-L.png";
import {Montserrat} from "next/font/google";
const inter = Montserrat({subsets: ["latin"]});

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-10 py-4 text-white">
      <Image
        src={logo}
        alt=""
        width={1000}
        height={10}
        className="w-30"
      />
      <div>
        <ul className={"flex space-x-10 paragraph text-sm" }>
          <li className="hover:text-gray-300 cursor-pointer">Benefits</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div>
        <button className="border border-cyan-400  text-white px-5 py-2 rounded-full paragraph text-sm cursor-pointer">
          Sign Up
        </button>
        <button className="bg-gradient-to-b to-blue-400 from-cyan-400  text-white px-6 py-2 rounded-full paragraph text-[16px] cursor-pointer hover:bg-gray-600 ml-2 ">
          Login
        </button>
      </div>
    </div>
  );
}
