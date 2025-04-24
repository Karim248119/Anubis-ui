import type { Metadata } from "next";
import "../globals.css";
import Theme from "../../hooks/ThemeProvider";
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
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const isHomePage = pathname === "/";
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/anubis.svg" sizes="any" />
      </head>
      <body className={`${Fonts.quicksand.className} flex default:dark`}>
        <Theme>
          {isHomePage ? (
            children
          ) : (
            <>
              <Navbar />
              <div>{children}</div>
            </>
          )}
        </Theme>
      </body>
    </html>
  );
}
