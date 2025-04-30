"use client";
import React from "react";
import { GiAnubis } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
import { PiDiamondsFourFill } from "react-icons/pi";

const links = [
  { text: "Home", href: "#" },
  { text: "About", href: "#about" },
  { text: "Products", href: "#Products" },
  { text: "History", href: "#History" },
  { text: "Contact", href: "#contact" },
];

export default function Nav2() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-20 p-10 flex justify-between items-center absolute top-0 left-0 uppercase font-montserrat ">
      <GiAnubis size={30} />
      <div className="">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-1 text-xs group relative z-20 mix-blend-difference"
        >
          Menu
          <PiDiamondsFourFill
            className={`text-sm duration-700 ${
              isOpen ? "rotate-[225deg]" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-white text-black text-xl absolute top-5 right-8 py-10 px-5 flex flex-col justify-between duration-500 overflow-hidden ${
          isOpen
            ? "rounded-xl h-[50vh] w-[20vw] opacity-100"
            : "rounded-bl-full h-0 w-0 opacity-0"
        }`}
      >
        <div>
          {links.map((link, index) => (
            <a href={link.href} key={index}>
              <div className="w-full font-semibold rounded-lg py-2 px-2 relative group overflow-hidden  hover:bg-blue-500/20">
                <span className="text-transparent"> {link.text}</span>
                <span className="absolute left-5 top-full group-hover:top-1/2 group-hover:-translate-y-1/2 duration-300">
                  {link.text}
                </span>
                <span className="absolute left-5 bottom-1/2 translate-y-1/2 group-hover:-translate-y-full duration-500 ">
                  {link.text}
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs self-end">
          <button className="flex gap-2 items-center group">
            LinkedIn
            <GoArrowUpRight className="group-hover:rotate-45 duration-300" />
          </button>
          <button className="flex gap-2 items-center group">
            Twitter
            <GoArrowUpRight className="group-hover:rotate-45 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
