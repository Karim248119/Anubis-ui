"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoLocation } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

//animations
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    position: "absolute",
  }),
  center: {
    x: 0,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    position: "absolute",
  }),
};

const Items = [
  {
    contry: "Egypt",
    locations: [
      {
        name: "Museum",
        city: "Cairo",
        image:
          "https://images.pexels.com/photos/28978134/pexels-photo-28978134/free-photo-of-grand-egyptian-museum-gallery-interior-in-cairo.png",
      },
      {
        name: "Pyramids",
        city: "Giza",
        image: "https://images.pexels.com/photos/91409/pexels-photo-91409.jpeg",
      },
      {
        name: "Karnak",
        city: "Luxor",
        image:
          "https://images.pexels.com/photos/18991548/pexels-photo-18991548/free-photo-of-hieroglyph-covered-sandstone-columns-in-the-karnak-great-hypostyle-hall.jpeg",
      },
    ],
  },
  {
    contry: "Greece",
    locations: [
      {
        name: "Acropolis",
        city: "Athens",
        image:
          "https://images.pexels.com/photos/772689/pexels-photo-772689.jpeg",
      },
      {
        name: "Hydra",
        city: "Santorini",
        image:
          "https://images.pexels.com/photos/13024390/pexels-photo-13024390.jpeg",
      },
      {
        name: "Navagio",
        city: "Kefallinia",
        image:
          "https://images.pexels.com/photos/29326451/pexels-photo-29326451/free-photo-of-rustic-shipwreck-on-a-pristine-beach.jpeg",
      },
    ],
  },
  {
    contry: "Italy",
    locations: [
      {
        name: "Colosseum",
        city: "Rome",
        image:
          "https://images.pexels.com/photos/3548625/pexels-photo-3548625.jpeg",
      },
      {
        name: "Pisa",
        city: "Tuscany",
        image:
          "https://images.pexels.com/photos/1144272/pexels-photo-1144272.jpeg",
      },
      {
        name: "Pompeii",
        city: "Rome",
        image:
          "https://images.pexels.com/photos/30208659/pexels-photo-30208659/free-photo-of-ancient-roman-ruins-at-the-roman-forum.jpeg",
      },
    ],
  },
];

const TravelSlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-white text-black">
      {/* content Section */}
      <div className="w-full h-full overflow-hidden relative ">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5 }}
            className="w-full h-full absolute flex  justify-center px-10 bg-white"
          >
            <div className=" space-y-5 w-1/3 h-full flex flex-col justify-center">
              <h1 className="text-4xl uppercase text-wrap font-sans font-extrabold">
                {Items[index]?.contry}
              </h1>
              <p className=" text-black/60 font-light text-sm ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                delectus beatae ab sint explicabo nemo quae voluptatibus vero
                vitae nulla, quia nostrum est repellat numquam, animi temporibus
                accusamus eveniet eum?
              </p>
              <button className="py-2 px-10 text-sm bg-red-600 shadow-xl shadow-red-600/30 text-white rounded-full w-fit">
                Explore
              </button>
            </div>
            <div className="w-2/3 h-full gap-5 flex justify-end items-center">
              {Items[index]?.locations?.map((location, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: i * 0.5,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                  className="w-[25%] h-[50%] flex flex-col justify-center items-center text-white relative shadow shadow-black"
                >
                  <Image
                    width={500}
                    height={1000}
                    src={location?.image}
                    alt={location?.name}
                    className="w-full h-full object-cover brightness-75"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-5">
                    <h1 className="text-xl uppercase text-wrap font-sans font-bold">
                      {location?.name}
                    </h1>
                    <p className=" font-light text-xs flex items-center gap-1">
                      <FaLocationDot className="text-[10px] text-red-700 " />
                      {location?.city}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="w-full py-5 px-10 absolute bottom-0 flex justify-between items-center">
        <div className="flex gap-5 text-sm">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
        <div className="text-sm">
          0{index + 1} <span className="text-red-600">/</span> 0{Items.length}
        </div>
        <div className="flex gap-2 ">
          <button
            onClick={() => paginate(-1)}
            className="w-7 aspect-square border border-black hover:bg-black hover:text-white rounded-full flex justify-center items-center duration-300"
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-7 aspect-square border border-black hover:bg-black hover:text-white rounded-full flex justify-center items-center duration-300"
          >
            <GoChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSlider;
