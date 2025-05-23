"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

// Items
const Items = [
  {
    country: "Japan",
    city: "Tokyo",
    img: "https://images.pexels.com/photos/2187424/pexels-photo-2187424.jpeg",
  },
  {
    country: "Italy",
    city: "Rome",
    img: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg",
  },
  {
    country: "Egypt",
    city: "Giza",
    img: "https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg",
  },
];

gsap.registerPlugin(ScrollTrigger);

function Slide({
  item,
}: {
  item: { country: string; city: string; img: string };
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: imageRef.current,
      pinSpacing: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={sectionRef} className="h-screen w-full relative text-white">
      <Image
        width={1600}
        height={900}
        ref={imageRef}
        src={item.img}
        alt={item.city}
        className="h-screen w-full object-cover brightness-50"
      />
      <div className="flex flex-col items-end center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-9xl font-bold font-sans uppercase">
          {item.country}
        </h2>
        <h3 className="text-4xl -ml-10 font-serif font-extralight italic">
          {item.city}
        </h3>
      </div>
    </div>
  );
}

export default function VerticalScrollSlider() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {Items.map((item, index) => (
        <Slide key={index} item={item} />
      ))}
    </div>
  );
}
