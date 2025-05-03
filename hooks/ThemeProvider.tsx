"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}
