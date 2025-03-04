"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <header className="flex flex-col justify-center relative h-[100vh]">
        <Image
          src="/background.jpg"
          alt="Background image showing crumpled paper"
          fill
          className="bg-cover bg-center"
          priority
        />
        <section className="relative z-1 flex flex-col items-center p-5">
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
              className="block text-8xl p-5"
              speed={50}
              repeat={Infinity}
            />
            <span className="uppercase break-all text-9xl font-secondary">
              Portfolio
            </span>
          </h1>
        </section>
      </header>
    </>
  );
}
