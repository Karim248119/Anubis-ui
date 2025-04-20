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
    <div className="flex items-center text-lg gap-2 font-bold">
      <div className="p-2 border rounded-lg text-2xl">
        <GiAnubis />
      </div>
      <span>AnubisUI</span>
    </div>
  );
}
