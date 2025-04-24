"use client";

import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import logo from "@/public/logo.png";
import darkLogo from "@/public/logo-dark.png";
import { GiAnubis } from "react-icons/gi";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const logoSrc = currentTheme === "dark" ? logo : darkLogo;

  return (
    <div className="flex items-center text-lg gap- font-bold">
      <div className="text-4xl scale-x-[-1] mr-[2px]">
        <GiAnubis />
      </div>
      <span>nubisUI</span>
    </div>
  );
}
