"use client";

import { splitTextByLines } from "@/lib/utils/animations";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const About = () => {
  const textAnimationRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      splitTextByLines(".lines");
    },
    { scope: textAnimationRef }
  );

  return (
    <>
      <section
        id="about"
        className="fade-in grid grid-cols-1 gap-10 md:grid-cols-2 my-20"
      >
        <div ref={textAnimationRef} className="flex flex-col justify-end">
          <span className="block font-handwritten text-6xl lowercase lines">
            a little
          </span>
          <h2
            id="main-heading"
            className="text-8xl font-secondary uppercase lines"
          >
            About me
          </h2>
        </div>

        <section className="flex flex-col justify-end gap-5">
          <p>
            I am a fullstack web developer with a frontend heart – passionate
            about creating intuitive, responsive interfaces while ensuring solid
            and scalable backend foundations.
          </p>
          <p>
            With a strong background in customer service, I bring a deeply
            rooted customer-centric mindset to every project. This experience
            has honed my communication skills, sharpened my focus on
            accessibility, and instilled in me the importance of intuitive user
            experiences.
          </p>
          <p>
            A true frontend addict who thrives on pixel perfection and modern
            UI/UX design, I build with the end user always in mind.
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
