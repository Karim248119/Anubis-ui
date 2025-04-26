"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import DarkMode from "@/components/DarkMode";
import Logo from "./Logo";
import { GiAnubis } from "react-icons/gi";
// import ThemeSwitch from "@/components/Switch";

export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const Links = [
    { name: "Home", path: "/" },
    { name: "Components", path: "/components/buttons" },
    { name: "How It Works", path: "/#how" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="w-screen h-20 z-50 fixed top-0 left-0 bg-background  ">
      <div className="h-20 w-full flex justify-between absolute items-center flex-row top-0 left-0 px-8 xl:px-20 z-30">
        <Logo />
        <div className="sm:flex justify-center items-center gap-5 hidden navs font-bold">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`${
                activeLink === link.name ? "border-b-2 " : ""
              } font-medium capitalize transition-all text-hover p-1 xl:text-sm text-xs`}
            >
              {link.name}
            </Link>
          ))}
          <DarkMode />
        </div>

        <div className="sm:hidden flex flex-col">
          <button onClick={() => setIsOpened(!IsOpened)}>
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>

      <div
        className="w-full h-full flex fixed top-0 z-50 transition-all ease duration-700"
        style={{ left: IsOpened ? 0 : "-100vw" }}
      >
        <div className="h-[100vh] w-[60vw] flex flex-col items-center justify-center py-3 overflow-hidden navs sm:hidden bg-gold text-xs text-center gap-2 font-semibold  ">
          <div className="-mt-10 mb-5">
            <GiAnubis size={80} color="black" />
          </div>

          {Links.map((link) => (
            <Link
              onClick={() => {
                setActiveLink(link.name);
                setIsOpened(false);
              }}
              key={link.name}
              href={link.path}
              className={`${
                activeLink === link.name ? "font-extrabold" : ""
              } font-medium capitalize text-background text-lg p-2`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="h-[100vh] w-[40vw] "
          onClick={() => setIsOpened(false)}
        ></button>
      </div>
    </nav>
  );
}
