import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[80vh] relative flex justify-center items-center bg-black">
      <img
        src="/anubis.jpg"
        alt="hero"
        className="w-auto h-[100%] object-cover absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
      />
      <div className="relative z-20 text-white text-center max-w-xl px-4 flex flex-col justify-center items-center ">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight">
          Andubis UI
        </h1>
        <p className="mt-8 mb-14 md:text-xl text-sm text-white/70 ">
          A futuristic UI library combining sleek design and developer-first
          components.
        </p>
        <Link href="/components/buttons">
          <Button variant="link" className="md:w-96 w-60">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
