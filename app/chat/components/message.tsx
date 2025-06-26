import React from "react";
import { FiTrash } from "react-icons/fi";
import Input from "./message/input";

const Message = () => {
  return (
    <div className="w-[786px] pt-6 h-[680px] header flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      <div className=" flex items-center justify-between px-6 border-b border-white/10 pb-4">
        <span className=" bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text text-2xl font-bold ">
          Scale AI{" "}
        </span>
        <span className=" w-fit flex items-center gap-2 text-sm text-white p-1.5 px-2 rounded-full bg-red-700/10 border border-red-700 transition-all duration-200 cursor-pointer">
          <FiTrash />
          <span>Clear Chat</span>
        </span>
      </div>

      <div className="">
        <Input />
      </div>
    </div>
  );
};

export default Message;
