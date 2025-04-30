import React from "react";

export default function Card14() {
  return (
    <div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
      <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#000_50%,#34D399_100%)]" />
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] p-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
        <div className="w-full h-1/2 flex">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`w-[80%] aspect-square rounded-full border-2  border-white/20 duration-300 absolute top-5 left-[10%] group-hover:border-emerald-400  ${
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
        <div className="px-5 flex flex-col items-center gap-5 h-1/4 ">
          <h1 className="text-6xl font-serif">75%</h1>
          <p className="text-sm text-center">faster time to market</p>
        </div>
      </div>
    </div>
  );
}

export const Card14Code = `
import React from "react";

export default function Card14() {
  return (
    <div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
      <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34D399_0%,#000_50%,#34D399_100%)]" />
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] p-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
        <div className="w-full h-1/2 flex">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={\`w-[80%] aspect-square rounded-full border-2  border-white/20 duration-300 absolute top-5 left-[10%] group-hover:border-emerald-400 \${
                i == 3 && "border-4 "
              }
            \`}
              style={{
                transform: \`rotateX(\${i * 25}deg)\`,
                transitionDelay: \`\${i * 0.1}s\`,
              }}
            ></div>
          ))}
        </div>
        <div className="px-5 flex flex-col items-center gap-5 h-1/4 ">
          <h1 className="text-6xl font-serif">75%</h1>
          <p className="text-sm text-center">faster time to market</p>
        </div>
      </div>
    </div>
  );
`;
