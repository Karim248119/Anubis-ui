import { Fonts } from "@/lib/fonts";
import React from "react";

interface Product {
  name: string;
  price: number;
  model: string;
  product: string;
}
export default function Card2({ name, price, model, product }: Product) {
  return (
    <div className="space-y-3 text-black">
      <div className={`relative group overflow-hidden w-52 h-64`}>
        <img
          alt="mod"
          src={model}
          className=" w-full h-full object-cover  overflow-hidden "
        />
        <img
          alt="item"
          src={product}
          className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden  group-hover:scale-125 z-10 opacity-0 group-hover:opacity-100 duration-200"
        />
      </div>
      <div
        className={`flex justify-between items-center capitalize text-xl ${Fonts.glaston.className}`}
      >
        <h2>{name}</h2>
        <p className={Fonts.glaston.className}>{price} $</p>
      </div>
      <div className=" space-y-[2px]">
        <div className="h-[1px] w-full bg-black" />
        <div className="h-[1px] w-full bg-black" />
      </div>
    </div>
  );
}

export const Card2Code = `import { Fonts } from "@/lib/fonts";
import React from "react";

interface Product {
  name: string;
  price: number;
  model: string;
  product: string;
}
export default function Card2({ name, price, model, product }: Product) {
  return (
    <div className="space-y-3 text-black">
      <div className='relative group overflow-hidden w-52 h-64'>
        <img
          alt="mod"
          src={model}
          className=" w-full h-full object-cover  overflow-hidden "
        />
        <img
          alt="item"
          src={product}
          className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden  group-hover:scale-125 z-10 opacity-0 group-hover:opacity-100 duration-200"
        />
      </div>
      <div
        className={\`flex justify-between items-center capitalize text-xl \${Fonts.glaston.className}\`}
      >
        <h2>{name}</h2>
        <p className={Fonts.glaston.className}>{price} $</p>
      </div>
      <div className=" space-y-[2px]">
        <div className="h-[1px] w-full bg-black" />
        <div className="h-[1px] w-full bg-black" />
      </div>
    </div>
  );
}`;
