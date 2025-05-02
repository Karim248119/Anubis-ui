"use client";
import React, { useState } from "react";
import { GiAnubis } from "react-icons/gi";

const links = [
  { text: "Home", href: "#" },
  { text: "About", href: "#about" },
  { text: "Products", href: "#Products" },
  { text: "History", href: "#History" },
  { text: "Contact", href: "#contact" },
];

export default function Nav3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 p-10 flex justify-between items-center absolute top-0 left-0 uppercase font-montserrat text-white">
      <GiAnubis size={30} />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 uppercase font-extralight text-xs group relative z-20"
      >
        Menu
        <div
          className={`w-8 h-8 border rounded-full flex justify-center items-center duration-700 ${
            isOpen ? "rotate-[270deg] border-white/0" : "border-white/30"
          }`}
        >
          {["top", "", "bottom"].map((pos, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-black rounded-full flex justify-center items-center absolute ${
                pos === "top"
                  ? isOpen
                    ? "top-0"
                    : "top-1/2 -translate-y-1/2 group-hover:top-0"
                  : pos === "bottom"
                  ? isOpen
                    ? "bottom-0"
                    : "bottom-1/2 translate-y-1/2 group-hover:bottom-0"
                  : "relative z-30"
              } duration-500`}
            >
              {pos ? (
                <span className="w-1 h-1 rounded-full bg-white" />
              ) : (
                <>
                  <span
                    className={`bg-white rounded-full absolute right-1/2 translate-x-1/2 duration-500 ${
                      !isOpen ? "w-1 h-1 rotate-45" : "w-[2px] h-4 rotate-45"
                    }`}
                  />
                  <span
                    className={`bg-white rounded-full absolute right-1/2 translate-x-1/2 duration-500 ${
                      !isOpen ? "w-1 h-1 -rotate-45" : "w-[2px] h-4 -rotate-45"
                    }`}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </button>

      <ul
        className={`text-white bg-black text-xl absolute top-5 right-8 w-[20vw] rounded-xl px-5 flex flex-col justify-center duration-700 overflow-hidden ${
          isOpen ? "h-[40vh] border" : "h-0"
        }`}
      >
        {links.map(({ text, href }, i) => (
          <a href={href} key={i}>
            <li
              className={`w-full font-semibold border-white/30 py-2 relative group overflow-hidden ${
                i !== 0 && "border-t"
              }`}
            >
              <span className="text-transparent">{text}</span>
              <span className="absolute left-0 top-full group-hover:top-1/2 group-hover:-translate-y-1/2 duration-300 text-orange-500">
                {text}
              </span>
              <span className="absolute left-0 bottom-1/2 translate-y-1/2 group-hover:-translate-y-full duration-500">
                {text}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export const Nav3Code = `
"use client";
import React, { useState } from "react";
import { GiAnubis } from "react-icons/gi";

const links = [
  { text: "Home", href: "#" },
  { text: "About", href: "#about" },
  { text: "Products", href: "#Products" },
  { text: "History", href: "#History" },
  { text: "Contact", href: "#contact" },
];

export default function Nav3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 p-10 flex justify-between items-center absolute top-0 left-0 uppercase font-montserrat text-white">
      <GiAnubis size={30} />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 uppercase font-extralight text-xs group relative z-20"
      >
        Menu
        <div
          className={\`w-8 h-8 border rounded-full flex justify-center items-center duration-700 \${
            isOpen ? "rotate-[270deg] border-white/0" : "border-white/30"
          }\`}
        >
          {["top", "", "bottom"].map((pos, i) => (
            <div
              key={i}
              className={\`w-3 h-3 bg-black rounded-full flex justify-center items-center absolute \${
                pos === "top"
                  ? isOpen
                    ? "top-0"
                    : "top-1/2 -translate-y-1/2 group-hover:top-0"
                  : pos === "bottom"
                  ? isOpen
                    ? "bottom-0"
                    : "bottom-1/2 translate-y-1/2 group-hover:bottom-0"
                  : "relative z-30"
              } duration-500\`}
            >
              {pos ? (
                <span className="w-1 h-1 rounded-full bg-white" />
              ) : (
                <>
                  <span
                    className={\`bg-white rounded-full absolute right-1/2 translate-x-1/2 duration-500 \${
                      !isOpen ? "w-1 h-1 rotate-45" : "w-[2px] h-4 rotate-45"
                    }\`}
                  />
                  <span
                    className={\`bg-white rounded-full absolute right-1/2 translate-x-1/2 duration-500 \${
                      !isOpen ? "w-1 h-1 -rotate-45" : "w-[2px] h-4 -rotate-45"
                    }\`}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </button>

      <ul
        className={\`text-white bg-black text-xl absolute top-5 right-8 w-[20vw] rounded-xl px-5 flex flex-col justify-center duration-700 overflow-hidden \${
          isOpen ? "h-[40vh] border" : "h-0"
        }\`}
      >
        {links.map(({ text, href }, i) => (
          <a href={href} key={i}>
            <li
              className={\`w-full font-semibold border-white/30 py-2 relative group overflow-hidden \${
                i !== 0 && "border-t"
              }\`}
            >
              <span className="text-transparent">{text}</span>
              <span className="absolute left-0 top-full group-hover:top-1/2 group-hover:-translate-y-1/2 duration-300 text-orange-500">
                {text}
              </span>
              <span className="absolute left-0 bottom-1/2 translate-y-1/2 group-hover:-translate-y-full duration-500">
                {text}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

`;
