"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Photo {
  url: string;
  description: string;
}

interface Photo {
  url: string;
  description: string;
}

const photos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1622901120958-ae569882629c?auto=format&fit=crop&w=934&q=80",
    description: "Block 1",
  },
  {
    url: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?auto=format&fit=crop&w=934&q=80",
    description: "Block 2",
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=934&q=80",
    description: "Block 3",
  },
  {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=933&q=80",
    description: "Block 4",
  },
  {
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=930&q=80",
    description: "Block 5",
  },
  {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=934&q=80",
    description: "Block 6",
  },
  {
    url: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?auto=format&fit=crop&w=934&q=80",
    description: "Block 7",
  },
  {
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=934&q=80",
    description: "Block 8",
  },
  {
    url: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=934&q=80",
    description: "Block 9",
  },
  {
    url: "https://images.unsplash.com/photo-1526315251174-de0107e28fb4?auto=format&fit=crop&w=934&q=80",
    description: "Block 10",
  },
  {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=934&q=80",
    description: "Block 11",
  },
  {
    url: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?auto=format&fit=crop&w=934&q=80",
    description: "Block 12",
  },
  {
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=934&q=80",
    description: "Block 13",
  },
  {
    url: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=934&q=80",
    description: "Block 14",
  },
  {
    url: "https://images.unsplash.com/photo-1526315251174-de0107e28fb4?auto=format&fit=crop&w=934&q=80",
    description: "Block 15",
  },
];

const ease = 0.06;

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;
    const totalScroll = slider.scrollWidth - container.clientWidth;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(slider, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const velocity = self.getVelocity(); // scroll velocity
            const skew = gsap.utils.clamp(-50, 50, velocity / 100); // limit skew

            // apply skew to all image blocks
            imageRefs.current.forEach((el) => {
              gsap.to(el, {
                skewX: skew,
                duration: 0.3,
                ease: "power3.out",
              });
            });
          },
        },
      });

      // Reset skewX when scroll stops
      ScrollTrigger.addEventListener("scrollEnd", () => {
        imageRefs.current.forEach((el) => {
          gsap.to(el, {
            skewX: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-screen"
    >
      <div
        ref={sliderRef}
        className="flex h-full items-center gap-5 select-none"
        style={{ width: `${photos.length * 30}vw` }}
      >
        {photos.map((photo, idx) => (
          <div key={idx} className="relative w-[30vw] h-[50vh] overflow-hidden">
            <div
              ref={(el) => {
                if (el) imageRefs.current[idx] = el;
              }}
              className="absolute left-[-10vw] w-[50vw] h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${photo.url})` }}
              aria-label={photo.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
