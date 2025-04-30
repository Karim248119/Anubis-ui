import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { GrAppleAppStore, GrApple } from "react-icons/gr";

export default function Card16() {
  return (
    <div className="w-72 h-80 relative group p-5 flex flex-col  justify-between  rounded-xl bg-white text-black">
      <GrAppleAppStore size={60} />
      <div className="space-y-2">
        <h3 className="text-3xl font-serif">iphone App</h3>
        <p className="text-sm font-extralight">
          Turn your ideas into reality with our app and unlock a world of
          possibilities for your business
        </p>
      </div>
      {/* download from the app store button */}
      <div className="flex text-white group-hover:text-black">
        <a
          href="#"
          className="h-10 flex-1 flex items-center justify-center gap-2 bg-black group-hover:bg-orange-500 px-5 rounded-full duration-300"
        >
          <GrApple size={25} />
          <div>
            <div className="text-[8px]">Download on</div>
            <div className="font-bold">App Store</div>
          </div>
        </a>
        <span className="w-10 h-10 rounded-full bg-black group-hover:bg-orange-500 group-hover:-rotate-45 flex items-center justify-center duration-300">
          <GoArrowDownRight />
        </span>
      </div>
    </div>
  );
}
