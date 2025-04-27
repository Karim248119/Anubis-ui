import React from "react";

const Items = [
  {
    title: "Free for personal use",
    num: "100%",
    img: "/cards/13.png",
    img2: "/cards/16.png",
  },

  {
    title: "Developer friendly",
    num: "100%",
    img: "/cards/15.png",
    img2: "/cards/18.png",
  },
  {
    title: "Customizable components",
    num: "+100",
    img: "/cards/14.png",
    img2: "/cards/17.png",
  },
];

export default function Cards() {
  return (
    <div className="w-full md:md:h-[80vh] h-fit flex justify-center items-center ">
      <div className="w-2/3 md:h-[55vh] h-[120vh] grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 md:gap-10 gap-5 font-sans">
        {Items.map((item, i) => (
          <div
            key={i}
            className="w-full md:h-full overflow-hidden p-[1px] rounded-2xl  relative"
          >
            <span
              className="absolute rounded-full -z-10 inset-[-50%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#F8C86D_50%,#000_100%)]"
              style={{
                animationDuration: "2s",
                animationDelay: (i + 1) * 1.3 + "s",
              }}
            />

            <div className="w-full h-full flex flex-col justify-end items-center gap-5 md:p-10 p-5 bg-black rounded-2xl relative group">
              <img
                src={item.img2}
                alt={item.title}
                className="w-2/3 absolute top-10 opacity-20"
              />
              <img
                src={item.img}
                alt={item.title}
                className="w-2/3 absolute top-10 opacity-0 group-hover:opacity-100 duration-300"
              />
              <div className="flex flex-col md:gap-5 gap-2 items-center relative z-20 text-center">
                <h2 className="md:text-5xl text-4xl font-bold">{item.num}</h2>
                <h2 className="text-white/50 text-xs font-semibold">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
