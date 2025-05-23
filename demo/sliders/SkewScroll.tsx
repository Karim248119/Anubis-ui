"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";
import imagesLoaded from "imagesloaded";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1622901120958-ae569882629c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 1",
  },
  {
    url: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 2",
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 3",
  },
  {
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
    description: "Block 4",
  },
  {
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=930&q=80",
    description: "Block 5",
  },
  {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 6",
  },
  {
    url: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 7",
  },
  {
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 8",
  },
  {
    url: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 9",
  },
  {
    url: "https://images.unsplash.com/photo-1526315251174-de0107e28fb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 10",
  },
  {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 11",
  },
  {
    url: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
    description: "Block 12",
  },
  {
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 13",
  },
  {
    url: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 14",
  },
  {
    url: "https://images.unsplash.com/photo-1526315251174-de0107e28fb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Block 15",
  },
];

const clamp = (value: number, min: number, max: number) =>
  value <= min ? min : value >= max ? max : value;

const preloadImages = (selector: string) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

const Home = () => {
  const ref = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const middleColumnRef = useRef(null);
  const scroll = useRef({
    cache: 0,
    current: 0,
  });
  useEffect(() => {
    // if (ref) {
    //   if (typeof window === "undefined" || !window.document) {
    //     return;
    //   }
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      // direction: "horizontal",
      // multiplier: 0.5,
      getDirection: true,
      getSpeed: true,
      // lerp: 0.5
    });
    scrollElement.on("scroll", (obj) => {
      // Find distance between scroll updates
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;

      leftColumnRef.current.style.transform = `skewY(${clamp(
        distance,
        -10,
        10
      )}deg)`;
      rightColumnRef.current.style.transform = `skewY(${clamp(
        distance,
        -10,
        10
      )}deg)`;
      middleColumnRef.current.style.transform = `skewY(${clamp(
        -distance,
        -10,
        10
      )}deg)`;
    });

    // Preload images
    Promise.all([preloadImages(".grid-item-media")]).then(() => {
      scrollElement.update();
    });
  }, []);

  const leftChunk = [...photos].splice(0, 5);
  const middleChunk = [...photos].splice(5, 5);
  const rightChunk = [...photos].splice(10, 5);
  console.log(photos.splice(5, 10));
  return (
    <>
      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="left-column" ref={leftColumnRef}>
            {leftChunk.map(({ url, description }, index) => (
              <GridItem
                key={url}
                url={url}
                description={description}
                index={index}
              />
            ))}
          </div>
          <div className="middle-column" data-scroll data-scroll-speed="-20">
            <div ref={middleColumnRef}>
              {middleChunk.map(({ url, description }, index) => (
                <GridItem
                  key={url}
                  url={url}
                  description={description}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="right-column" ref={rightColumnRef}>
            {rightChunk.map(({ url, description }, index) => (
              <GridItem
                key={url}
                url={url}
                description={description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

const GridItem = ({
  url,
  description,
  index,
}: {
  url: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="grid-item">
      <div className="grid-item-media">
        <img src={url} alt={description} />
      </div>
      <div className="grid-item-description">{description}</div>
    </div>
  );
};
