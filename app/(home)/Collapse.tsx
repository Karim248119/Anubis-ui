"use client";
import Button from "@/components/Button";
import { useRef, useState } from "react";

const Items = [
  {
    title: "Djoser’s Pyramid",
    img: "https://cdn.pixabay.com/video/2024/09/17/231869_large.mp4",
    des: "Djoser’s Step Pyramid in Saqqara is one of Egypt’s most iconic monuments—and rightfully so. It constitutes a significant historical turning point in ancient Egyptian funerary monuments, revolutionizing stone architecture and royal burials. In addition to its beauty and monumental scale, it is not only the very first pyramid that the ancient Egyptians ever built, but also the oldest known ancient Egyptian stone structure.",
  },
  {
    title: "Goddess Ma'at",
    img: "https://cdn.pixabay.com/video/2024/08/30/228825_large.mp4",
    des: "Maat was the goddess of harmony, justice, and truth represented as a young woman. Sometimes she is depicted with wings on each arm or as a woman with an ostrich feather on her head.",
  },
  {
    title: "Valley of the kings",
    des: `The Valley of the Kings, also known as the Valley of the Gates of the Kings, is an area in Egypt where, for a period of nearly 500 years from the Eighteenth Dynasty to the Twentieth Dynasty, rock-cut tombs were excavated for pharaohs and powerful nobles under the New Kingdom of ancient Egypt.`,
    img: "https://www.shutterstock.com/shutterstock/videos/3735889647/preview/stock-footage-ancient-egypt-pharaoh-s-passage-holographic-temple-loop-abstract-fantasy-immersive-appeal.webm",
  },
  {
    title: "Khufu's Tomb",
    img: "https://cdn.pixabay.com/video/2021/06/30/79602-570129375_large.mp4",
    des: "For the Old Kingdom the most characteristic form of tomb building was the true pyramid, the finest example of which is the Great Pyramid of King Khufu of the 4th dynasty, at Al-Jīzah.",
  },
];

export default function Collapse() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="w-full h-[90vh]">
      <div className="w-[80%] m-auto h-full flex flex-col  justify-center gap-6">
        <h2 className="text-6xl font-bold font-sans">Collapses</h2>
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
        <Button className="w-fit mt-10 self-end">View all collapses</Button>
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
    img: string;
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
      className={`relative h-full rounded-lg overflow-hidden transition-[width] duration-700 ${
        isActive ? "w-1/2" : "w-1/6"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <video
        ref={vidroRef}
        loop
        src={item.img}
        className={`w-full h-full absolute top-0 left-0 object-cover rounded-lg z-0 duration-300 ${
          isActive ? "brightness-75" : "brightness-50"
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center p-5 text-white z-10 ${
          !isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        }`}
      >
        <h2 className="text-3xl mb-2 text-white/80 rotate-90 font-serif text-nowrap">
          {item.title}
        </h2>
      </div>
      <div
        className={`w-2/3 h-full flex flex-col gap-5 justify-center p-5 text-white/70 relative z-10 ${
          isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        } transition-opacity`}
      >
        <h2 className="text-4xl font-bold  mb-2 text-white font-serif">
          {item.title}
        </h2>
        <p className="font-sans font-extralight text-xs">{item.des}</p>
      </div>
    </div>
  );
};
