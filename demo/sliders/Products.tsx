"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

//animations

export const h1Variant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export const pVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.6,
    position: "absolute",
  }),
  center: {
    x: 0,
    scale: 1,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.6,
    position: "absolute",
  }),
};
//data

const Items = [
  {
    name: "Product 1",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8aee5750030ab118f6_ignore_designtafel_curl_walnut.jpeg",
  },
  {
    name: "Product 2",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8dee39d8aa16a13d08_ignore_designtafel_curl_conifer.jpeg",
  },
  {
    name: "Product 3",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718f0e90ab6a87ff57ab957_ignore_designtafel_curl_off_white.jpeg",
  },
];

const ProductsSlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-white text-black">
      <AnimatePresence>
        <div className="w-1/3 h-full relative ">
          <div
            key={index}
            className="h-full flex flex-col justify-between px-5 py-10  overflow-hidden"
          >
            <div className="space-y-5">
              <div className="flex gap-2">
                {Items.map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 flex items-center justify-center border border-black/30 rounded-sm text-xs ${
                      index === i ? "bg-lime-300" : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <motion.h1
                variants={h1Variant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() => setIsAnimating(false)}
                onAnimationStart={() => setIsAnimating(true)}
                className="text-4xl capitalize font-montserrat"
              >
                {Items[index]?.name}
              </motion.h1>
            </div>
            <motion.p
              variants={pVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="text-black/60 font-light text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis necessitatibus, quisquam maiores fugit dolorum porro
              quis, aliquam omnis id, tempore quidem neque ipsa consequatur
              iusto? Consectetur praesentium consequuntur tenetur sint.
            </motion.p>
          </div>
        </div>
      </AnimatePresence>
      <div className="relative w-2/3 border-l border-black/50 h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-white text-black">
        {/* content Section */}
        <div className="w-full h-full overflow-hidden relative ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={Items[index].name}
              variants={h1Variant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
              onAnimationComplete={() => setIsAnimating(false)}
              onAnimationStart={() => setIsAnimating(true)}
              className="text-4xl capitalize font-montserrat"
            >
              {Items[index]?.name}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={Items[index].name + "-desc"}
              variants={pVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="text-black/60 font-light text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis necessitatibus, quisquam maiores fugit dolorum porro
              quis, aliquam omnis id, tempore quidem neque ipsa consequatur
              iusto? Consectetur praesentium consequuntur tenetur sint.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="w-full py-5 px-10 absolute bottom-0 flex justify-center items-center">
          <div className="flex gap-2 ">
            <button
              disabled={isAnimating}
              onClick={() => paginate(-1)}
              className="w-10 cursor-pointer aspect-square group bg-black/5 rounded-full flex justify-center items-center overflow-hidden relative"
            >
              <span className="w-full h-full rounded-full bg-lime-300 absolute left-full group-hover:left-0 duration-300" />
              <GoChevronLeft className="text-xl relative z-10" />
            </button>
            <button
              disabled={isAnimating}
              onClick={() => paginate(1)}
              className="w-10 cursor-pointer aspect-square group bg-black/5 rounded-full flex justify-center items-center overflow-hidden relative"
            >
              <span className="w-full h-full rounded-full bg-lime-300 absolute right-full group-hover:right-0 duration-300" />
              <GoChevronRight className="text-xl relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;

export const ProductsSliderCode = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

//animations

export const h1Variant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export const pVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.6,
    position: "absolute",
  }),
  center: {
    x: 0,
    scale: 1,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    scale: 0.6,
    position: "absolute",
  }),
};
//data

const Items = [
  {
    name: "Product 1",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8aee5750030ab118f6_ignore_designtafel_curl_walnut.jpeg",
  },
  {
    name: "Product 2",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718ef8dee39d8aa16a13d08_ignore_designtafel_curl_conifer.jpeg",
  },
  {
    name: "Product 3",
    img: "https://cdn.prod.website-files.com/664f8bfa694001dd293fa707/6718f0e90ab6a87ff57ab957_ignore_designtafel_curl_off_white.jpeg",
  },
];

const ProductsSlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-white text-black">
      <AnimatePresence>
        <div className="w-1/3 h-full relative ">
          <div
            key={index}
            className="h-full flex flex-col justify-between px-5 py-10  overflow-hidden"
          >
            <div className="space-y-5">
              <div className="flex gap-2">
                {Items.map((_, i) => (
                  <div
                    key={i}
                    className={\`w-5 h-5 flex items-center justify-center border border-black/30 rounded-sm text-xs \${
                      index === i ? "bg-lime-300" : ""
                    }\`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <motion.h1
                variants={h1Variant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() => setIsAnimating(false)}
                onAnimationStart={() => setIsAnimating(true)}
                className="text-4xl capitalize font-montserrat"
              >
                {Items[index]?.name}
              </motion.h1>
            </div>
            <motion.p
              variants={pVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="text-black/60 font-light text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis necessitatibus, quisquam maiores fugit dolorum porro
              quis, aliquam omnis id, tempore quidem neque ipsa consequatur
              iusto? Consectetur praesentium consequuntur tenetur sint.
            </motion.p>
          </div>
        </div>
      </AnimatePresence>
      <div className="relative w-2/3 border-l border-black/50 h-full overflow-hidden flex md:flex-row flex-col items-center justify-center bg-white text-black">
        {/* content Section */}
        <div className="w-full h-full overflow-hidden relative ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={Items[index].name}
              variants={h1Variant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
              onAnimationComplete={() => setIsAnimating(false)}
              onAnimationStart={() => setIsAnimating(true)}
              className="text-4xl capitalize font-montserrat"
            >
              {Items[index]?.name}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={Items[index].name + "-desc"}
              variants={pVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              className="text-black/60 font-light text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis necessitatibus, quisquam maiores fugit dolorum porro
              quis, aliquam omnis id, tempore quidem neque ipsa consequatur
              iusto? Consectetur praesentium consequuntur tenetur sint.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="w-full py-5 px-10 absolute bottom-0 flex justify-center items-center">
          <div className="flex gap-2 ">
            <button
              disabled={isAnimating}
              onClick={() => paginate(-1)}
              className="w-10 cursor-pointer aspect-square group bg-black/5 rounded-full flex justify-center items-center overflow-hidden relative"
            >
              <span className="w-full h-full rounded-full bg-lime-300 absolute left-full group-hover:left-0 duration-300" />
              <GoChevronLeft className="text-xl relative z-10" />
            </button>
            <button
              disabled={isAnimating}
              onClick={() => paginate(1)}
              className="w-10 cursor-pointer aspect-square group bg-black/5 rounded-full flex justify-center items-center overflow-hidden relative"
            >
              <span className="w-full h-full rounded-full bg-lime-300 absolute right-full group-hover:right-0 duration-300" />
              <GoChevronRight className="text-xl relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;`;
