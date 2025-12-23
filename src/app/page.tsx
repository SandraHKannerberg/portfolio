"use client";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Work from "@/components/work/work-experience";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import { useGSAP } from "@gsap/react";
import { fadeInOnScroll } from "@/lib/utils/animations";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      fadeInOnScroll(".fade-in");
    },
    { scope: containerRef }
  );

  return (
    <>
      <Hero />
      <MaxWidthWrapper>
        <main ref={containerRef} className="space-y-40 px-5">
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
