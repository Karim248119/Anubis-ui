"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

//animations
const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

const slideNext = {
  initial: { x: "100%" },
  animate: { x: "0" },
  exit: { x: "-100%" },
  transition: {
    duration: 1,
    delay: 0,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
const slidePrev = {
  initial: { x: "-100%" },
  animate: { x: "0" },
  exit: { x: "100%" },
  transition: {
    duration: 1,
    delay: 0,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};

const Items = [
  {
    title: "blue suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://www.pngplay.com/wp-content/uploads/7/Model-Man-PNG-Images-HD.png",
    backgroundImg:
      "https://images.pexels.com/photos/1796503/pexels-photo-1796503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#000058",
  },
  {
    title: "red suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://d1fufvy4xao6k9.cloudfront.net/feed/img/woman_suitskirt/1091965/3.png",
    backgroundImg:
      "https://images.pexels.com/photos/1208781/pexels-photo-1208781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#b10000",
  },
  {
    title: "black suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://www.pngkey.com/png/full/799-7993949_john-wick-transparent-men-suit-style-navy-blue.png",
    backgroundImg:
      "https://images.pexels.com/photos/556918/pexels-photo-556918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#222",
  },

  {
    title: "brown suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/1191110/1191110_small.png",
    backgroundImg:
      "https://images.pexels.com/photos/1209782/pexels-photo-1209782.jpeg",
    color: "#633200",
  },
];

const SuitsSlider = () => {
  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const nextSlide = () => {
    if (Items.length > 0) {
      setIndex((prev) => (prev + 1) % Items.length);
    }
    setIsNext(true);
  };

  const prevSlide = () => {
    if (Items.length > 0) {
      setIndex((prev) => (prev - 1 + Items.length) % Items.length);
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
      {/* content Section */}
      <div className="w-1/3 h-full overflow-hidden relative ">
        {Items.map((item, i) => (
          <motion.div
            key={index}
            {...(isNext ? slidePrev : slideNext)}
            className="w-full h-full absolute flex flex-col justify-center"
            style={{ backgroundColor: Items[index]?.color }}
          >
            <div className="px-5 space-y-5">
              <div>
                0{index + 1} - 0{Items.length}
              </div>
              <h1 className="text-4xl uppercase text-primary text-wrap font-serif">
                {Items[index]?.title || "Unknown"}
              </h1>
              <p className=" text-white/60 font-light text-sm ">
                {Items[index]?.description || "No description available."}
              </p>
            </div>
            <button className="border-t absolute bottom-0 w-full h-16 flex justify-center items-center gap-5 group">
              Add to Cart
              <HiArrowSmallRight className="rotate-45 group-hover:rotate-0 duration-300" />
            </button>
          </motion.div>
        ))}
      </div>
      {/* Image Slider */}
      <div className="w-2/3 h-full overflow-hidden relative ">
        <div className="h-full w-full absolute overflow-hidden top-0 left-0 z-10">
          {/* <div className=" w-full md:h-full h-full absolute overflow-hidden top-0 left-0 z-20 bg-black/10" /> */}
          {Items.map((item, i) => (
            <motion.div
              key={index}
              className={`absolute w-full h-full `}
              {...(isNext ? slideNext : slidePrev)}
            >
              <img
                src={Items[index]?.backgroundImg}
                alt={Items[index]?.title}
                className="w-full h-full object-cover brightness-50"
              />
            </motion.div>
          ))}
          <AnimatePresence>
            <motion.div
              key={index}
              className={`absolute w-full h-full flex justify-center items-end`}
              {...(isNext ? slidePrev : slideNext)}
            >
              <img
                src={Items[index]?.model}
                alt={Items[index]?.title}
                className="w-auto h-[80%] brughtness-75"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 absolute bottom-5 right-5 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SuitsSlider;

export const SuitsSliderCode = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

//animations
const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

const slideNext = {
  initial: { x: "100%" },
  animate: { x: "0" },
  exit: { x: "-100%" },
  transition: {
    duration: 1,
    delay: 0,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
const slidePrev = {
  initial: { x: "-100%" },
  animate: { x: "0" },
  exit: { x: "100%" },
  transition: {
    duration: 1,
    delay: 0,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};

const Items = [
  {
    title: "blue suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://www.pngplay.com/wp-content/uploads/7/Model-Man-PNG-Images-HD.png",
    backgroundImg:
      "https://images.pexels.com/photos/1796503/pexels-photo-1796503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#000058",
  },
  {
    title: "red suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://d1fufvy4xao6k9.cloudfront.net/feed/img/woman_suitskirt/1091965/3.png",
    backgroundImg:
      "https://images.pexels.com/photos/1208781/pexels-photo-1208781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#b10000",
  },
  {
    title: "black suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://www.pngkey.com/png/full/799-7993949_john-wick-transparent-men-suit-style-navy-blue.png",
    backgroundImg:
      "https://images.pexels.com/photos/556918/pexels-photo-556918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "#222",
  },

  {
    title: "brown suit",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quae. ",
    model:
      "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/1191110/1191110_small.png",
    backgroundImg:
      "https://images.pexels.com/photos/1209782/pexels-photo-1209782.jpeg",
    color: "#633200",
  },
];

const SuitsSlider = () => {
  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);

  const nextSlide = () => {
    if (Items.length > 0) {
      setIndex((prev) => (prev + 1) % Items.length);
    }
    setIsNext(true);
  };

  const prevSlide = () => {
    if (Items.length > 0) {
      setIndex((prev) => (prev - 1 + Items.length) % Items.length);
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
      {/* content Section */}
      <div className="w-1/3 h-full overflow-hidden relative ">
        {Items.map((item, i) => (
          <motion.div
            key={index}
            {...(isNext ? slidePrev : slideNext)}
            className="w-full h-full absolute flex flex-col justify-center"
            style={{ backgroundColor: Items[index]?.color }}
          >
            <div className="px-5 space-y-5">
              <div>
                0{index + 1} - 0{Items.length}
              </div>
              <h1 className="text-4xl uppercase text-primary text-wrap font-serif">
                {Items[index]?.title || "Unknown"}
              </h1>
              <p className=" text-white/60 font-light text-sm ">
                {Items[index]?.description || "No description available."}
              </p>
            </div>
            <button className="border-t absolute bottom-0 w-full h-16 flex justify-center items-center gap-5 group">
              Add to Cart
              <HiArrowSmallRight className="rotate-45 group-hover:rotate-0 duration-300" />
            </button>
          </motion.div>
        ))}
      </div>
      {/* Image Slider */}
      <div className="w-2/3 h-full overflow-hidden relative ">
        <div className="h-full w-full absolute overflow-hidden top-0 left-0 z-10">
          {/* <div className=" w-full md:h-full h-full absolute overflow-hidden top-0 left-0 z-20 bg-black/10" /> */}
          {Items.map((item, i) => (
            <motion.div
              key={index}
              className={\`absolute w-full h-full \`}
              {...(isNext ? slideNext : slidePrev)}
            >
              <img
                src={Items[index]?.backgroundImg}
                alt={Items[index]?.title}
                className="w-full h-full object-cover brightness-50"
              />
            </motion.div>
          ))}
          <AnimatePresence>
            <motion.div
              key={index}
              className={\`absolute w-full h-full flex justify-center items-end\`}
              {...(isNext ? slidePrev : slideNext)}
            >
              <img
                src={Items[index]?.model}
                alt={Items[index]?.title}
                className="w-auto h-[80%] brughtness-75"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-2 absolute bottom-5 right-5 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <GoChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 border rounded-full flex justify-center items-center"
        >
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SuitsSlider;
`;
