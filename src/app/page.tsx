"use client";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { TypeAnimation } from "react-type-animation";
import About from "@/components/about/about";
import Work from "@/components/work/work-experience";
import ScrollDown from "@/components/ui/scroll-down";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function HomePage() {
  const letters = "Portfolio".split("");
  return (
    <>
      <MaxWidthWrapper>
        {/* Hero section */}
        <section className="relative grid grid-cols-2 p-10 bg-[url('/images/coloreffect-bg.png')] bg-center bg-no-repeat">
          <h1 className="font-handwritten md:pl-10 col-span-2 md:col-span-1 md:flex md:items-center z-5">
            <TypeAnimation
              sequence={[
                "frontend",
                1000,
                "fullstack",
                1000,
                "creative",
                1000,
                "design",
                1000,
                "curious",
                1000,
                "portfolio",
                1000,
              ]}
              wrapper="span"
              className="block text-5xl md:text-8xl p-5"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <section className="grid grid-cols-3 gap-10 col-span-2 md:col-span-1 z-5">
            {letters.map((char, index) => (
              <div
                key={index}
                className="flex items-center justify-center font-secondary text-8xl uppercase"
              >
                {char}
              </div>
            ))}
          </section>
          <ScrollDown />
          {/* TODO: open this when scroll animation are done */}
          {/* Gradient fade */}
          {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background z-5" /> */}
        </section>
        <main>
          <About />
          <Work />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </MaxWidthWrapper>
    </>
  );
}
