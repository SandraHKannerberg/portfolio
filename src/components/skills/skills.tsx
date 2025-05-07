import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import OneByOneAnimation from "../animations/one-by-one";

import data from "../../../public/data/skills-data.json";
import { ISkill } from "@/lib/interfaces";

export const metadata: Metadata = {
  title: "Portfolio - Skills",
  description:
    "Discover Sandra Höst Kannerberg's professional journey. Learn about the skills and expertise gained throughout her career.",
};

const Skills = () => {
  const skillsData = data as ISkill[];

  return (
    <section id="skills" className="fade-in grid grid-cols-12">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-end mb-10">
        <span className="block font-handwritten text-6xl lowercase">
          my tech
        </span>
        <h2 className="text-6xl lg:text-8xl mb-5 font-secondary uppercase">
          Skills
        </h2>
      </div>

      <section className="grid col-span-12 gap-2 gap-y-8 place-items-center py-5 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 opacity-75 grayscale hover:opacity-100 hover:grayscale-0">
        {skillsData.map((skill, index) => (
          <OneByOneAnimation as="figure" key={index} delayIndex={index}>
            <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
              <Image src={skill.src} alt={skill.alt} width={100} height={100} />
              <figcaption className="mt-2">{skill.name}</figcaption>
            </figure>
          </OneByOneAnimation>
        ))}
      </section>
    </section>
  );
};

export default Skills;

//       {/* TODO: add shadcn/ui */}
