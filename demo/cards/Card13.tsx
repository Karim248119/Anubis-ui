import React from "react";

export default function Card13() {
  return (
    <div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
      <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FB7185_0%,#000_50%,#FB7185_100%)]" />
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
        <div className="grid grid-cols-4 grid-rows-4 h-1/2 gap-1 ">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-full border-2 border-white/15 duration-300 group-hover:border-rose-400 `}
              style={{
                transitionDelay: `${i * 0.04}s`,
              }}
            />
          ))}
        </div>
        <div className="px-5 flex flex-col items-center gap-5 h-1/4">
          <h1 className="text-6xl font-serif">25%</h1>
          <p className="text-sm text-center">
            reduction in operational expenses
          </p>
        </div>
      </div>
    </div>
  );
}

export const Card13Code = `
<div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
  <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FB7185_0%,#000_50%,#FB7185_100%)]" />
  <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
    <div className="grid grid-cols-4 grid-rows-4 h-1/2 gap-1 ">
      {Array.from({ length: 16 }, (_, i) => (
        <div
          key={i}
          className='aspect-square rounded-full border-2 border-white/15 duration-300 group-hover:border-rose-400'
          style={{
            transitionDelay: \`\${i * 0.04}s\`,
          }}
        />
      ))}
    </div>
    <div className="px-5 flex flex-col items-center gap-5 h-1/4">
      <h1 className="text-6xl font-serif">25%</h1>
      <p className="text-sm text-center">
        reduction in operational expenses
      </p>
    </div>
  </div>
</div>
`;
