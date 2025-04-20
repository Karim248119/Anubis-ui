import React from "react";
import { RiTShirtLine } from "react-icons/ri";

export default function Card4() {
  return (
    <div className="h-72 w-72 border rounded-lg relative group overflow-hidden bg-black text-white">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-5 z-10">
        <div className="w-12 h-12 rounded-full text-2xl group-hover:text-emerald-500 group-hover:bg-emerald-950 border border-white/20 flex justify-center items-center duration-300 z-20">
          <RiTShirtLine />
        </div>
        <h2 className="text-lg font-bold mt-5 mb-2">Product</h2>
        <p className="font-sans font-extralight text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa
          animi eaque obcaecati quod dolorum itaque ea velit ex aperiam tempora
          commodi, asperiores fuga impedit vitae explicabo ad. Amet, quo.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-wrap duration-300 shadow-[inset_0px_0px_10px_50px_rgba(0,_0,_0,_0.8)]">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((item, index) => (
          <div
            key={index}
            className={`w-1/5 aspect-square border  border-primary/[0.05] ${
              index % 2 === 0
                ? "bg-gradient-to-b from-emerald-500/10 via-emerald-500/0 to-emerald-500/0"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
