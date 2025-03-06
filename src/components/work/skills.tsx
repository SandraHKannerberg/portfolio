import React from "react";
import Image from "next/image";
import OneByOneAnimation from "../animations/one-by-one";

import data from "../../../public/data/skills-data.json";
import { Skill } from "@/lib/interfaces";

export default function Skills({ skills }: { skills: Skill[] }) {
  const skillsData = data as Skill[];

  return (
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

    //       {/* TODO: add shadcn/ui */}
  );
}
