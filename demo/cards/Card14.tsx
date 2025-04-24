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

export default function Card14() {
  return (
    <div className="h-full px-10 aspect-[2/3] flex flex-col items-center justify-evenly gap-2 rounded-xl bg-gradient-to-t from-white/25 to-transparent group">
      <div className="w-full h-1/2 flex relative">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`w-full aspect-square rounded-full border-2  border-white10 duration-300 absolute top-0 left-0 group-hover:border-emerald-400  ${
              i == 3 && "border-4 "
            }

            `}
            style={{
              transform: `rotateX(${i * 25}deg)`,
              transitionDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="px-5 flex flex-col items-center gap-5 h-1/4">
        <h1 className="text-6xl font-serif">75%</h1>
        <p className="text-sm text-center">faster time to market</p>
      </div>
    </div>
  );
}
