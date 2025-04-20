"use client";
import { useState } from "react";
import Card4 from "./cards/Card4";
import FlipCard from "./cards/Card6";

export default function CustomCursorWrapper({
  children,
  customCursorContent,
  className,
  noCursor = false,
}: {
  children: React.ReactNode;
  customCursorContent: React.ReactNode;
  className?: string;
  noCursor?: boolean;
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        cursor: noCursor ? "none" : "",
      }}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: "fixed",
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          {customCursorContent}
        </div>
      )}
    </div>
  );
}

//usage

export function CustomCursor() {
  return (
    <CustomCursorWrapper
      noCursor
      customCursorContent={
        <div className="w-20 h-20 flex items-center justify-center relative rounded-full overflow-hidden ">
          <div
            className="w-full h-full bg-white/20  absolute top-0 left-0"
            style={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          />
          <span className="relative z-10">Flip</span>
        </div>
      }
    >
      <FlipCard />
    </CustomCursorWrapper>
  );
}
