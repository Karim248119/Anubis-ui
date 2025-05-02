"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//animations
const variants2: Variants = {
  enter: { y: "100%" },
  center: { y: 0 },
  exit: { y: "-100%" },
};

export const contentVariant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const variants: Variants = {
  enter: {
    height: 0,
  },
  center: {
    height: "100%",
  },
  exit: {
    height: 0,
    position: "absolute",
    opacity: 0,
  },
};

const Items = [
  {
    title: "Stud",
    subtitle: "Double pear Stud",
    image:
      "https://loevjewelry.com/cdn/shop/files/JE58_DiamondPuffyHuggie_update__00000POLISHED-YG_cdcf8a5b-1ff5-4365-aaeb-963dcd636ad6.jpg?v=1717687440&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_DiamondCreoleAndHuggieHOR_5000x.jpg?v=1707160382",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-yellow-900 to-orange-200 ",
  },
  {
    title: "Ring",
    subtitle: "Toi et Moi Black Enamel Asscher ",
    image:
      "https://loevjewelry.com/cdn/shop/products/JE01_Toi_Moi_Black_Enamel_y.jpg?v=1660058537&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/LOEV_61_6922cf1d-a374-4d9e-a268-70ef6072babc_5000x.jpg?v=1661522510",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-zinc-700 to-orange-200 ",
  },
  {
    title: "Creoles",
    subtitle: "Curve Diamond Creole",
    image:
      "https://loevjewelry.com/cdn/shop/files/CurveCreoles_5000x.jpg?v=1707162201",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_Diamond_Creole_ONMODEL_3_5000x_a369dc07-3210-4910-8629-fb0d50af02e5_5000x.webp?v=1732135125",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-yellow-900 to-yellow-500 ",
  },
];

const JewelrySlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden text-white flex">
      <div className="w-full h-full flex ">
        <motion.div
          key={page}
          custom={direction}
          variants={variants2}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className={Items[index]?.bg}
        />
        {/* Image Slider */}
        <div className="w-1/2 flex relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={page}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className="w-full h-full absolute top-0 left-0  overflow-hidden flex justify-center z-20"
            >
              <div className="relative w-full h-full flex flex-col justify-center">
                <Image
                  src={Items[index]?.model}
                  alt="jewellery"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-center space-y-1 text-nowrap">
                  <AnimatedY className="text-7xl uppercase font-sans font-bold overflow-hidden">
                    {Items[index]?.title}
                  </AnimatedY>
                  <AnimatedY
                    delay={0.7}
                    className="text-sm font-light text-white/50"
                  >
                    {Items[index]?.subtitle}
                  </AnimatedY>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* content Section */}
        <div
          key={index}
          className="w-1/2 h-full flex flex-col justify-center items-center gap-5 relative p-10"
        >
          <AnimatedY key={page} delay={0.5} className="w-60 h-72 relative">
            <Image
              src={Items[index]?.image}
              alt="jewellery"
              width={500}
              height={500}
              className="w-[95%] h-[95%] rounded-t-full object-cover brightness-75 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <div className="w-[95%] h-[95%] rounded-t-full border border-white/60 absolute top-0 left-0" />
          </AnimatedY>

          <AnimatedY
            tag="p"
            delay={0.7}
            className=" text-white/50 font-light text-xs "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus beatae ab sint explicabo nemo quae voluptatibus vero
            voluptatum, quod aspernatur.
          </AnimatedY>

          <AnimatedY
            delay={0.8}
            tag="button"
            className="border border-white/50 border-b-0 uppercase text-xs py-3 px-12 rounded-[120%] mt-5 w-fit"
          >
            Add To Cart
          </AnimatedY>
        </div>
      </div>
      {/* Button Section */}
      <div className="w-1/2 flex justify-center items-center gap-3 absolute bottom-5 right-0 z-30">
        <button onClick={() => paginate(-1)} className="">
          <FiChevronDown />
        </button>
        <div className="w-[1px] h-8 bg-white/[0.2]" />
        <button onClick={() => paginate(1)} className="">
          <FiChevronUp />
        </button>
      </div>
    </div>
  );
};

export default JewelrySlider;

type AnimatedYProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
  key?: number;
};

const AnimatedY = ({
  children,
  delay = 0.5,
  className = "",
  tag = "div",
  onClick,
  key,
  ...props
}: AnimatedYProps) => {
  const MotionTag = motion[tag as keyof typeof motion] as typeof motion.div;

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <MotionTag
          variants={contentVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          key={key}
          transition={{ duration: 0.3, delay, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </MotionTag>
      </AnimatePresence>
    </div>
  );
};

export const JewelrySliderCode = `
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//animations
const variants2: Variants = {
  enter: { y: "100%" },
  center: { y: 0 },
  exit: { y: "-100%" },
};

export const contentVariant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const variants: Variants = {
  enter: {
    height: 0,
  },
  center: {
    height: "100%",
  },
  exit: {
    height: 0,
    position: "absolute",
    opacity: 0,
  },
};

const Items = [
  {
    title: "Stud",
    subtitle: "Double pear Stud",
    image:
      "https://loevjewelry.com/cdn/shop/files/JE58_DiamondPuffyHuggie_update__00000POLISHED-YG_cdcf8a5b-1ff5-4365-aaeb-963dcd636ad6.jpg?v=1717687440&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_DiamondCreoleAndHuggieHOR_5000x.jpg?v=1707160382",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-yellow-900 to-orange-200 ",
  },
  {
    title: "Ring",
    subtitle: "Toi et Moi Black Enamel Asscher ",
    image:
      "https://loevjewelry.com/cdn/shop/products/JE01_Toi_Moi_Black_Enamel_y.jpg?v=1660058537&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/LOEV_61_6922cf1d-a374-4d9e-a268-70ef6072babc_5000x.jpg?v=1661522510",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-zinc-700 to-orange-200 ",
  },
  {
    title: "Creoles",
    subtitle: "Curve Diamond Creole",
    image:
      "https://loevjewelry.com/cdn/shop/files/CurveCreoles_5000x.jpg?v=1707162201",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_Diamond_Creole_ONMODEL_3_5000x_a369dc07-3210-4910-8629-fb0d50af02e5_5000x.webp?v=1732135125",
    bg: "w-full h-full absolute top-0 left-0 bg-gradient-to-b  from-yellow-900 to-yellow-500 ",
  },
];

const JewelrySlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden text-white flex">
      <div className="w-full h-full flex ">
        <motion.div
          key={page}
          custom={direction}
          variants={variants2}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className={Items[index]?.bg}
        />
        {/* Image Slider */}
        <div className="w-1/2 flex relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={page}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
              className='w-full h-full absolute top-0 left-0  overflow-hidden flex justify-center z-20'
            >
              <div className="relative w-full h-full flex flex-col justify-center">
                <Image
                  src={Items[index]?.model}
                  alt="jewellery"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-center space-y-1 text-nowrap">
                  <AnimatedY className="text-7xl uppercase font-sans font-bold overflow-hidden">
                    {Items[index]?.title}
                  </AnimatedY>
                  <AnimatedY
                    delay={0.7}
                    className="text-sm font-light text-white/50"
                  >
                    {Items[index]?.subtitle}
                  </AnimatedY>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* content Section */}
        <div
          key={index}
          className="w-1/2 h-full flex flex-col justify-center items-center gap-5 relative p-10"
        >
          <AnimatedY key={page} delay={0.5} className="w-60 h-72 relative">
            <Image
              src={Items[index]?.image}
              alt="jewellery"
              width={500}
              height={500}
              className="w-[95%] h-[95%] rounded-t-full object-cover brightness-75 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
            <div className="w-[95%] h-[95%] rounded-t-full border border-white/60 absolute top-0 left-0" />
          </AnimatedY>

          <AnimatedY
            tag="p"
            delay={0.7}
            className=" text-white/50 font-light text-xs "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            delectus beatae ab sint explicabo nemo quae voluptatibus vero
            voluptatum, quod aspernatur.
          </AnimatedY>

          <AnimatedY
            delay={0.8}
            tag="button"
            className="border border-white/50 border-b-0 uppercase text-xs py-3 px-12 rounded-[120%] mt-5 w-fit"
          >
            Add To Cart
          </AnimatedY>
        </div>
      </div>
      {/* Button Section */}
      <div className="w-1/2 flex justify-center items-center gap-3 absolute bottom-5 right-0 z-30">
        <button onClick={() => paginate(-1)} className="">
          <FiChevronDown />
        </button>
        <div className="w-[1px] h-8 bg-white/[0.2]" />
        <button onClick={() => paginate(1)} className="">
          <FiChevronUp />
        </button>
      </div>
    </div>
  );
};

export default JewelrySlider;

type AnimatedYProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
  key?: number;
};

const AnimatedY = ({
  children,
  delay = 0.5,
  className = "",
  tag = "div",
  onClick,
  key,
  ...props
}: AnimatedYProps) => {
  const MotionTag = motion[tag as keyof typeof motion] as typeof motion.div;

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <MotionTag
          variants={contentVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          key={key}
          transition={{ duration: 0.3, delay, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </MotionTag>
      </AnimatePresence>
    </div>
  );
};

`;
