import React from "react";
import { LiaAnkhSolid } from "react-icons/lia";
import { Fonts } from "@/lib/fonts";

const myth = {
  name: "Egyptian",
  description:
    "Ancient Egyptian tales of gods like Ra, Osiris, and Isis, centered around life, death, and the afterlife.",
  img: "https://i.pinimg.com/736x/e3/3e/73/e33e73c174c15c0a68f3c6ee0e17ad9f.jpg",
  icon: <LiaAnkhSolid />,
};

export default function Card3({
  index,
}: {
  className?: string;
  index: number;
}) {
  return (
    <button className="md:h-80 md:w-64 w-60 h-80 relative group text-white">
      <div className="h-full w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] relative z-10">
        <img
          src={myth.img}
          alt="zeus"
          className="h-full w-full object-cover rounded-tl-[100px] rounded-br-[100px] filter grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300"
        />
      </div>
      <div className="absolute top-0 left-0  w-full h-full text-start px-10 rounded-tl-[100px] rounded-br-[100px] bg-black/50 z-10 center flex flex-col gap-3 justify-center ">
        <h1
          className={`mt-10 text-lg  opacity-0 group-hover:opacity-100 duration-300 ${Fonts.glaston.className}`}
        >
          {myth.name}
        </h1>
        <p className="text-xs text-white/70  font- opacity-0 group-hover:opacity-100 duration-300">
          {myth.description}
        </p>
      </div>
      <div className="h-8 w-8 border absolute -right-[3px] top-1/2 -translate-y-1/2 bg-amber-500 flex justify-center items-center rotate-45 z-30 scale-100 group-hover:scale-100 duration-700">
        <span className="group-hover:rotate-90 duration-300">↖</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-tl-[90px] rounded-br-[90px] border-white/30 border center z-20 ">
        <div className="absolute bottom-4 left-4">{myth.icon}</div>
      </div>
      <div className="w-[100%] h-[20%] rounded-tl-[140px] rounded-br-[140px] border-l border-b absolute left-0 md:-top-1 md:-left-1 top-3 z-20 border-amber-500" />
      <div className="w-full flex items-center gap-3 absolute left-0 md:-top-10 -top-5 z-20 ">
        <span className="w-[80%] h-[1px] bg-gradient-to-r from-black to-amber-500" />
        <span className=" italic ">
          {index + 1 < 10 && "0"}
          {index + 1} .
        </span>
      </div>
      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-violet-500 absolute -bottom-5 -right-5 rounded-br-[110px] rounded-tl-[110px] z-0 group-hover:bottom-0 group-hover:right-0 duration-500" />
    </button>
  );
}

export const Card3Code = `import React from "react";
import { LiaAnkhSolid } from "react-icons/lia";

const myth = {
  name: "Egyptian",
  description:
    "Ancient Egyptian tales of gods like Ra, Osiris, and Isis, centered around life, death, and the afterlife.",
  img: "https://i.pinimg.com/736x/e3/3e/73/e33e73c174c15c0a68f3c6ee0e17ad9f.jpg",
  icon: <LiaAnkhSolid />,
};

export default function Card3({
  index,
}: {
  className?: string;
  index: number;
}) {
  return (
    <button className="md:h-80 md:w-64 w-60 h-80 relative group text-white">
      <div className="h-full w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] relative z-10">
        <img
          src={myth.img}
          alt="zeus"
          className="h-full w-full object-cover rounded-tl-[100px] rounded-br-[100px] filter grayscale group-hover:grayscale-0 group-hover:scale-110 duration-300"
        />
      </div>
      <div className="absolute top-0 left-0  w-full h-full text-start px-10 rounded-tl-[100px] rounded-br-[100px] bg-black/50 z-10 center flex flex-col gap-3 justify-center ">
        <h1
          className='mt-10 text-lg  opacity-0 group-hover:opacity-100 duration-300 \${Fonts.glaston.className}'
        >
          {myth.name}
        </h1>
        <p className="text-xs text-white/70  font- opacity-0 group-hover:opacity-100 duration-300">
          {myth.description}
        </p>
      </div>
      <div className="h-8 w-8 border absolute -right-[3px] top-1/2 -translate-y-1/2 bg-amber-500 flex justify-center items-center rotate-45 z-30 scale-100 group-hover:scale-100 duration-700">
        <span className="group-hover:rotate-90 duration-300">↖</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-tl-[90px] rounded-br-[90px] border-white/30 border center z-20 ">
        <div className="absolute bottom-4 left-4">{myth.icon}</div>
      </div>
      <div className="w-[100%] h-[20%] rounded-tl-[140px] rounded-br-[140px] border-l border-b absolute left-0 md:-top-1 md:-left-1 top-3 z-20 border-amber-500" />
      <div className="w-full flex items-center gap-3 absolute left-0 md:-top-10 -top-5 z-20 ">
        <span className="w-[80%] h-[1px] bg-gradient-to-r from-black to-amber-500" />
        <span className=" italic ">
          {index + 1 < 10 && "0"}
          {index + 1} .
        </span>
      </div>
      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-violet-500 absolute -bottom-5 -right-5 rounded-br-[110px] rounded-tl-[110px] z-0 group-hover:bottom-0 group-hover:right-0 duration-500" />
    </button>
  );
}`;
