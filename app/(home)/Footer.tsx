import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const links = [
  {
    title: "Send an Email",
    icon: <BiLogoGmail />,
    href: "mailto:karimoda66@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/karim248/",
  },
  {
    title: "Whatsapp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/201020096263",
  },
  {
    title: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/kareem.kemo.75098364?mibextid=ZbWKwL",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/sora_00013?igsh=MXJpNHJ1ZWVvN2dhdw==",
  },
];
export default function Footer() {
  return (
    <footer className="h-[30vh] w-full mt-24 flex justify-center items-center relative">
      <div className="h-[0.5px] w-[100%] bg-gradient-to-r from-background via-foreground/20 to-background absolute top-0" />
      <div className="flex gap-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            className="relative group overflow-hidden flex justify-center items-center gap-2 text-lg border rounded-full w-10 h-10 hover:bg-hover duration-300"
          >
            <span className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 group-hover:bottom-full group-hover:-translate-y-0 duration-300">
              {link.icon}
            </span>
            <span className="absolute left-1/2  group-hover:top-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 top-full -translate-y-0 duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
    </footer>
  );
}
