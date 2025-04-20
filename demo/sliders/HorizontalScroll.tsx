"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SKILLS = [
  {
    id: 1,
    title: "programing languages",
    items: ["HTML", "CSS", "javascript", "typescript", "python"],
  },
  {
    id: 2,
    title: "frontend",
    items: ["React", "Next.js", "react native", "shadcn ui", "framer motion"],
  },
  {
    id: 3,
    title: "backend",
    items: ["node.js", "express.js", "prisma", "trpc"],
  },
  {
    id: 4,
    title: "database management",
    items: ["mysql", "postgresql", "mongo DB"],
  },
  {
    id: 5,
    title: "tools",
    items: ["git", "github", "vscode", "postman"],
  },
  {
    id: 6,
    title: "design and prototypes",
    items: ["figma", "spline"],
  },
];

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSlider = () => {
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalScrollWidth = slider.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Set horizontal scroll amount in pixels
    const scrollDistance = totalScrollWidth - viewportWidth;

    gsap.to(slider, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="flex horizontal relative z-20 h-[90vh] items-end overflow-hidden parent-dev bg-red-400"
    >
      {SKILLS.map((skill, index) => {
        return (
          <section
            key={index}
            className="relative panel group  w-[30vw] h-[70vh] flex-shrink-0 flex flex-col justify-evenly gap-5 p-10  border border-l-0 border-foreground z-10"
          >
            <div className="text-4xl">0{index + 1} .</div>
            <div className=" z-0 h-full">
              <h2 className="md:text-4xl text-2xl capitalize md:mb-8 mb-5">
                {skill.title}
              </h2>
              <div>
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center md:gap-4 md:p-4 p-3 gap-3 md:text-base text-sm border-foreground capitalize ${
                      i !== skill.items.length - 1 && "border-b"
                    }`}
                  >
                    <div className="h-2 w-2 bg-foreground/50 rounded-full" />
                    <span>0{i + 1} .</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HorizontalScrollSlider;
