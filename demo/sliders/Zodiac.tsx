"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";
import { Fonts } from "@/lib/fonts";

const Zodiacs = [
  {
    name: "Aries",
    nickname: "PIONEERING SPIRIT",
    date: "March 21 - April 19",
    description:
      "Aries are energetic, determined, and confident people who are always willing to take on new challenges. They are passionate about their work and are always eager to learn new skills and techniques.",
    img: "https://image.cdn2.seaart.me/2025-02-02/cuflnbde878c73flrgd0-2/40ae8a926efbee1ac2fc8a3137d15985_high.webp",
    icon: <TbZodiacAries />,
  },
  {
    name: "Taurus",
    nickname: "THE PERSISTENT WORKER",
    date: "April 20 - May 20",
    description:
      "Taurus are reliable, patient, and practical people who are always focused on the details. They are grounded and consistent, valuing comfort and security in their lives.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vkdte878c7394rcrg-1/4c78267905ae5d14c035b04240fc7c00_high.webp",
    icon: <TbZodiacTaurus />,
  },
  {
    name: "Gemini",
    nickname: "THE TWINKLING STAR",
    date: "May 21 - June 20",
    description:
      "Gemini are creative, imaginative, and curious people who are always eager to try new things. They are communicative and adaptable, thriving on social interaction and intellectual stimulation.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vnvde878c73ftgulg-1/62858f4fc1c487557d994927a566ef8e_high.webp",
    icon: <TbZodiacGemini />,
  },
  {
    name: "Cancer",
    nickname: "THE NURTURING SOUL",
    date: "June 21 - July 22",
    description:
      "Cancer individuals are empathetic, protective, and deeply emotional. They value family and home, often putting others’ needs before their own.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vosle878c73epvfgg-2/a4c02467e826d02c83a634ef3310761d_high.webp",
    icon: <TbZodiacCancer />,
  },
  {
    name: "Leo",
    nickname: "THE REGAL LEADER",
    date: "July 23 - August 22",
    description:
      "Leos are confident, charismatic, and natural leaders. They enjoy the spotlight and are generous with their energy, love, and attention.",
    img: "https://image.cdn2.seaart.me/2025-01-07/ctu4ibte878c73c15j1g-4/3af5431ce018fcf7b66b4efef21d7ad5_high.webp",
    icon: <TbZodiacLeo />,
  },
  {
    name: "Virgo",
    nickname: "THE PERFECTIONIST",
    date: "August 23 - September 22",
    description:
      "Virgos are analytical, meticulous, and highly practical. They strive for perfection and are known for their deep sense of responsibility.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a038te878c73fvjk4g-1/626573be0dba7ff3b0df523f22ee195c_high.webp",
    icon: <TbZodiacVirgo />,
  },
  {
    name: "Libra",
    nickname: "THE HARMONY SEEKER",
    date: "September 23 - October 22",
    description:
      "Libras are diplomatic, charming, and fair-minded. They seek balance in all aspects of life and excel in social situations.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a054de878c73fvup80-2/35b519fa0be8f364ac9450fc67b7b1b1_high.webp",
    icon: <TbZodiacLibra />,
  },
  {
    name: "Scorpio",
    nickname: "THE INTENSE MYSTIC",
    date: "October 23 - November 21",
    description:
      "Scorpios are passionate, resourceful, and deeply emotional. They value truth and loyalty and have an intense desire to uncover hidden meanings.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a05j5e878c73ese7u0-2/cc59f6c3573658e2cdc7a21bad2bf025_high.webp",
    icon: <TbZodiacScorpio />,
  },
  {
    name: "Sagittarius",
    nickname: "THE WANDERING PHILOSOPHER",
    date: "November 22 - December 21",
    description:
      "Sagittarians are adventurous, optimistic, and always seeking knowledge. They love exploring new ideas, places, and perspectives.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a067le878c73esibh0-2/b27b5d3ea018602c9ef917559b29c7bd_high.webp",
    icon: <TbZodiacSagittarius />,
  },
  {
    name: "Capricorn",
    nickname: "THE AMBITIOUS CLIMBER",
    date: "December 22 - January 19",
    description:
      "Capricorns are disciplined, responsible, and driven by success. They work hard to achieve their goals and value long-term achievement over short-term gains.",
    img: "https://image.cdn2.seaart.me/2025-03-30/cvkcfjte878c73davjh0-1/3f5dda64e66dad9f36026852a318b616_high.webp",
    icon: <TbZodiacCapricorn />,
  },
  {
    name: "Aquarius",
    nickname: "THE VISIONARY THINKER",
    date: "January 20 - February 18",
    description:
      "Aquarians are independent, innovative, and idealistic. They often think ahead of their time and are passionate about humanitarian causes.",
    img: "https://image.cdn2.seaart.me/2024-09-04/crbsq5de878c73d4bstg/7bd59abf0b9822e00faf6f87a1c9b82b_high.webp",
    icon: <TbZodiacAquarius />,
  },
  {
    name: "Pisces",
    nickname: "THE DREAMY EMPATH",
    date: "February 19 - March 20",
    description:
      "Pisces are compassionate, artistic, and intuitive. They have a deep emotional sensitivity and a rich inner world fueled by imagination.",
    img: "https://image.cdn2.seaart.me/2025-02-09/cuke3ade878c7393mkg0/718c16282f49cc3be613e5777c2157a4_high.webp",
    icon: <TbZodiacPisces />,
  },
];

export default function ZodiacSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  let turbulenceTween: gsap.core.Tween | null = null;

  const slideTo = (newIndex: number) => {
    if (!imageRef.current || !turbulenceRef.current) return;

    setIsSliding(true);
    setCurrentIndex(newIndex);
    imageRef.current.src = Zodiacs[newIndex].img;

    turbulenceRef.current.setAttribute("baseFrequency", "0.01 0.02");
    turbulenceTween?.kill();
    turbulenceTween = gsap.to(turbulenceRef.current, {
      attr: { baseFrequency: "0 0" },
      duration: 0.9,
      ease: "power2.out",
      onComplete: () => setIsSliding(false),
    });

    const texts = gsap.utils.toArray<HTMLElement>(".slide-text");
    gsap.fromTo(
      texts,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  };

  const handlePrev = () => {
    if (isSliding) return;
    const prev = currentIndex === 0 ? Zodiacs.length - 1 : currentIndex - 1;
    slideTo(prev);
  };

  const handleNext = () => {
    if (isSliding) return;
    const next = currentIndex === Zodiacs.length - 1 ? 0 : currentIndex + 1;
    slideTo(next);
  };

  // Initialize on mount
  useEffect(() => {
    slideTo(0);
  }, []);

  const { name, nickname, date, description, img, icon } =
    Zodiacs[currentIndex];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* SVG Filter */}
      <svg className="absolute pointer-events-none" aria-hidden>
        <defs>
          <filter id="noise">
            <feTurbulence
              ref={turbulenceRef}
              baseFrequency="0 0"
              numOctaves="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacementMap"
              direction="horizontal"
            />
          </filter>
        </defs>
      </svg>

      {/* Slider Content */}
      <section className="relative w-full h-full flex justify-center items-center text-white">
        <img
          ref={imageRef}
          src={img}
          alt={name}
          className="absolute -top-10 -left-7 w-[calc(100%+28px)] h-[calc(100%+40px)] object-cover object-top"
          style={{ filter: "url(#noise) brightness(0.4)" }}
        />
        <div className="w-full h-full relative z-10 grid grid-cols-2 py-4 px-8">
          <div className="flex flex-col justify-center">
            <h3
              className={`slide-text text-4xl font-serif w-2/3 ${Fonts.glaston.className}`}
            >
              {nickname}
            </h3>
            <p className="slide-text mt-8 text-white/70">{description}</p>
          </div>
          <div className="flex justify-end items-end">
            <div className="w-2/3 relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/618d62adf62abc32c0a4a811/1733097418894-SVPI60OAY09TNNYCBP9L/magic-astrology-wheel.png"
                alt=""
                className="w-full brightness-0 invert animate-[spin_10s_linear_infinite]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <p className="slide-text text-6xl">{icon}</p>
                <h1 className="slide-text font-JetBrainsMono text-2xl">
                  {name}
                </h1>
                <p className="slide-text text-[10px] text-white/70">{date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <button onClick={handlePrev} disabled={isSliding} className="p-5">
            PREV
          </button>
          <span>/</span>
          <button onClick={handleNext} disabled={isSliding} className="p-5">
            NEXT
          </button>
        </div>
      </section>
    </div>
  );
}

export const ZodiacSliderCode = `
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";

const Zodiacs = [
  {
    name: "Aries",
    nickname: "PIONEERING SPIRIT",
    date: "March 21 - April 19",
    description:
      "Aries are energetic, determined, and confident people who are always willing to take on new challenges. They are passionate about their work and are always eager to learn new skills and techniques.",
    img: "https://image.cdn2.seaart.me/2025-02-02/cuflnbde878c73flrgd0-2/40ae8a926efbee1ac2fc8a3137d15985_high.webp",
    icon: <TbZodiacAries />,
  },
  {
    name: "Taurus",
    nickname: "THE PERSISTENT WORKER",
    date: "April 20 - May 20",
    description:
      "Taurus are reliable, patient, and practical people who are always focused on the details. They are grounded and consistent, valuing comfort and security in their lives.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vkdte878c7394rcrg-1/4c78267905ae5d14c035b04240fc7c00_high.webp",
    icon: <TbZodiacTaurus />,
  },
  {
    name: "Gemini",
    nickname: "THE TWINKLING STAR",
    date: "May 21 - June 20",
    description:
      "Gemini are creative, imaginative, and curious people who are always eager to try new things. They are communicative and adaptable, thriving on social interaction and intellectual stimulation.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vnvde878c73ftgulg-1/62858f4fc1c487557d994927a566ef8e_high.webp",
    icon: <TbZodiacGemini />,
  },
  {
    name: "Cancer",
    nickname: "THE NURTURING SOUL",
    date: "June 21 - July 22",
    description:
      "Cancer individuals are empathetic, protective, and deeply emotional. They value family and home, often putting others’ needs before their own.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d09vosle878c73epvfgg-2/a4c02467e826d02c83a634ef3310761d_high.webp",
    icon: <TbZodiacCancer />,
  },
  {
    name: "Leo",
    nickname: "THE REGAL LEADER",
    date: "July 23 - August 22",
    description:
      "Leos are confident, charismatic, and natural leaders. They enjoy the spotlight and are generous with their energy, love, and attention.",
    img: "https://image.cdn2.seaart.me/2025-01-07/ctu4ibte878c73c15j1g-4/3af5431ce018fcf7b66b4efef21d7ad5_high.webp",
    icon: <TbZodiacLeo />,
  },
  {
    name: "Virgo",
    nickname: "THE PERFECTIONIST",
    date: "August 23 - September 22",
    description:
      "Virgos are analytical, meticulous, and highly practical. They strive for perfection and are known for their deep sense of responsibility.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a038te878c73fvjk4g-1/626573be0dba7ff3b0df523f22ee195c_high.webp",
    icon: <TbZodiacVirgo />,
  },
  {
    name: "Libra",
    nickname: "THE HARMONY SEEKER",
    date: "September 23 - October 22",
    description:
      "Libras are diplomatic, charming, and fair-minded. They seek balance in all aspects of life and excel in social situations.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a054de878c73fvup80-2/35b519fa0be8f364ac9450fc67b7b1b1_high.webp",
    icon: <TbZodiacLibra />,
  },
  {
    name: "Scorpio",
    nickname: "THE INTENSE MYSTIC",
    date: "October 23 - November 21",
    description:
      "Scorpios are passionate, resourceful, and deeply emotional. They value truth and loyalty and have an intense desire to uncover hidden meanings.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a05j5e878c73ese7u0-2/cc59f6c3573658e2cdc7a21bad2bf025_high.webp",
    icon: <TbZodiacScorpio />,
  },
  {
    name: "Sagittarius",
    nickname: "THE WANDERING PHILOSOPHER",
    date: "November 22 - December 21",
    description:
      "Sagittarians are adventurous, optimistic, and always seeking knowledge. They love exploring new ideas, places, and perspectives.",
    img: "https://image.cdn2.seaart.me/2025-05-02/d0a067le878c73esibh0-2/b27b5d3ea018602c9ef917559b29c7bd_high.webp",
    icon: <TbZodiacSagittarius />,
  },
  {
    name: "Capricorn",
    nickname: "THE AMBITIOUS CLIMBER",
    date: "December 22 - January 19",
    description:
      "Capricorns are disciplined, responsible, and driven by success. They work hard to achieve their goals and value long-term achievement over short-term gains.",
    img: "https://image.cdn2.seaart.me/2025-03-30/cvkcfjte878c73davjh0-1/3f5dda64e66dad9f36026852a318b616_high.webp",
    icon: <TbZodiacCapricorn />,
  },
  {
    name: "Aquarius",
    nickname: "THE VISIONARY THINKER",
    date: "January 20 - February 18",
    description:
      "Aquarians are independent, innovative, and idealistic. They often think ahead of their time and are passionate about humanitarian causes.",
    img: "https://image.cdn2.seaart.me/2024-09-04/crbsq5de878c73d4bstg/7bd59abf0b9822e00faf6f87a1c9b82b_high.webp",
    icon: <TbZodiacAquarius />,
  },
  {
    name: "Pisces",
    nickname: "THE DREAMY EMPATH",
    date: "February 19 - March 20",
    description:
      "Pisces are compassionate, artistic, and intuitive. They have a deep emotional sensitivity and a rich inner world fueled by imagination.",
    img: "https://image.cdn2.seaart.me/2025-02-09/cuke3ade878c7393mkg0/718c16282f49cc3be613e5777c2157a4_high.webp",
    icon: <TbZodiacPisces />,
  },
];

export default function ZodiacSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  let turbulenceTween: gsap.core.Tween | null = null;

  const slideTo = (newIndex: number) => {
    if (!imageRef.current || !turbulenceRef.current) return;

    setIsSliding(true);
    setCurrentIndex(newIndex);
    imageRef.current.src = Zodiacs[newIndex].img;

    turbulenceRef.current.setAttribute("baseFrequency", "0.01 0.02");
    turbulenceTween?.kill();
    turbulenceTween = gsap.to(turbulenceRef.current, {
      attr: { baseFrequency: "0 0" },
      duration: 0.9,
      ease: "power2.out",
      onComplete: () => setIsSliding(false),
    });

    const texts = gsap.utils.toArray<HTMLElement>(".slide-text");
    gsap.fromTo(
      texts,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  };

  const handlePrev = () => {
    if (isSliding) return;
    const prev = currentIndex === 0 ? Zodiacs.length - 1 : currentIndex - 1;
    slideTo(prev);
  };

  const handleNext = () => {
    if (isSliding) return;
    const next = currentIndex === Zodiacs.length - 1 ? 0 : currentIndex + 1;
    slideTo(next);
  };

  // Initialize on mount
  useEffect(() => {
    slideTo(0);
  }, []);

  const { name, nickname, date, description, img, icon } =
    Zodiacs[currentIndex];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* SVG Filter */}
      <svg className="absolute pointer-events-none" aria-hidden>
        <defs>
          <filter id="noise">
            <feTurbulence
              ref={turbulenceRef}
              baseFrequency="0 0"
              numOctaves="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacementMap"
              direction="horizontal"
            />
          </filter>
        </defs>
      </svg>

      {/* Slider Content */}
      <section className="relative w-full h-full flex justify-center items-center text-white">
        <img
          ref={imageRef}
          src={img}
          alt={name}
          className="absolute -top-10 -left-7 w-[calc(100%+28px)] h-[calc(100%+40px)] object-cover object-top"
          style={{ filter: "url(#noise) brightness(0.4)" }}
        />
        <div className="w-full h-full relative z-10 grid grid-cols-2 py-4 px-8">
          <div className="flex flex-col justify-center">
            <h3 className="slide-text text-4xl font-serif w-2/3">
              {nickname}
            </h3>
            <p className="slide-text mt-8 text-white/70">{description}</p>
          </div>
          <div className="flex justify-end items-end">
            <div className="w-2/3 relative">
              <img
                src="https://images.squarespace-cdn.com/content/v1/618d62adf62abc32c0a4a811/1733097418894-SVPI60OAY09TNNYCBP9L/magic-astrology-wheel.png"
                alt=""
                className="w-full brightness-0 invert animate-[spin_10s_linear_infinite]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <p className="slide-text text-6xl">{icon}</p>
                <h1 className="slide-text font-JetBrainsMono text-2xl">
                  {name}
                </h1>
                <p className="slide-text text-[10px] text-white/70">{date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <button onClick={handlePrev} disabled={isSliding} className="p-5">
            PREV
          </button>
          <span>/</span>
          <button onClick={handleNext} disabled={isSliding} className="p-5">
            NEXT
          </button>
        </div>
      </section>
    </div>
  );
}
`;
