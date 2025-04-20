"use client";
import { useState } from "react";

const Items = [
  {
    title: "Entertain",
    des: `We define the modern IFE experience for
          passengers by diversifying content, utilizing
          new technologies, and building cultural
          connections. Engage and entertain
          passengers onboard - connecting them with
          your brand throughout the travel experience.`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-Entertain.jpg",
  },
  {
    title: "Advertise",
    des: `We are the top IFE media sales agency in the
          world - connecting your audience throughout
          their journey. Monetize your IFE through
          advertising, brand partnerships and
          merchandising. Our expertise in combining IFE
          and Media unlocks the opportunity to build and
          grow ancillary revenue.`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-MediaSales.jpg",
  },
  {
    title: "Create",
    des: `Our in-house creative studio produces video,
          print, digital and social content to support your
          IFEC marketing objectives and beyond to align
          with your brand objectives and set you apart
          from your competition.`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-Create-Flipped.jpeg",
  },
];

export default function Collapse2() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="w-[80%] h-full flex gap-2 overflow-hidden">
      {Items.map((item, index) => (
        <CollapseItem
          key={index}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}

const CollapseItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: {
    title: string;
    des: string;
    img: string;
  };
  index: number;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
}) => {
  const isActive = hoveredIndex === index;
  return (
    <div
      key={index}
      className={`relative h-full rounded-lg transition-[width] duration-700 ${
        isActive ? "w-2/3" : "w-1/6"
      }`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg z-0 brightness-75"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center p-5 text-violet-200 z-10 ${
          !isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        }`}
      >
        <h2 className="text-3xl font-bold  mb-2 text-violet-200 rotate-90 ">
          {item.title}
        </h2>
      </div>
      <div
        className={`w-2/3 h-full flex flex-col gap-5 justify-center p-5 text-violet-200/70 relative z-10 ${
          isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        } transition-opacity`}
      >
        <h2 className="text-5xl font-bold  mb-2 text-violet-200">
          {item.title}
        </h2>
        <p className="font-sans font-extralight text-xs">{item.des}</p>
        <button className="w-1/2 px-5 py-2 border rounded-lg mt-10 hover:text-violet-500 duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export const Collapse2Code = `"use client";
import { useState } from "react";

const Items = [
  {
    title: "Entertain",
    des: \`We define the modern IFE experience for
          passengers by diversifying content, utilizing
          new technologies, and building cultural
          connections. Engage and entertain
          passengers onboard - connecting them with
          your brand throughout the travel experience.\`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-Entertain.jpg",
  },
  {
    title: "Advertise",
    des: \`We are the top IFE media sales agency in the
          world - connecting your audience throughout
          their journey. Monetize your IFE through
          advertising, brand partnerships and
          merchandising. Our expertise in combining IFE
          and Media unlocks the opportunity to build and
          grow ancillary revenue.\`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-MediaSales.jpg",
  },
  {
    title: "Create",
    des: \`Our in-house creative studio produces video,
          print, digital and social content to support your
          IFEC marketing objectives and beyond to align
          with your brand objectives and set you apart
          from your competition.\`,
    img: "https://www.spafax.com/wp-content/uploads/2025/02/Home-Create-Flipped.jpeg",
  },
];

export default function Collapse2() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div className="w-[80%] h-full flex gap-2 overflow-hidden">
      {Items.map((item, index) => (
        <CollapseItem
          key={index}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}

const CollapseItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  item: {
    title: string;
    des: string;
    img: string;
  };
  index: number;
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
}) => {
  const isActive = hoveredIndex === index;
  return (
    <div
      key={index}
      className={\`relative h-full rounded-lg transition-[width] duration-700 \${
        isActive ? "w-2/3" : "w-1/6"
      }\`}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full absolute top-0 left-0 object-cover rounded-lg z-0 brightness-75"
      />
      <div
        className={\`absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center p-5 text-violet-200 z-10 \${
          !isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        }\`}
      >
        <h2 className="text-3xl font-bold  mb-2 text-violet-200 rotate-90 ">
          {item.title}
        </h2>
      </div>
      <div
        className={\`w-2/3 h-full flex flex-col gap-5 justify-center p-5 text-violet-200/70 relative z-10 \${
          isActive
            ? "opacity-100 delay-500 duration-500"
            : "opacity-0 delay-0 duration-200"
        } transition-\`}
      >
        <h2 className="text-5xl font-bold  mb-2 text-violet-200">
          {item.title}
        </h2>
        <p className="font-sans font-extralight text-xs">{item.des}</p>
        <button className="w-1/2 px-5 py-2 border rounded-lg mt-10 hover:text-violet-500 duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};
`;
