import React from "react";
import heroVid from '../vids/Hero-vid.mp4';

export default function CTA() {
  return (
    <div className="px-30 flex flex-col  text-white min-h-screen">
      <p className="paragraph text-sm border w-fit  border-white/20 text-cyan-400 rounded-full  px-3 gap-0.5 mb-3 bg-white/10 backdrop-blur-md">
        Flexibility and efficiency
      </p>
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="header font-bold text-4xl mb-3">What Sets <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Upscale</span> Apart</h1>
          <p className="paragraph text- text-white/50 w-150">Explore the exceptional features that make Upscale your ultimate web3 certifier choice</p>
        </div>
        <div className="">
          <video  autoPlay className="w-[500px] h-[320px] object-cover rounded-2xl shadow-lg shadow-cyan-400/20 float-end" style={{objectPosition: '50% 50%'}}>
      <source src='https://framerusercontent.com/assets/JufdyP3489wcFWRJPLOsfWZe18.mp4'  type="video/mp4" />
    </video>
        </div>
      </div>
      </div>
    
  );
}
