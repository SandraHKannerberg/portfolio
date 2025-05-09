import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Timeline from "@/components/work/timeline";

export const metadata: Metadata = {
  title: "Portfolio - Work",
  description:
    "Discover Sandra Höst Kannerberg's professional journey, including her work experience and educational background. Learn about the skills and expertise gained throughout her career.",
};

const WorkExperience = () => {
  return (
    <section id="work" className="fade-in grid grid-cols-12">
      <figure className="grid col-span-12 md:col-span-6 justify-self-center items-end lg:justify-self-start w-80 h-65">
        <Image
          src="/images/work.svg"
          alt="Illustration of a businesswoman"
          width={400}
          height={400}
          priority
        />
      </figure>
      <div className="col-span-12 md:col-span-6 flex flex-col justify-end items-end">
        <span className="block font-handwritten text-6xl lowercase">work</span>
        <h2 className="text-6xl lg:text-8xl font-secondary uppercase">
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <section className="col-span-12 my-16">
        <h3 className="pb-5 text-lg uppercase sr-only">Experience timeline</h3>
        <Timeline />
      </section>
    </section>
  );
};

export default WorkExperience;
