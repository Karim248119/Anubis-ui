import type { Metadata } from "next";
import "../globals.css";
import Theme from "../../hooks/ThemeProvider";
import Navbar from "@/components/Navbar";
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
      <body
        className={`${Fonts.quicksand.className} flex default:dark overflow-x-hidden`}
      >
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
