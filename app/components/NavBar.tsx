import Image from "next/image";
import React from "react";
import logo from "../imgs/Logo-FW.png";
import {Montserrat} from "next/font/google";
const inter = Montserrat({subsets: ["latin"]});

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-25 py-4 text-white">
      <Image
        src={logo}
        alt=""
        width={1000}
        height={10}
        className="w-50 object-cover"
      />
      <div>
        <ul className={"flex space-x-10 header" }>
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>

      <div>
        <button className="bg-blue-500 text-white px-10 py-2 rounded-xl gradient-btn">
          Sign Up
        </button>
        <button className="bg-gray-500  text-white px-10 py-2 rounded-xl hover:bg-gray-600 ml-2 gradient-btn">
          Login
        </button>
      </div>
    </div>
  );
}
