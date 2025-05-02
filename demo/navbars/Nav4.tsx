"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = [
  {
    text: "Home",
    href: "/",
    img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "About",
    href: "#about",
    img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Gallery",
    href: "#Gallery",
    img: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Contact",
    href: "#contact",
    img: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const contacts = [
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/anubisdev/",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/AnubisDev",
  },
  {
    text: "Github",
    href: "https://github.com/AnubisDev",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/anubisdev/",
  },
];

export default function Nav4() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgIndex, setImgIndex] = React.useState(0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-full overflow-hidden relative text-white">
      <div className="w-full h-14 px-10 flex justify-between items-center absolute top-0 left-0 uppercase font-montserrat z-30">
        <h1 className="text-3xl font-bold">ANUBIS</h1>
        <button
          onClick={toggleMenu}
          className="h-full w-14 relative z-50 flex items-center"
        >
          <div
            className={`py-1 px-3 bg-purple-500 rounded-full overflow-hidden duration-300 absolute left-0 ${
              isOpen ? "scale-0" : ""
            }`}
          >
            Menu
          </div>
          <div
            className={`py-1 px-3 text-yellow-300 border-2 border-yellow-300/50 rounded-full overflow-hidden duration-300 absolute left-0 ${
              isOpen ? "" : "scale-0"
            }`}
          >
            Close
          </div>
        </button>
      </div>
      <div
        className={`h-screen w-[120vw]  absolute top-0 left-0 bg-purple-900 overflow-hidden z-20 origin-top-left duration-700 ${
          isOpen ? "rotate-3" : "rotate-90 "
        }`}
      >
        <div className="w-full h-full pr-[50vw] relative flex flex-col items-end py-10 -rotate-3">
          <div className="w-[60vw] border-[80px] aspect-square rounded-full bg-purple-300 absolute -top-[30vw] -left-[20vw] flex justify-end items-end overflow-hidden">
            <Image
              width={2000}
              height={2000}
              src={Links[imgIndex].img}
              alt={Links[imgIndex].text}
              className="w-[70%] aspect-square object-cover"
            />
          </div>
          <AnimatePresence>
            {isOpen &&
              Links.map((link, index) => (
                <motion.div
                  key={index}
                  className="w-fit"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3 + (index + 1) * 0.15,
                  }}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    onMouseEnter={() => setImgIndex(index)}
                  >
                    <div className="md:text-8xl text-4xl uppercase font-montserrat font-bold hover:scale-105 hover:text-yellow-300 duration-300 my-2">
                      {link.text}
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
          <div className="flex gap-5 mt-5">
            {contacts.map((link, index) => (
              <motion.div
                key={index}
                className="w-fit group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link onClick={() => setIsOpen(false)} href={link.href}>
                  <div>{link.text}</div>
                  <div className="w-0 h-[1px] group-hover:w-full bg-white duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Nav4Code = `"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = [
  {
    text: "Home",
    href: "/",
    img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "About",
    href: "#about",
    img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Gallery",
    href: "#Gallery",
    img: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Contact",
    href: "#contact",
    img: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const contacts = [
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/anubisdev/",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/AnubisDev",
  },
  {
    text: "Github",
    href: "https://github.com/AnubisDev",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/anubisdev/",
  },
];

export default function Nav4() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgIndex, setImgIndex] = React.useState(0);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-full overflow-hidden relative text-white">
      <div className="w-full h-14 px-10 flex justify-between items-center absolute top-0 left-0 uppercase font-montserrat z-30">
        <h1 className="text-3xl font-bold">ANUBIS</h1>
        <button
          onClick={toggleMenu}
          className="h-full w-14 relative z-50 flex items-center"
        >
          <div
            className={\`py-1 px-3 bg-purple-500 rounded-full overflow-hidden duration-300 absolute left-0 \${
              isOpen ? "scale-0" : ""
            }\`}
          >
            Menu
          </div>
          <div
            className={\`py-1 px-3 text-yellow-300 border-2 border-yellow-300/50 rounded-full overflow-hidden duration-300 absolute left-0 \${
              isOpen ? "" : "scale-0"
            }\`}
          >
            Close
          </div>
        </button>
      </div>
      <div
        className={\`h-screen w-[120vw]  absolute top-0 left-0 bg-purple-900 overflow-hidden z-20 origin-top-left duration-700 \${
          isOpen ? "rotate-3" : "rotate-90 "
        }\`}
      >
        <div className="w-full h-full pr-[50vw] relative flex flex-col items-end py-10 -rotate-3">
          <div className="w-[60vw] border-[80px] aspect-square rounded-full bg-purple-300 absolute -top-[30vw] -left-[20vw] flex justify-end items-end overflow-hidden">
            <Image
              width={2000}
              height={2000}
              src={Links[imgIndex].img}
              alt={Links[imgIndex].text}
              className="w-[70%] aspect-square object-cover"
            />
          </div>
          <AnimatePresence>
            {isOpen &&
              Links.map((link, index) => (
                <motion.div
                  key={index}
                  className="w-fit"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3 + (index + 1) * 0.15,
                  }}
                >
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.href}
                    onMouseEnter={() => setImgIndex(index)}
                  >
                    <div className="md:text-8xl text-4xl uppercase font-montserrat font-bold hover:scale-105 hover:text-yellow-300 duration-300 my-2">
                      {link.text}
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
          <div className="flex gap-5 mt-5">
            {contacts.map((link, index) => (
              <motion.div
                key={index}
                className="w-fit group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link onClick={() => setIsOpen(false)} href={link.href}>
                  <div>{link.text}</div>
                  <div className="w-0 h-[1px] group-hover:w-full bg-white duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
`;
