import type { Metadata } from "next";
import "./globals.css";
import Theme from "../hooks/ThemeProvider";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { Fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "AnubisUI",
  description: "Portfolio of Karim A. Hassan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dark.png" sizes="any" />
      </head>
      <body className={` ${Fonts.quicksand.className}  flex`}>
        <Theme>
          <Navbar />
          <SideBar />
          <div className="w-[80vw] ml-[15vw] pt-32 p-10">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
