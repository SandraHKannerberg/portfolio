"use client";
import FullscreenMenu from "@/components/ui/fullscreen-menu";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <header className="flex flex-col items-center justify-center relative h-[100vh]">
        <div className="z-1 absolute top-0 right-0 p-5">
          <FullscreenMenu></FullscreenMenu>
        </div>

        <Image
          src="/background.jpg"
          alt="Background image showing crumpled paper"
          fill
          className="bg-cover bg-center"
          priority
        />
        <section className="relative w-full z-1 flex flex-col items-center justify-center">
          <h1 className="font-handwritten">
            <TypeAnimation
              sequence={[
                "a frontend",
                1000,
                "a fullstack",
                1000,
                "a creative",
                1000,
              ]}
              wrapper="span"
              className="block text-5xl md:text-8xl p-5"
              speed={50}
              repeat={Infinity}
            />
            <span className="uppercase text-6xl md:text-9xl font-secondary">
              Portfolio
            </span>
          </h1>
        </section>
      </header>
    </>
  );
}
