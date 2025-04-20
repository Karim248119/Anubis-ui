"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useRef } from "react";

const links = [
  {
    title: "Send an Email",
    icon: <BiLogoGmail className="h-full w-full" />,
    href: "mailto:[user]@gmail.com",
    className: "text-white hover:text-[#DB4539]",
    hoverStyle: {
      background: "#fff",
      boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 3px #fff, 0 0 40px #fff",
    },
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn className="h-full w-full" />,
    href: "https://www.linkedin.com/in/[user]/",
    className: "text-white",
    hoverStyle: {
      background: "#0c64c5",
      boxShadow:
        "0 0 10px #0c64c5, 0 0 20px #0c64c5, 0 0 3px #0c64c5, 0 0 40px #0c64c5",
    },
  },
  {
    title: "Whatsapp",
    icon: <FaWhatsapp className="h-full w-full" />,
    href: "https://wa.me/[user number]",
    className: "text-white",
    hoverStyle: {
      background: "#42e95f",
      boxShadow:
        "0 0 10px #42e95f, 0 0 20px #42e95f, 0 0 3px #42e95f, 0 0 40px #42e95f",
    },
  },
  {
    title: "Facebook",
    icon: <FaFacebookF className="h-full w-full" />,
    href: "https://www.facebook.com/[user facebook]",
    className: "text-white",
    hoverStyle: {
      background: "#0866ff",
      boxShadow:
        "0 0 10px #0866ff, 0 0 20px #0866ff, 0 0 3px #0866ff, 0 0 40px #0866ff",
    },
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="h-full w-full" />,
    href: "https://www.instagram.com/[user insta]",
    className: "text-white",
    hoverStyle: {
      background:
        "radial-gradient(circle at top left, #4f5bd5, #962fbf, #d62976, #fa7e1e, #feda75)",
      boxShadow:
        "0 0 10px #962fbf, 0 0 10px #fa7e1e, 0 0 30px #d62976, 0 0 20px #962fbf, 0 0 50px #4f5bd5",
    },
  },
];

export const ContactButtons = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const applyHoverStyle = (idx: number, style: any) => {
    const el = buttonRefs.current[idx];
    if (el) {
      Object.assign(el.style, style);
    }
  };

  const resetStyle = (idx: number) => {
    const el = buttonRefs.current[idx];
    if (el) {
      el.style.background = "";
      el.style.boxShadow = "";
    }
  };

  return (
    <div className="h-24 px-10 flex items-center gap-5 bg-white/[0.05] rounded-full">
      {links.map((item, idx) => (
        <button
          key={idx}
          ref={(el) => {
            buttonRefs.current[idx] = el;
          }}
          onPointerEnter={() => applyHoverStyle(idx, item.hoverStyle)}
          onPointerLeave={() => resetStyle(idx)}
          className={`w-14 h-14 p-4 bg-black  rounded-full hover:scale-125 hover:mb-8 duration-300 ${item.className}`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export const ContactButtonsCode = `"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useRef } from "react";

const links = [
  {
    title: "Send an Email",
    icon: <BiLogoGmail className="h-full w-full" />,
    href: "mailto:[user]@gmail.com",
    className: "text-white hover:text-[#DB4539]",
    hoverStyle: {
      background: "radial-gradient(circle, #fff, #fff)",
      boxShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 3px #fff, 0 0 40px #fff",
    },
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn className="h-full w-full" />,
    href: "https://www.linkedin.com/in/[user]/",
    className: "text-white",
    hoverStyle: {
      background: "radial-gradient(circle, #0c64c5, #0c64c5)",
      boxShadow:
        "0 0 10px #0c64c5, 0 0 20px #0c64c5, 0 0 3px #0c64c5, 0 0 40px #0c64c5",
    },
  },
  {
    title: "Whatsapp",
    icon: <FaWhatsapp className="h-full w-full" />,
    href: "https://wa.me/[user number]",
    className: "text-white",
    hoverStyle: {
      background: "radial-gradient(circle, #42e95f, #42e95f)",
      boxShadow:
        "0 0 10px #42e95f, 0 0 20px #42e95f, 0 0 3px #42e95f, 0 0 40px #42e95f",
    },
  },
  {
    title: "Facebook",
    icon: <FaFacebookF className="h-full w-full" />,
    href: "https://www.facebook.com/[user facebook]",
    className: "text-white",
    hoverStyle: {
      background: "radial-gradient(circle, #0866ff, #0866ff)",
      boxShadow:
        "0 0 10px #0866ff, 0 0 20px #0866ff, 0 0 3px #0866ff, 0 0 40px #0866ff",
    },
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="h-full w-full" />,
    href: "https://www.instagram.com/[user insta]",
    className: "text-white",
    hoverStyle: {
      background:
        "radial-gradient(circle at top left, #4f5bd5, #962fbf, #d62976, #fa7e1e, #feda75)",
      boxShadow:
        "0 0 10px #962fbf, 0 0 10px #fa7e1e, 0 0 30px #d62976, 0 0 20px #962fbf, 0 0 50px #4f5bd5",
    },
  },
];

export const ContactButtons = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const applyHoverStyle = (idx: number, style: any) => {
    const el = buttonRefs.current[idx];
    if (el) {
      Object.assign(el.style, style);
    }
  };

  const resetStyle = (idx: number) => {
    const el = buttonRefs.current[idx];
    if (el) {
      el.style.background = "";
      el.style.boxShadow = "";
    }
  };

  return (
    <div className="flex gap-5 bg-white/[0.05] p-5 rounded-full">
      {links.map((item, idx) => (
        <button
          key={idx}
          ref={(el) => {
            buttonRefs.current[idx] = el;
          }}
          onPointerEnter={() => applyHoverStyle(idx, item.hoverStyle)}
          onPointerLeave={() => resetStyle(idx)}
          className={\`w-14 p-4 bg-slate-900 aspect-square rounded-full hover:scale-125 duration-300 \${item.className}\`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};`;
