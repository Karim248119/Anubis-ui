"use client";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { GiAnkh } from "react-icons/gi";
import { LiaAnkhSolid } from "react-icons/lia";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "default" | "link";
}

export default function Button({
  children,
  href = "#",
  className = "",
  variant = "default",
  ...buttonProps
}: BtnProps) {
  const buttonElement = (
    <button
      {...buttonProps}
      className={`group flex items-center overflow-hidden -mr-4 ${className}`}
    >
      <div
        className="transition-all duration-500 group-hover:bg-gold relative  overflow-hidden 
               pr-10 pl-4 py-1 border-2 border-gold  rounded-full flex-1"
      >
        <span className="relative z-20"> {children}</span>
        <span className="h-full w-full absolute top-0 left-full group-hover:left-0 bg-gradient-to-l from-gold  to-background rounded-full z-10 duration-500" />
      </div>
      <div
        className="transition-all duration-500 transform -translate-x-8 group-hover:bg-transparent z-20
               p-2 rounded-full bg-gold text-background -rotate-45 group-hover:rotate-0"
      >
        <LiaAnkhSolid />
      </div>
    </button>
  );

  return variant === "link" ? (
    <Link href={href}>{buttonElement}</Link>
  ) : (
    buttonElement
  );
}
