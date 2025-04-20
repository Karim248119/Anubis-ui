"use client";
import React, { useEffect, useRef, useState } from "react";

const Items = [
  {
    title: "Web Development With HTML5",
    img: "/collapse/shape1.svg",
  },
  {
    title: "Master CSS & CSS3",
    img: "/collapse/shape2.svg",
  },
  {
    title: "JavaScript for Expert Level",
    img: "/collapse/shape3.svg",
  },
  {
    title: "React web development",
    img: "/collapse/shape4.svg",
  },
];

const Collapse1 = () => {
  return (
    <div className="bg-black text-white h-full">
      {Items.map((item, index) => (
        <CollapseItem num={index + 1} title={item.title} key={item.title}>
          <div className="w-full flex justify-between items-center p-2">
            <p className="w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id earum
              optio aspernatur. Unde, enim illum nemo quibusdam tempore aut
              deserunt pariatur sed, qui explicabo vel eligendi saepe voluptates
              dolores recusandae.
            </p>
            <img
              src={item.img}
              alt={item.title}
              className="h-28 w-28 animate-spin"
              style={{
                animationDuration: "3s",
              }}
            />
          </div>
        </CollapseItem>
      ))}
    </div>
  );
};

export default Collapse1;

const CollapseItem = ({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className=" border-y border-white/20 group ">
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
        className="w-full flex justify-between gap-2 items-center md:py-10 px-2 md:h-auto h-20"
      >
        <div className="flex items-center gap-3">
          <span className="md:text-xl italic font-serif font-extralight">
            {num < 10 && "0"}
            {num}.
          </span>
          <h2
            className={`capitalize md:text-5xl font-extrabold font-montserrat ${
              !isOpen && "text-outline text-transparent"
            }`}
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
            }}
          >
            {title}
          </h2>
        </div>
        <div className=" relative md:w-8 w-5 aspect-square flex justify-center items-center">
          <div
            className={`w-8 h-[0.5px] bg-white duration-500 absolute ${
              !isOpen && "rotate-90"
            }`}
          />
          <div className="w-full h-[0.5px] bg-white center" />
        </div>
      </button>
      <div style={{ height }} className={`overflow-hidden duration-500 `}>
        <div ref={ref}> {children}</div>
      </div>
      <div className="w-0 h-[1px] bg-white group-hover:w-full duration-700" />
    </div>
  );
};

export const Collapse1Code = `
"use client";
import React, { useEffect, useRef, useState } from "react";

const Items = [
  {
    title: "Web Development With HTML5",
    img: "/collapse/shape1.svg",
  },
  {
    title: "Master CSS & CSS3",
    img: "/collapse/shape2.svg",
  },
  {
    title: "JavaScript for Expert Level",
    img: "/collapse/shape3.svg",
  },
  {
    title: "React web development",
    img: "/collapse/shape4.svg",
  },
];

const Collapse1 = () => {
  return (
    <div className="bg-black text-white h-full">
      {Items.map((item, index) => (
        <CollapseItem num={index + 1} title={item.title} key={item.title}>
          <div className="w-full flex justify-between items-center p-2">
            <p className="w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id earum
              optio aspernatur. Unde, enim illum nemo quibusdam tempore aut
              deserunt pariatur sed, qui explicabo vel eligendi saepe voluptates
              dolores recusandae.
            </p>
            <img
              src={item.img}
              alt={item.title}
              className="h-28 w-28 animate-spin"
              style={{
                animationDuration: "3s",
              }}
            />
          </div>
        </CollapseItem>
      ))}
    </div>
  );
};

export default Collapse1;

const CollapseItem = ({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(\`\${ref.current.scrollHeight}px\`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className=" border-y border-white/20 group ">
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
        className="w-full flex justify-between gap-2 items-center md:py-10 px-2 md:h-auto h-20"
      >
        <div className="flex items-center gap-3">
          <span className="md:text-xl italic font-serif font-extralight">
            {num < 10 && "0"}
            {num}.
          </span>
          <h2
            className={\`capitalize md:text-5xl font-extrabold font-montserrat \${
              !isOpen && "text-outline text-transparent"
            }\`}
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
            }}
          >
            {title}
          </h2>
        </div>
        <div className=" relative md:w-8 w-5 aspect-square flex justify-center items-center">
          <div
            className={\`w-8 h-[0.5px] bg-white duration-500 absolute \${
              !isOpen && "rotate-90"
            }\`}
          />
          <div className="w-full h-[0.5px] bg-white center" />
        </div>
      </button>
      <div style={{ height }} className='overflow-hidden duration-500 '>
        <div ref={ref}> {children}</div>
      </div>
      <div className="w-0 h-[1px] bg-white group-hover:w-full duration-700" />
    </div>
  );
};

`;
