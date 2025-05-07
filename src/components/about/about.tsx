"use client";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description:
    "Learn more about Sandra Höst Kannerberg, a passionate web developer with a focus on creativity, user-friendly solutions, and continuous growth. Discover my journey and expertise!",
};

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

      <section className="flex flex-col justify-end gap-10">
        <ul>
          <li className="uppercase font-semibold">Sandra Höst Kannerberg</li>
          <li>Web developer</li>
          <li>Based in Stockholm</li>
          <li>Open for work within Stockholm area or remote globally</li>
        </ul>
        <p>
          I am a fullstack web developer with a frontend heart – passionate
          about creating intuitive, responsive interfaces while ensuring solid
          and scalable backend foundations. A true frontend addict who thrives
          on pixel perfection and modern UI/UX design.
        </p>
      </section>
    </section>
  );
};

export default About;
