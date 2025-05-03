"use client";
import Button from "@/components/Button";
import { useRef, useState } from "react";

const Items = [
  {
    title: "Step 1",
    vid: "/collapse/1.mp4",
    des: "Download any needed assets & install any needed libraries",
  },
  {
    title: "Step 2",
    vid: "/collapse/2.mp4",
    des: "Create a file for the component in your project & Simply copy the code from the example and paste it into your file.",
  },
  {
    title: "Step 3",
    vid: "/collapse/3.mp4",
    des: "Replace the assets in the code with your own if needed & modify the code to fit your needs",
  },
];

export default function Collapse() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="w-full h-full">
      <div className="w-[80%] m-auto h-full flex flex-col  justify-center gap-6">
        {/* <h2 className="text-6xl font-bold font-sans">Collapses</h2> */}
        <div className="w-full md:h-[60vh] flex md:flex-row flex-col gap-2">
          {Items.map((item, index) => (
            <CollapseItem
              key={index}
              item={item}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const CollapseItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: {
    title: string;
    des: string;
    vid: string;
  };
  index: number;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
}) => {
  const isActive = hoveredIndex === index;
  const vidroRef = useRef<HTMLVideoElement>(null);
  //play video if active
  if (isActive && vidroRef.current) {
    vidroRef.current.play();
  }

  //pause video if not active
  if (!isActive && vidroRef.current) {
    vidroRef.current.pause();
  }

  return (
    <div
      id="how"
      key={index}
      className={`relative md:h-full h-[40vh] w-full rounded-lg overflow-hidden transition-[width] duration-700 cursor-pointer bg-black border ${
        isActive ? "md:w-1/2" : "md:w-1/4"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <video
        ref={vidroRef}
        loop
        muted
        src={item.vid}
        className={`absolute right-0 top-0 object-cover rounded-lg z-0 duration-300 ${
          !isActive ? "brightness-50 w-full h-full " : " w-2/3 h-2/3 "
        }
        `}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center p-5 text-white z-10 ${
          !isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-300"
        }`}
      >
        <h2 className="text-6xl m-auto text-white rotate-90 font-sans font-semibold text-nowrap">
          {item.title}
        </h2>
      </div>
      <div
        className={`md:w-2/3 w-4/5 h-2/3 flex flex-col md:gap-5 gap-2 justify-end absolute md:bottom-10 bottom-5 left-0  p-5 z-10 ${
          isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        } transition-opacity`}
      >
        <h2 className="md:text-6xl text-3xl mb-2 text-white font-sans font-semibold">
          {item.title}
        </h2>
        <p className="text-white/50 md:text-base text-xs">{item.des}</p>
      </div>
    </div>
  );
};
