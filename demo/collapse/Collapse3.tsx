"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const Items = [
  {
    Q: "What is damage law?",
    A: "Damage law is a type of civil law that deals with the legal responsibility of a person for the damage they cause to another person or property.",
  },
  {
    Q: "What is a lawsuit?",
    A: "A lawsuit is a legal proceeding that involves a claim for damages against another party.",
  },
  {
    Q: "Can I negotiate with insurance companies on my own for property damage claims?",
    A: "While you can negotiate with insurance companies on your own, it is often beneficial to seek assistance from a property damage attorney...",
  },
];

const CollapseItem = ({ Q, A }: { Q: string; A: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex group text-start group transition-colors duration-300"
    >
      <div
        className={`flex-1 p-4 bg-[#1d1d1d] cursor-pointer text-white group-hover:bg-white group-hover:text-black rounded rounded-br-none duration-300 ${
          isOpen && "!bg-white !text-black"
        }`}
      >
        <h2 className="font-semibold">{Q}</h2>
        <div
          ref={ref}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <p className="text-sm font-extralight mt-2">{A}</p>
        </div>
      </div>
      <div className="w-6 flex flex-col items-center relative">
        <div className="w-full h-6 flex justify-center items-center bg-[#1d1d1d] group-hover:bg-white absolute top-0 duration-300" />
        <div className="w-full h-6 bg-black flex justify-center items-center rounded-bl z-10">
          <GoArrowUp
            className={`group-hover:rotate-180 duration-500  ${
              isOpen && "rotate-180"
            }`}
          />
        </div>
        <div
          className={`bg-[#1d1d1d] group-hover:bg-white w-full flex-1 rounded-r duration-300 ${
            isOpen && "!bg-white"
          }`}
        />
      </div>
    </div>
  );
};

export default function Collapse3() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2 mx-auto">
      {Items.map((item, index) => (
        <CollapseItem key={index} Q={item.Q} A={item.A} />
      ))}
    </div>
  );
}

export const Collapse3Code = `"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const Items = [
  {
    Q: "What is damage law?",
    A: "Damage law is a type of civil law that deals with the legal responsibility of a person for the damage they cause to another person or property.",
  },
  {
    Q: "What is a lawsuit?",
    A: "A lawsuit is a legal proceeding that involves a claim for damages against another party.",
  },
  {
    Q: "Can I negotiate with insurance companies on my own for property damage claims?",
    A: "While you can negotiate with insurance companies on your own, it is often beneficial to seek assistance from a property damage attorney...",
  },
];

const CollapseItem = ({ Q, A }: { Q: string; A: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? \`\${ref.current.scrollHeight}px\` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex group text-start group transition-colors duration-300"
    >
      <div
        className={\`flex-1 p-4 bg-[#1d1d1d] cursor-pointer text-white group-hover:bg-white group-hover:text-black rounded rounded-br-none duration-300 \${
          isOpen && "!bg-white !text-black"
        }\`}
      >
        <h2 className="font-semibold">{Q}</h2>
        <div
          ref={ref}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <p className="text-sm font-extralight mt-2">{A}</p>
        </div>
      </div>
      <div className="w-6 flex flex-col items-center relative">
        <div className="w-full h-6 flex justify-center items-center bg-[#1d1d1d] group-hover:bg-white absolute top-0 duration-300" />
        <div className="w-full h-6 bg-black flex justify-center items-center rounded-bl z-10">
          <GoArrowUp
            className={\`group-hover:rotate-180 duration-500  \${
              isOpen && "rotate-180"
            }\`}
          />
        </div>
        <div
          className={\`bg-[#1d1d1d] group-hover:bg-white w-full flex-1 rounded-r duration-300 \${
            isOpen && "!bg-white"
          }\`}
        />
      </div>
    </div>
  );
};

export default function Collapse3() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2 mx-auto">
      {Items.map((item, index) => (
        <CollapseItem key={index} Q={item.Q} A={item.A} />
      ))}
    </div>
  );
}
`;
