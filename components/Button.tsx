"use client";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  variant: "default" | "link";
}

export default function Button({
  children,
  href,
  className = "",
  variant = "default",
  ...buttonProps
}: BtnProps) {
  return variant === "link" ? (
    <Link
      href={href || "#"}
      className={` hover:bg-foreground hover:text-background border-[2px] rounded-full transition-all duration-300 ease-in-out ${className}`}
    >
      <button {...buttonProps}>{children}</button>
    </Link>
  ) : (
    <button
      className={` hover:bg-foreground hover:text-background border-[2px] rounded-full transition-all duration-300 ease-in-out ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
