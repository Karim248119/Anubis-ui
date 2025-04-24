"use client";
import Image from "next/image";
import React from "react";
import { HiPlus } from "react-icons/hi2";

const Items = [
  {
    name: "CNC Machine",
    img: "https://images.pexels.com/photos/3688760/pexels-photo-3688760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A CNC machine, also known as a Computer Numerical Control machine, is a type of automated machine tool that uses computer programs to control its movements. CNC machines are typically used for milling, drilling, and other types of precision cutting and machining.",
  },
  {
    name: "3D Printer",
    img: "https://images.pexels.com/photos/19124461/pexels-photo-19124461/free-photo-of-laptop-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A 3D printer is a type of machine that uses additive manufacturing techniques to create three-dimensional objects. 3D printers work by depositing successive layers of material, such as plastic or metal, to build up the desired shape.",
  },
  {
    name: "Laser Cutter",
    img: "https://images.pexels.com/photos/29988967/pexels-photo-29988967/free-photo-of-modern-laser-cutter-in-industrial-environment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A laser cutter is a type of machine that uses laser technology to cut materials such as wood, metal, plastic, and other materials.",
  },
  {
    name: "Robotic Arm ",
    img: "https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A robotic arm is a type of machine that is designed to mimic the movements of a human arm. Robotic arms are commonly used in manufacturing to perform tasks that require precise movements and high speed, such as welding, painting, and assembly.",
  },
];
export default function Collapse4() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="w-full h-full grid grid-cols-2 bg-yellow-950 font-sans">
      <div className="w-full h-full grid grid-rows-6">
        <h1 className="text-3xl font-semibold capitalize text-whit row-span-2 flex items-center px-5">
          The Main manufacturing <br /> machines
        </h1>
        {Items.map((item, i) => (
          <button
            onClick={() => setIndex(i)}
            key={i}
            className={`border-t flex justify-between items-center px-5 relative group overflow-hidden duration-300 ${
              index == i ? "text-white" : "text-white/40"
            }`}
          >
            <p>{item.name}</p>
            <HiPlus
              size={30}
              className={`duration-300  ${
                index == i ? "rotate-45" : "rotate-0"
              }`}
            />
            <div className="w-full h-full bg-white/10 absolute top-full left-0 group-hover:top-0 duration-500" />
            <div
              className={` w-[1px] h-full bg-orange-600 absolute right-0 duration-300 ${
                index == i ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="w-full h-full relative overflow-hidden">
        {Items.map((item, i) => (
          <>
            <Image
              key={i}
              src={item.img}
              alt={item.name}
              width={500}
              height={500}
              className={`w-full h-full object-cover absolute top-0 left-0 brightness-75 duration-700 ${
                index == i
                  ? "opacity-100 scale-100 delay-500"
                  : "opacity-0 scale-150"
              }`}
            />
            <p
              className={`absolute w-[80%] left-5 text-sm text-white/90 duration-500 ${
                index == i
                  ? "opacity-100 bottom-20 delay-500"
                  : "opacity-0 -bottom-10"
              }`}
            >
              {item.description}
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export const Collapse4Code = `
"use client";
import Image from "next/image";
import React from "react";
import { HiPlus } from "react-icons/hi2";

const Items = [
  {
    name: "CNC Machine",
    img: "https://images.pexels.com/photos/3688760/pexels-photo-3688760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A CNC machine, also known as a Computer Numerical Control machine, is a type of automated machine tool that uses computer programs to control its movements. CNC machines are typically used for milling, drilling, and other types of precision cutting and machining.",
  },
  {
    name: "3D Printer",
    img: "https://images.pexels.com/photos/19124461/pexels-photo-19124461/free-photo-of-laptop-on-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A 3D printer is a type of machine that uses additive manufacturing techniques to create three-dimensional objects. 3D printers work by depositing successive layers of material, such as plastic or metal, to build up the desired shape.",
  },
  {
    name: "Laser Cutter",
    img: "https://images.pexels.com/photos/29988967/pexels-photo-29988967/free-photo-of-modern-laser-cutter-in-industrial-environment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A laser cutter is a type of machine that uses laser technology to cut materials such as wood, metal, plastic, and other materials.",
  },
  {
    name: "Robotic Arm ",
    img: "https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "A robotic arm is a type of machine that is designed to mimic the movements of a human arm. Robotic arms are commonly used in manufacturing to perform tasks that require precise movements and high speed, such as welding, painting, and assembly.",
  },
];
export default function Collapse4() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="w-full h-full grid grid-cols-2 bg-yellow-950 font-sans">
      <div className="w-full h-full grid grid-rows-6">
        <h1 className="text-3xl font-semibold text-whit row-span-2 flex items-center px-5">
          The Main manufacturing <br /> machines
        </h1>
        {Items.map((item, i) => (
          <button
            onClick={() => setIndex(i)}
            key={i}
            className={\`border-t flex justify-between items-center px-5 relative group overflow-hidden duration-300 \${
              index == i ? "text-white" : "text-white/40"
            }\`}
          >
            <p>{item.name}</p>
            <HiPlus
              size={30}
              className={\`duration-300  \${
                index == i ? "rotate-45" : "rotate-0"
              }\`}
            />
            <div className="w-full h-full bg-white/10 absolute top-full left-0 group-hover:top-0 duration-500" />
            <div
              className={\` w-[1px] h-full bg-orange-600 absolute right-0 duration-300 \${
                index == i ? "opacity-100" : "opacity-0"
              }\`}
            />
          </button>
        ))}
      </div>
      <div className="w-full h-full relative overflow-hidden">
        {Items.map((item, i) => (
          <>
            <Image
              key={i}
              src={item.img}
              alt={item.name}
              width={500}
              height={500}
              className={\`w-full h-full object-cover absolute top-0 left-0 brightness-75 duration-700 \${
                index == i
                  ? "opacity-100 scale-100 delay-500"
                  : "opacity-0 scale-150"
              }\`}
            />
            <p
              className={\`absolute w-[80%] left-5 text-sm text-white/90 duration-500 \${
                index == i
                  ? "opacity-100 bottom-20 delay-500"
                  : "opacity-0 -bottom-10"
              }\`}
            >
              {item.description}
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

`;
