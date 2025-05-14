"use client";

import React from "react";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 my-20"
      >
        <div className="flex flex-col justify-end">
          <TextAnimWrapper>
            <span className="block font-handwritten text-6xl lowercase">
              a little
            </span>
            <h2 id="main-heading" className="text-8xl font-secondary uppercase">
              About me
            </h2>
          </TextAnimWrapper>
        </div>

        <section>
          <TextAnimWrapper>
            <p className="text-xl leading-[1.25] mb-5">
              I am a fullstack web developer with a frontend heart – passionate
              about creating intuitive, responsive interfaces while ensuring
              solid and scalable backend foundations.
            </p>
            <p className="text-xl leading-[1.25] mb-5">
              With a strong background in customer service, I bring a deeply
              rooted customer-centric mindset to every project. This experience
              has honed my communication skills, sharpened my focus on
              accessibility, and instilled in me the importance of intuitive
              user experiences.
            </p>
            <p className="text-xl leading-[1.25]">
              A true frontend addict who thrives on pixel perfection and modern
              UI/UX design, I build with the end user always in mind.
            </p>
          </TextAnimWrapper>
        </section>
      </section>
    </>
  );
};

export default About;
