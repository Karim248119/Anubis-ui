"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Items = [
  {
    name: "CNC Machine",
    img: "https://images.pexels.com/photos/3688760/pexels-photo-3688760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A CNC machine, also known as a Computer Numerical Control machine, is a type of automated machine tool that uses computer programs to control its movements. CNC machines are typically used for milling, drilling, and other types of precision cutting and machining.",
  },
  {
    name: "3D Printer",
    img: "https://images.pexels.com/photos/19124461/pexels-photo-19124461/free-photo-of-laptop-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A 3D printer is a type of machine that uses additive manufacturing techniques to create three-dimensional objects. 3D printers work by depositing successive layers of material, such as plastic or metal, to build up the desired shape.",
  },
  {
    name: "Laser Cutter",
    img: "https://images.pexels.com/photos/29988967/pexels-photo-29988967/free-photo-of-modern-laser-cutter-in-industrial-environment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A laser cutter is a type of machine that uses laser technology to cut materials such as wood, metal, plastic, and other materials.",
  },
  {
    name: "Robotic Arm ",
    img: "https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A robotic arm is a type of machine that is designed to mimic the movements of a human arm. Robotic arms are commonly used in manufacturing to perform tasks that require precise movements and high speed, such as welding, painting, and assembly.",
  },
];

export default function Collapse5() {
  const [index, setIndex] = useState(0);
  const prevIndexRef = useRef(index);

  useEffect(() => {
    prevIndexRef.current = index;
  }, [index]);

  const prevIndex = prevIndexRef.current;

  return (
    <div className="w-full h-full grid grid-cols-3 gap-5 bg-white text-black">
      <div className="w-full h-full relative overflow-hidden rounded-lg">
        <Image
          key={`static-${prevIndex}`}
          src={Items[prevIndex].img}
          alt={Items[prevIndex].name}
          fill
          className="object-cover rounded-lg brightness-90 absolute inset-0 z-10"
        />

        <motion.div
          key={index}
          className="absolute inset-0 z-20"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={Items[index].img}
            alt={Items[index].name}
            fill
            className="object-cover rounded-lg brightness-90"
          />
        </motion.div>
      </div>

      <div className="col-span-2 flex flex-col">
        {Items.map((item, i) => (
          <CollapseItem
            key={i}
            item={item}
            setIndex={setIndex}
            currentIndex={i}
          />
        ))}
      </div>
    </div>
  );
}

const CollapseItem = ({
  item,
  setIndex,
  currentIndex,
}: {
  item: { name: string; img: string; description: string };
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
      setIndex(currentIndex);
    } else {
      setHeight("0px");
    }
  }, [isOpen, currentIndex, setIndex]);

  return (
    <div className="border-t border-black/10 group">
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex gap-4 items-center md:py-5 px-2 md:h-auto h-20"
      >
        <div className="relative w-10 aspect-square flex justify-center items-center border border-rose-800/30 rounded-full">
          <div
            className={`w-4 h-[0.5px] bg-rose-800 duration-500 absolute ${
              !isOpen && "rotate-90"
            }`}
          />
          <div className="w-4 h-[0.5px] bg-rose-800 center" />
        </div>
        <h2 className="capitalize md:text-2xl font-semibold">{item.name}</h2>
      </button>

      <div style={{ height }} className="overflow-hidden duration-500">
        <div ref={ref}>
          <p className="text-xs text-black/60 px-16 pb-5">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
