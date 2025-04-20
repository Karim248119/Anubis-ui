"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Image from "next/image";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from "react-icons/fi";

//animations
const variants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    y: 0,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? "100%" : "-100%",
    position: "absolute",
  }),
};

const Items = [
  {
    title: "Ring",
    subtitle: "Toi et Moi Black Enamel Asscher ",
    image:
      "https://loevjewelry.com/cdn/shop/products/JE01_Toi_Moi_Black_Enamel_y.jpg?v=1660058537&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/LOEV_61_6922cf1d-a374-4d9e-a268-70ef6072babc_5000x.jpg?v=1661522510",
  },
  {
    title: "Creoles",
    subtitle: "Curve Diamond Creole",
    image:
      "https://loevjewelry.com/cdn/shop/files/CurveCreoles_5000x.jpg?v=1707162201",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_Diamond_Creole_ONMODEL_3_5000x_a369dc07-3210-4910-8629-fb0d50af02e5_5000x.webp?v=1732135125",
  },
  {
    title: "Stud",
    subtitle: "Double pear Stud",
    image:
      "https://loevjewelry.com/cdn/shop/files/JE72_Double_stud__00002-WG-Background_5000x.jpg?v=1738827420",
    model:
      "https://loevjewelry.com/cdn/shop/files/TheDuoPearDiamondStuds2_KopieFINALFINAL_b6102e30-c246-49f4-9aeb-247f2d0d6660_5000x.jpg?v=1739438434",
  },
];

const JewellerySlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden text-white flex">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="w-full h-full flex  bg-gradient-to-br  from-yellow-700 via-yellow-900 to-yellow-950"
        >
          {/* Image Slider */}

          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 h-full overflow-hidden flex justify-center z-20 origin-top"
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
                <AnimatedY className="text-6xl uppercase font-sans font-bold overflow-hidden">
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

          {/* content Section */}
          <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center p-10">
            <AnimatedY delay={0.5}>
              <Image
                src={Items[index]?.image}
                alt="jewellery"
                width={500}
                height={500}
                className="w-40 h-52 rounded-t-full object-cover brightness-75"
              />
            </AnimatedY>
            <AnimatedY
              tag="p"
              delay={0.7}
              className=" text-white/50 font-light text-xs text-center"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus beatae ab sint explicabo nemo quae voluptatibus vero
              voluptatum, quod aspernatur.
            </AnimatedY>

            <AnimatedY
              delay={0.8}
              tag="button"
              className="border border-white/50 uppercase text-xs py-2 px-6 rounded-full mt-5"
            >
              Add To Cart
            </AnimatedY>
          </div>
        </motion.div>
      </AnimatePresence>

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

export default JewellerySlider;

type AnimatedYProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
};

const AnimatedY = ({
  children,
  delay = 0.5,
  className = "",
  tag = "div",
  onClick,
  ...props
}: AnimatedYProps) => {
  const MotionTag = motion[tag as keyof typeof motion] as typeof motion.div;

  return (
    <div className="overflow-hidden">
      <MotionTag
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
};

export const jewelleryCode = `"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Image from "next/image";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from "react-icons/fi";

//animations
const variants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    y: 0,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? "100%" : "-100%",
    position: "absolute",
  }),
};

const Items = [
  {
    title: "Ring",
    subtitle: "Toi et Moi Black Enamel Asscher ",
    image:
      "https://loevjewelry.com/cdn/shop/products/JE01_Toi_Moi_Black_Enamel_y.jpg?v=1660058537&width=990",
    model:
      "https://loevjewelry.com/cdn/shop/files/LOEV_61_6922cf1d-a374-4d9e-a268-70ef6072babc_5000x.jpg?v=1661522510",
  },
  {
    title: "Creoles",
    subtitle: "Curve Diamond Creole",
    image:
      "https://loevjewelry.com/cdn/shop/files/CurveCreoles_5000x.jpg?v=1707162201",
    model:
      "https://loevjewelry.com/cdn/shop/files/Curve_Diamond_Creole_ONMODEL_3_5000x_a369dc07-3210-4910-8629-fb0d50af02e5_5000x.webp?v=1732135125",
  },
  {
    title: "Stud",
    subtitle: "Double pear Stud",
    image:
      "https://loevjewelry.com/cdn/shop/files/JE72_Double_stud__00002-WG-Background_5000x.jpg?v=1738827420",
    model:
      "https://loevjewelry.com/cdn/shop/files/TheDuoPearDiamondStuds2_KopieFINALFINAL_b6102e30-c246-49f4-9aeb-247f2d0d6660_5000x.jpg?v=1739438434",
  },
];

const JewellerySlider = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const index = ((page % Items.length) + Items.length) % Items.length;
  return (
    <div className="relative w-full h-full overflow-hidden text-white flex">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="w-full h-full flex  bg-gradient-to-br  from-yellow-700 via-yellow-900 to-yellow-950"
        >
          {/* Image Slider */}

          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1 }}
            className="w-1/2 h-full overflow-hidden flex justify-center z-20 origin-top"
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
                <AnimatedY className="text-6xl uppercase font-sans font-bold overflow-hidden">
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

          {/* content Section */}
          <div className="w-1/2 h-full flex flex-col gap-4 justify-center items-center p-10">
            <AnimatedY delay={0.5}>
              <Image
                src={Items[index]?.image}
                alt="jewellery"
                width={500}
                height={500}
                className="w-40 h-52 rounded-t-full object-cover brightness-75"
              />
            </AnimatedY>
            <AnimatedY
              tag="p"
              delay={0.7}
              className=" text-white/50 font-light text-xs text-center"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              delectus beatae ab sint explicabo nemo quae voluptatibus vero
              voluptatum, quod aspernatur.
            </AnimatedY>

            <AnimatedY
              delay={0.8}
              tag="button"
              className="border border-white/50 uppercase text-xs py-2 px-6 rounded-full mt-5"
            >
              Add To Cart
            </AnimatedY>
          </div>
        </motion.div>
      </AnimatePresence>

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

export default JewellerySlider;

type AnimatedYProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
};

const AnimatedY = ({
  children,
  delay = 0.5,
  className = "",
  tag = "div",
  onClick,
  ...props
}: AnimatedYProps) => {
  const MotionTag = motion[tag as keyof typeof motion] as typeof motion.div;

  return (
    <div className="overflow-hidden">
      <MotionTag
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
};
`;
