import { Fonts } from "@/lib/fonts";
import React from "react";

interface Product {
  name: string;
  designer: string;
  price: number;
  model: string;
  product: string;
  colors: string[];
}
export default function Card9({
  name,
  designer,
  price,
  model,
  product,
  colors,
}: Product) {
  return (
    <div className="space-y-3 text-black relative overflow-hidden  group">
      <div className={`relative w-80 h-[60vh]`}>
        <img
          alt="..."
          src={product}
          className="absolute left-0 w-full h-full object-cover overflow-hidden top-0 group-hover:-top-full duration-700"
        />
        <img
          alt="..."
          src={model}
          className="absolute left-0 w-full h-full object-cover overflow-hidden scale-95 group-hover:scale-105 z-10 top-full group-hover:top-0 duration-500"
        />
      </div>
      <div className="absolute -bottom-10 group-hover:bottom-[2px] left-[2px] space-y-[2px] w-[calc(100%-4px)] z-20 duration-300">
        <div
          className={`p-3 bg-white/50 capitalize text-xl ${Fonts.glaston.className}`}
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <h2>{name}</h2>
          <p className="text-black/50">{designer}</p>
          <p className="">{price} $</p>
        </div>
        <div
          className={`p-3 h-10 flex justify-between items-center bg-white/50 capitalize  ${Fonts.glaston.className}`}
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <p>Colors</p>
          <div>
            {colors.map((color) => (
              <span
                key={color}
                className="inline-block w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Card9Code = `import { Fonts } from "@/lib/fonts";
import React from "react";

interface Product {
  name: string;
  designer: string;
  price: number;
  model: string;
  product: string;
  colors: string[];
}
export default function Card9({
  name,
  designer,
  price,
  model,
  product,
  colors,
}: Product) {
  return (
    <div className="space-y-3 text-black relative overflow-hidden  group">
      <div className={\`relative w-80 h-[60vh]\`}>
        <img
          alt="..."
          src={product}
          className="absolute left-0 w-full h-full object-cover overflow-hidden top-0 group-hover:-top-full duration-700"
        />
        <img
          alt="..."
          src={model}
          className="absolute left-0 w-full h-full object-cover overflow-hidden scale-95 group-hover:scale-105 z-10 top-full group-hover:top-0 duration-500"
        />
      </div>
      <div className="absolute -bottom-10 group-hover:bottom-[2px] left-[2px] space-y-[2px] w-[calc(100%-4px)] z-20 duration-300">
        <div
          className={\`p-3 bg-white/50 capitalize text-xl \${Fonts.glaston.className}\`}
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <h2>{name}</h2>
          <p className="text-black/50">{designer}</p>
          <p className="">{price} $</p>
        </div>
        <div
          className={\`p-3 h-10 flex justify-between items-center bg-white/50 capitalize  \${Fonts.glaston.className}\`}
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <p>Colors</p>
          <div>
            {colors.map((color) => (
              <span
                key={color}
                className="inline-block w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`;
