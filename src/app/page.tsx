"use client";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Work from "@/components/work/work-experience";
import ScrollDown from "@/components/ui/scroll-down";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import CvDownload from "@/components/work/cv-download";
import Contact from "@/components/contact/contact";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInOnScroll } from "@/lib/utils/animations";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    fadeInOnScroll(".fade-in");
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <Hero />
        <ScrollDown />

        <main ref={containerRef} className="space-y-30">
          <About />
          <CvDownload />
          <Work />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </MaxWidthWrapper>
    </>
  );
}
