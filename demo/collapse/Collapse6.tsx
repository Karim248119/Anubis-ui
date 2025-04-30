import Image from "next/image";
import React from "react";

const Items = [
  {
    name: "Project 1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    tags: ["Web dsign", "web development", "Interior design"],
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Project 2",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    tags: ["Web dsign", "web development", "Beauty"],
    img: "https://images.pexels.com/photos/1523528/pexels-photo-1523528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Project 3",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.",
    tags: ["Web dsign", "web development", "Portfolio"],
    img: "https://images.pexels.com/photos/3651215/pexels-photo-3651215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Collapse6() {
  return (
    <div className="w-full h-full bg-orange-700 text-white/50">
      {Items.map((item, index) => (
        <div
          key={index}
          className="w-full h-[20vh] grid grid-cols-6 p-5 hover:bg-gradient-to-t from-orange-400/30 via-orange-700 to-orange-700 border border-dashed border-white/60 group relative cursor-pointer duration-300"
        >
          <span>0{index + 1}</span>
          <div className="flex flex-col gap-2 col-span-2">
            <h2 className="text-2xl">{item.name}</h2>
            <div className="flex gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 border text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="h-0 group-hover:h-[35vh] w-[30%] overflow-hidden p-3 flex flex-col gap-2 border border-t-0 border-dashed border-white/0 group-hover:border-white/60 duration-700 absolute top-0 right-5 z-10 rounded-b-md">
            <Image
              src={item.img}
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-[80%] object-cover rounded"
            />
            <p className="text-xs">{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
