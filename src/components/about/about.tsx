"use client";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="fade-in grid grid-cols-1 gap-10 md:grid-cols-2 my-20"
    >
      <div className="flex flex-col justify-end">
        <span className="block font-handwritten text-6xl lowercase">
          a little
        </span>
        <h2 className="text-8xl font-secondary uppercase">About me</h2>
      </div>

      <section className="flex flex-col justify-end gap-5">
        <ul className="mb-10">
          <li className="uppercase font-semibold text-2xl">
            Sandra Höst Kannerberg
          </li>
          <li className="uppercase font-semibold mb-5">Web developer</li>
          <li>3+ experience of development</li>
          <li>15+ experience of customer service</li>
          <li>Based in Stockholm</li>
          <li>Open for work within Stockholm area or remote globally</li>
        </ul>
        <p>
          I am a fullstack web developer with a frontend heart – passionate
          about creating intuitive, responsive interfaces while ensuring solid
          and scalable backend foundations.
        </p>
        <p>
          With a strong background in customer service, I bring a deeply rooted
          customer-centric mindset to every project. This experience has honed
          my communication skills, sharpened my focus on accessibility, and
          instilled in me the importance of intuitive user experiences.
        </p>
        <p>
          A true frontend addict who thrives on pixel perfection and modern
          UI/UX design, I build with the end user always in mind.
        </p>
      </section>
    </section>
  );
};

export default About;
