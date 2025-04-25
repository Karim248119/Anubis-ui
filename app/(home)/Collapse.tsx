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
  // {
  //   title: "Step 4",
  //   vid: "/collapse/v22.mp4",
  //   des: "Replace any needed assets & modify the code to fit your needs",
  // },
];

export default function Collapse() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="w-full h-[90vh]">
      <div className="w-[80%] m-auto h-full flex flex-col  justify-center gap-6">
        {/* <h2 className="text-6xl font-bold font-sans">Collapses</h2> */}
        <div className="w-full h-[60vh] flex gap-2">
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
        <Button
          variant="link"
          href="/components/collapse"
          className="w-fit mt-10 self-end"
        >
          View all collapse components
        </Button>
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
      key={index}
      className={`relative h-full rounded-lg overflow-hidden transition-[width] duration-700 cursor-pointer bg-black border ${
        isActive ? "w-1/2" : "w-1/4"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <video
        ref={vidroRef}
        loop
        muted
        src={item.vid}
        className={`absolute right-0 object-cover rounded-lg z-0 duration-300 ${
          !isActive
            ? "brightness-50 w-full h-full top-0"
            : "brightness-90 w-2/3 h-2/3 top-5"
        }`}
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
        className={`w-2/3 h-2/3 flex flex-col gap-5 justify-end absolute bottom-10 left-0  p-5 text-white/90  z-10 ${
          isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        } transition-opacity`}
      >
        <h2 className="text-6xl  mb-2 text-white font-sans font-semibold">
          {item.title}
        </h2>
        <p className="">{item.des}</p>
      </div>
    </div>
  );
};
