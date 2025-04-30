"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { Fonts } from "@/lib/fonts";
import { GiAnubis } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";

export default function Nav1() {
  const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/#about" },
    { text: "Projects", href: "/#projects" },
    { text: "Courses", href: "/#courses" },
    { text: "Contact", href: "/#contact" },
  ];
  const sideLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/#about" },
    { text: "Works", href: "/Works" },
    { text: "Contact", href: "/#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY < prevScrollY.current) {
        setShowNavLinks(true);
      } else {
        setShowNavLinks(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Link href="/">
        <div className="text-white mix-blend-difference absolute md:top-8 top-6 md:left-20 left-5 z-40">
          <GiAnubis size={34} />
        </div>
      </Link>
      <div className="flex gap-10 items-center absolute top-5 right-20 z-40 mix-blend-difference">
        <AnimatePresence>
          {showNavLinks && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-10 items-center"
            >
              <div className="xl:flex gap-4 hidden">
                {links.map((link, index) => (
                  <a key={index} href={link.href} className="text-white">
                    {link.text}
                  </a>
                ))}
              </div>
              <div
                className={`w-[1px] bg-white origin-center duration-300 ease-in-out hidden xl:block ${
                  isOpen ? "h-0" : "h-4"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="flex md:w-20 w-12 h-10 flex-col gap-2 overflow-hidden group md:relative absolute top-3 right-4 md:top-0 md:right-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-full h-[1px] bg-white absolute top-4 left-0 duration-500 group-hover:left-5" />
          <div className="w-full h-[1px] bg-white absolute bottom-4 left-0 duration-500 group-hover:-left-5" />
        </button>
      </div>
      <div
        className={`w-screen h-screen bg-black fixed left-0 duration-500 delay-300 ease-in-out z-[1000] ${
          isOpen ? "top-0" : "top-full"
        }`}
      >
        <div className="w-full h-full flex md:flex-row flex-col relative">
          <button
            onClick={() => setIsOpen(false)}
            className="md:h-16 md:w-16 h-8 w-8 text-lg bg-white text-black rounded-full flex justify-center items-center absolute top-5 md:right-20 right-5 hover:scale-90 duration-300 z-30"
          >
            <TfiClose />
          </button>

          <div className="flex gap-10 md:w-3/4 w-full md:h-full h-3/4 justify-center items-center md:flex-row flex-col ">
            <div className="flex flex-col gap-10 text-white">
              <AnimatePresence>
                {isOpen &&
                  sideLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      className="group w-fit"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5 + (index + 1) * 0.15,
                      }}
                    >
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className="overflow-hidden flex gap-5 items-center"
                      >
                        <div className="md:text-4xl text-2xl font-light font-serif italic">
                          0{index + 1}.
                        </div>
                        <div className="md:text-9xl text-4xl capitalize font-sans font-bold">
                          {link.text}
                        </div>
                      </Link>
                      <div className="w-0 h-[1px] group-hover:w-full bg-white duration-700" />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
          <div
            className={`md:w-[1px] h-[0.5px] bg-white origin-center duration-300 ease-in-out m-auto ${
              isOpen ? "md:h-[90vh] w-[90vw]" : "md:h-0 w-0"
            }`}
          />
          <div className="relative flex md:w-1/4 w-full md:h-full h-1/4">
            <div className="absolute md:bottom-28 md:left-5 md:translate-x-0 md:translate-y-0 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col gap-5">
              <button className="flex gap-2 items-center group">
                LinkedIn
                <GoArrowUpRight className="group-hover:rotate-45 duration-300" />
              </button>
              <button className="flex gap-2 items-center group">
                Twitter
                <GoArrowUpRight className="group-hover:rotate-45 duration-300" />
              </button>
              <p>karimoda66@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
