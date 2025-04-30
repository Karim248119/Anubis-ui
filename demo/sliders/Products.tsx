/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button1 } from "../buttons/Btn1";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";

//animations
const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

export const slideNext = {
  initial: { x: "100%" },
  animate: { x: "0" },
  exit: { x: "-50%", scale: 1.5 },
  transition: {
    duration: 1,
    delay: 0.1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const slidePrev = {
  initial: { x: "-100%" },
  animate: { x: "0" },
  exit: { x: "50%", scale: 1.5 },
  transition: {
    duration: 1,
    delay: 0.1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const slideOut = {
  initial: { x: "100%" },
  animate: { x: "-100%" },
  exit: { x: "100%" },
  transition: {
    duration: 0.5,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
export const h1Animation = {
  initial: { y: "10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-10%", opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const pAnimation = {
  initial: { y: "-10%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "10%", opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

//data

const Items = [
  {
    name: "zeus",
    description:
      "Zeus was the most powerful of the Greek gods and goddesses. As god of the sky and king of Olympus, his temper affected the weather. Zeus also rules over all other gods and goddesses, so he was worshipped in most ancient Greek homes through altars, shrines and daily offerings.",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8aee5750030ab118f6_ignore_designtafel_curl_walnut.jpeg",
  },
  {
    name: "Hera",
    description:
      "Wife of Zeus, Hera was queen of the Greek gods and also the goddess of marriage, women, families and birth, acting as their protector. However, Hera was known to be a vengeful god, and would take her jealousy of other goddess out on mortals. ",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8dee39d8aa16a13d08_ignore_designtafel_curl_conifer.jpeg",
  },
  {
    name: "Apollo",
    description:
      "Apollo was the ancient Greek god of many things, including the sun, music, poetry, art, dance, archery, and healing. The son of Zeus, Apollo played music for the Greek gods and goddesses on his golden lyre.",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718f0e90ab6a87ff57ab957_ignore_designtafel_curl_off_white.jpeg",
  },
  {
    name: "Aphrodite",
    description:
      "Aphrodite was largely worshipped as goddess of love and beauty in many of the city-states that made up Ancient Greece. As goddess of love and fertility, Aphrodite's symbols were doves, roses, swans, and sparrows.",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6717c0cff63bbf68d9243e7c_ignore_designtafel_curl_straight_powder.jpeg",
  },
];

const ProductsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const nextSlide = () => {
    if (Items.length > 0) {
      setCurrent((prev) => (prev + 1) % Items.length);
    }
    setIsNext(true);
  };

  const prevSlide = () => {
    if (Items.length > 0) {
      setCurrent((prev) => (prev - 1 + Items.length) % Items.length);
    }
    setIsNext(false);
  };

  if (Items.length === 0) {
    return (
      <div className="text-white flex items-center justify-center h-screen"></div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-black">
      {/* Image Slider */}
      <div className="md:w-1/2 w-full md:h-full overflow-hidden h-[50vh] relative ">
        <div className="h-full w-full absolute overflow-hidden top-0 left-0 z-10">
          {/* <div className=" w-full md:h-full h-full absolute overflow-hidden top-0 left-0 z-20 bg-black/10" /> */}
          <AnimatePresence>
            <motion.div
              key={current}
              className={`absolute w-full h-full `}
              {...(isNext ? slideNext : slidePrev)}
            >
              <img
                width={500}
                height={500}
                src={Items[current]?.img}
                alt={Items[current]?.name}
                className={`w-full h-full object-cover `}
              />
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="absolute z-50 md:w-[50vw] w-full md:h-full h-[50vh] bg-primary"
            {...slideOut}
          />
        </div>
      </div>

      {/* Text Section */}
      <>
        <div className=" md:w-1/2 w-full md:h-full h-[50vh] flex md:items-center gap-10 text-center md:text-start px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col "
            >
              <motion.h1
                className="text-6xl uppercase text-primary mb-5 text-wrap  font-serif"
                {...h1Animation}
              >
                {Items[current]?.name || "Unknown"}
              </motion.h1>
              <motion.p
                className=" text-white/60 w-2/3 min-h-36 font-light text-sm mb-5 "
                {...pAnimation}
              >
                {Items[current]?.description || "No description available."}
              </motion.p>

              <div className="flex gap-2">
                <Button1
                  onClick={prevSlide}
                  className="md:w-10 h-10 flex justify-center items-center"
                >
                  <GoChevronLeft />
                </Button1>
                <Button1
                  onClick={nextSlide}
                  className="md:w-10 h-10 flex justify-center items-center"
                >
                  <GoChevronRight />
                </Button1>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </>
    </div>
  );
};

export default ProductsSlider;

export const MythSliderCode = ``;
