"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CustomEase from "gsap/CustomEase";
import HeroIntro from "./hero-intro";
import ScrollDown from "../ui/scroll-down";

gsap.registerPlugin(CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  // TODO: se till att detta finns med som en form av ini funktion innan några animationer körs
  // document.addEventListener("DOMContentLoaded")

  useGSAP(() => {
    // Start positions
    gsap.set("#left-word", { yPercent: -120 });
    gsap.set("#right-word", { yPercent: 120 });
    gsap.set(".anim-heading1", { yPercent: -120, opacity: 0 });
    gsap.set(".anim-heading2", { yPercent: 120, opacity: 0 });

    // Create timeline
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    // The words animation - in
    tl.to("#left-word", {
      yPercent: 120,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });

    tl.to(
      "#right-word",
      {
        yPercent: -120,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<"
    );

    // The dividers animation
    tl.to(".divider", {
      opacity: 1,
      scaleY: "100%",
      duration: 1,
      onComplete: () => {
        gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 });
      },
    });

    // The words animation - out
    tl.to("#left-word", {
      yPercent: -500,
      duration: 1,
      delay: 0.3,
      opacity: 0,
    });
    tl.to("#right-word", { yPercent: 240, duration: 1, opacity: 0 }, "<");

    // The background blocks
    tl.to(".anim-block", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 0.1,
      delay: 0.75,
      onStart: () => {
        gsap.to(".hero", { duration: 2, ease: "hop" });
      },
    });

    tl.to(".anim-heading-top", {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.3,
    });
    tl.to(
      ".anim-heading-bottom",
      { yPercent: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "<"
    );

    return () => tl.kill();
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Hero */}
      <section className="hero absolute col-span-2 text-center w-full h-[100vh] flex flex-col justify-center items-center z-50 overflow-hidden">
        <h1 className="anim-heading-top text-2xl md:text-2xl opacity-0 mt-10">
          Hello & welcome, I am Sandra
          <TypeAnimation
            sequence={[
              "creative coder",
              1000,
              "frontend addict",
              1000,
              "strong commitment",
              1000,
              "passion",
              1000,
              "curious",
              1000,
              "eye for details",
              1000,
              "problem solver",
              1000,
            ]}
            wrapper="span"
            className="anim-heading-bottom block text-5xl md:text-5xl lg:text-8xl p-5 font-handwritten opacity-0"
            speed={40}
            repeat={Infinity}
          />
        </h1>

        {/* TODO: Add animation for image */}
        <figure className="anim-heading-bottom grid col-span-12 md:col-span-6 my-20 justify-center items-center md:justify-self-start w-80 h-65 opacity-0">
          <Image
            src="/images/hero.svg"
            alt="Illustration of a woman sitting on the top af a computer"
            width={500}
            height={400}
            priority
          />
        </figure>

        <div className="absolute bottom-0 left-0">
          <ScrollDown />
        </div>

        <div className="absolute bottom-2 right-2">
          <p>The code had me at Hello World!</p>
        </div>
      </section>

      {/* Overlay - intro */}
      {!showContent && <HeroIntro />}
    </section>
  );
};

export default Hero;
