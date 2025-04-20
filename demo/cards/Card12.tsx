"use client";
import { useRef } from "react";
import React, { ReactNode } from "react";

interface CubeFaceProps {
  transform: string;
  children?: ReactNode;
  background?: string;
}

function CubeFace({ transform, children, background }: CubeFaceProps) {
  return (
    <div
      className="absolute w-full h-full flex justify-center items-center pt-2"
      style={{
        transform,
        background:
          background ||
          "radial-gradient(circle at 100% 107%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.8) 100%)",
        WebkitBackdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

// Main IceCube Component
export default function IceCube() {
  const vidSrc =
    "https://videos.pexels.com/video-files/2450251/2450251-uhd_2560_1440_30fps.mp4";

  const vidRef = useRef<HTMLVideoElement | null>(null);
  const vidRef2 = useRef<HTMLVideoElement | null>(null);

  const toggleVideos = () => {
    if (vidRef.current) {
      vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    }
    if (vidRef2.current) {
      vidRef2.current.paused ? vidRef2.current.play() : vidRef2.current.pause();
    }
  };

  return (
    <>
      <style jsx>{`
        .cube {
          transform: rotateX(-20deg) rotateY(30deg) rotateZ(-10deg);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
        .cube:hover {
          transform: rotateX(-15deg) rotateY(50deg);
        }
      `}</style>

      <button
        onClick={toggleVideos}
        className="w-screen h-full flex items-center justify-center bg-gray-900 "
        style={{ perspective: "1000px" }}
      >
        <div className="cube group relative w-40 h-40">
          <CubeFace transform="rotateY(0deg) translateZ(80px)" />
          <CubeFace
            transform="rotateY(0deg) translateZ(70px)"
            background="transparent"
          >
            <div className="w-[85%] h-[90%] overflow-hidden group-hover: relative">
              <span className="absolute top-0 w-[120%] h-full -left-[100%] group-hover:left-[100%] opacity-60 bg-gradient-to-r from-transparent via-white/70 blur-sm to-transparent rotate-[120deg] pointer-events-none duration-700 ease-out" />
              <video
                ref={vidRef}
                src={vidSrc}
                loop
                muted
                className="w-full h-full object-cover object-right"
              />
            </div>
          </CubeFace>

          <CubeFace
            transform="rotateY(-90deg) translateZ(70px)"
            background="transparent"
          >
            <div className="w-[85%] h-[90%] overflow-hidden">
              <video
                ref={vidRef2}
                src={vidSrc}
                loop
                muted
                className="w-full h-full object-cover object-left"
              />
            </div>
          </CubeFace>

          <CubeFace transform="rotateY(180deg) translateZ(80px)" />
          <CubeFace transform="rotateY(90deg) translateZ(80px)" />
          <CubeFace transform="rotateY(-90deg) translateZ(80px)" />
          <CubeFace transform="rotateX(90deg) translateZ(80px)" />
          <CubeFace
            transform="rotateX(90deg) translateZ(80px)"
            background="radial-gradient(circle at 100% 107%, #777 0%, #888 30%, #444 60%, #111 100%)"
          />
          <CubeFace transform="rotateX(-90deg) translateZ(80px)" />
        </div>
      </button>
    </>
  );
}

export const IceCubeCode = `"use client";
import { useRef } from "react";
import React, { ReactNode } from "react";

interface CubeFaceProps {
  transform: string;
  children?: ReactNode;
  background?: string;
}

function CubeFace({ transform, children, background }: CubeFaceProps) {
  return (
    <div
      className="absolute w-full h-full flex justify-center items-center pt-2"
      style={{
        transform,
        background:
          background ||
          "radial-gradient(circle at 100% 107%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.8) 100%)",
        WebkitBackdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

// Main IceCube Component
export default function IceCube() {
  const vidSrc =
    "https://videos.pexels.com/video-files/2450251/2450251-uhd_2560_1440_30fps.mp4";

  const vidRef = useRef<HTMLVideoElement | null>(null);
  const vidRef2 = useRef<HTMLVideoElement | null>(null);

  const toggleVideos = () => {
    if (vidRef.current) {
      vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
    }
    if (vidRef2.current) {
      vidRef2.current.paused ? vidRef2.current.play() : vidRef2.current.pause();
    }
  };

  return (
    <>
      <style jsx>{\`
        .cube {
          transform: rotateX(-20deg) rotateY(30deg) rotateZ(-10deg);
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
        .cube:hover {
          transform: rotateX(-15deg) rotateY(50deg);
        }
      \`}</style>

      <button
        onClick={toggleVideos}
        className="w-screen h-full flex items-center justify-center bg-gray-900 "
        style={{ perspective: "1000px" }}
      >
        <div className="cube group relative w-40 h-40">
          <CubeFace transform="rotateY(0deg) translateZ(80px)" />
          <CubeFace
            transform="rotateY(0deg) translateZ(70px)"
            background="transparent"
          >
            <div className="w-[85%] h-[90%] overflow-hidden group-hover: relative">
              <span className="absolute top-0 w-[120%] h-full -left-[100%] group-hover:left-[100%] opacity-60 bg-gradient-to-r from-transparent via-white/70 blur-sm to-transparent rotate-[120deg] pointer-events-none duration-700 ease-out" />
              <video
                ref={vidRef}
                src={vidSrc}
                loop
                muted
                className="w-full h-full object-cover object-right"
              />
            </div>
          </CubeFace>

          <CubeFace
            transform="rotateY(-90deg) translateZ(70px)"
            background="transparent"
          >
            <div className="w-[85%] h-[90%] overflow-hidden">
              <video
                ref={vidRef2}
                src={vidSrc}
                loop
                muted
                className="w-full h-full object-cover object-left"
              />
            </div>
          </CubeFace>

          <CubeFace transform="rotateY(180deg) translateZ(80px)" />
          <CubeFace transform="rotateY(90deg) translateZ(80px)" />
          <CubeFace transform="rotateY(-90deg) translateZ(80px)" />
          <CubeFace transform="rotateX(90deg) translateZ(80px)" />
          <CubeFace
            transform="rotateX(90deg) translateZ(80px)"
            background="radial-gradient(circle at 100% 107%, #777 0%, #888 30%, #444 60%, #111 100%)"
          />
          <CubeFace transform="rotateX(-90deg) translateZ(80px)" />
        </div>
      </button>
    </>
  );
}`;
