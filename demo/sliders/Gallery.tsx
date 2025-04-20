"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Gallery = [
  {
    title: "summer",
    imgs: [
      "https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    title: "winter",
    imgs: [
      "https://images.pexels.com/photos/789382/pexels-photo-789382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    title: "autumn",
    imgs: [
      "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5429056/pexels-photo-5429056.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/10571130/pexels-photo-10571130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  {
    title: "spring",
    imgs: [
      "https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/86431/field-of-poppies-brandenburg-nature-royalty-free-86431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
];

const imageStyles = [
  "w-60 h-72 object-cover -rotate-12 mt-8 brightness-75",
  "w-60 h-72 object-cover brightness-75 ",
  "w-60 h-72 object-cover rotate-12 mt-8 brightness-75",
];

export default function GallerySlider() {
  const [index, setIndex] = useState(0);
  const collection = Gallery[index];

  const slideVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const toTop = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "keyframes",
      delay: 0.5,
    },
  };

  const transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    delay: 0.2,
  };

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center items-center bg-slate-950">
      <div className="flex items-center justify-center relative">
        <div className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 py-2">
          <motion.div key={index} {...toTop}>
            <h2 className="text-center text-8xl text-nowrap uppercase font-serif font-light">
              {collection.title}
            </h2>
          </motion.div>
        </div>

        {collection.imgs.map((img, i) => (
          <motion.div
            key={`${index}-${i}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: transition.delay + i * 0.2 }}
            style={{ zIndex: i === 1 ? 10 : 1 }}
          >
            <Image
              width={500}
              height={500}
              alt={collection.title}
              className={imageStyles[i]}
              src={img}
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setIndex(index - 1)}
        disabled={index === 0}
        className="w-40 h-40 border rounded-full absolute -left-20 flex items-center justify-end pr-10"
      >
        <GoChevronLeft />
      </button>

      <button
        onClick={() => setIndex(index + 1)}
        disabled={index === Gallery.length - 1}
        className="w-40 h-40 border rounded-full absolute -right-20 flex items-center justify-start pl-10"
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
