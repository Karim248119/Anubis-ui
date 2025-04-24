import React from "react";

const items = [
  {
    num: "75%",
    title: "reduction in operational expenses",
    arr: [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    hoveredIndices: [0, 4, 8, , 12, 13, 14, 15, 16],
  },
  {
    num: "80%",
    title: "faster time to market",
    filledIndices: [0, 1, 2, 3, 5, 6, 7, 8, 9],
  },
  {
    num: "120%",
    title: "increase in engagement and conversions from day one of adoption",
    filledIndices: [0, 1, 2],
  },
];

export default function Card13() {
  const turnOffIndices1 = [0, 1, 2, 3, 7, 11, 15];
  const turnOffIndices2 = [4, 5, 6, 10, 14];
  return (
    <div className="h-full aspect-[2/3] px-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-gradient-to-t from-white/25 to-transparent group">
      <div className="grid grid-cols-4 grid-rows-4 h-1/2 gap-1 ">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-full border-2 border-white/10 duration-300 group-hover:border-emerald-400 `}
            style={{
              transitionDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
      <div className="px-5 flex flex-col items-center gap-5 h-1/4">
        <h1 className="text-6xl font-serif">25%</h1>
        <p className="text-sm text-center">reduction in operational expenses</p>
      </div>
    </div>
  );
}
