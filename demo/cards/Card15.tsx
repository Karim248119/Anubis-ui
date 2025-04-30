import React from "react";

export default function Card15() {
  return (
    <div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
      <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C4B5FD_0%,#000_50%,#C4B5FD_100%)]" />
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
        <div className="w-full flex justify-center items-center relative">
          <div className="relative w-full aspect-square rounded-full border-2 group-hover:animate-[spin_5s_linear_infinite] border-white/15 group-hover:border-violet-300 duration-300">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className={`bg-black absolute w-8 aspect-square rounded-full border-2 border-white/15 group-hover:border-violet-300 duration-300 ${
                  i == 0
                    ? "top-4 left-4"
                    : i == 1
                    ? "top-4 right-4"
                    : i == 2
                    ? "bottom-4 right-4"
                    : "bottom-4 left-4"
                }`}
                style={{
                  transitionDelay: `${(i + 1) * 0.1}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative w-full aspect-square rounded-full border-2 border-dashed group-hover:animate-[spin_5s_linear_infinite_reverse] border-white/15 group-hover:border-violet-300 delay-500 duration-300">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`bg-black absolute w-4 aspect-square rounded-full border-2 border-white/15 duration-300 group-hover:border-violet-300 ${
                    i == 0
                      ? "top-2 left-2"
                      : i == 1
                      ? "top-2 right-2"
                      : i == 2
                      ? "bottom-2 right-2"
                      : "bottom-2 left-2"
                  }`}
                  style={{
                    transitionDelay: `${(i + 1) * 0.1 + 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-col items-center gap-5 h-1/4">
          <h1 className="text-6xl font-serif">120%</h1>
          <p className="text-sm text-center">increase in engagement</p>
        </div>
      </div>
    </div>
  );
}

export const Card15Code = `
import React from "react";

export default function Card15() {
  return (
    <div className="h-full aspect-[2/3] relative group overflow-hidden flex items-center justify-center rounded-xl">
      <span className="absolute z-0 rounded-full inset-[-500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C4B5FD_0%,#000_50%,#C4B5FD_100%)]" />
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] px-10 flex flex-col items-center justify-evenly gap-2 rounded-xl bg-black text-white relative z-20 ">
        <div className="w-full flex justify-center items-center relative">
          <div className="relative w-full aspect-square rounded-full border-2 group-hover:animate-[spin_5s_linear_infinite] border-white/15 group-hover:border-violet-300 duration-300">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className={\`bg-black absolute w-8 aspect-square rounded-full border-2 border-white/15 group-hover:border-violet-300 duration-300 \${
                  i == 0
                    ? "top-4 left-4"
                    : i == 1
                    ? "top-4 right-4"
                    : i == 2
                    ? "bottom-4 right-4"
                    : "bottom-4 left-4"
                }\`}
                style={{
                  transitionDelay: \`\${(i + 1) * 0.1}s\`,
                }}
              />
            ))}
          </div>
          <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
            <div className="relative w-full aspect-square rounded-full border-2 border-dashed group-hover:animate-[spin_5s_linear_infinite_reverse] border-white/15 group-hover:border-violet-300 delay-500 duration-300">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={\`bg-black absolute w-4 aspect-square rounded-full border-2 border-white/15 duration-300 group-hover:border-violet-300 \${
                    i == 0
                      ? "top-2 left-2"
                      : i == 1
                      ? "top-2 right-2"
                      : i == 2
                      ? "bottom-2 right-2"
                      : "bottom-2 left-2"
                  }\`}
                  style={{
                    transitionDelay: \`\${(i + 1) * 0.1 + 0.5}s\`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-col items-center gap-5 h-1/4">
          <h1 className="text-6xl font-serif">120%</h1>
          <p className="text-sm text-center">increase in engagement</p>
        </div>
      </div>
    </div>
  );
}

`;
