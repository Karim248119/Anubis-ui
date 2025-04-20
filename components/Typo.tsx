import { Fonts } from "@/lib/fonts";
import React from "react";

export default function Typo({
  className,
  children,
  font,
}: {
  className?: string;
  children: React.ReactNode;
  font?: "h1" | "h2" | "h3" | "p";
}) {
  return (
    <div
      className={`${
        font === "h1"
          ? Fonts.doHyeon.className
          : font === "h2"
          ? Fonts.audiowide.className
          : font === "h3"
          ? Fonts.orbitron.className
          : Fonts.quicksand.className
      }  ${className}`}
    >
      {children}
    </div>
  );
}
