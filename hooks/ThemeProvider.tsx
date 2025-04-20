"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Theme({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}
