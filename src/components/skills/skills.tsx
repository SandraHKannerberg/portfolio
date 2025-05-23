import React, { useRef } from "react";
import Image from "next/image";
import data from "../../../public/data/skills-data.json";
import { ISkill } from "@/lib/interfaces";
import { useGSAP } from "@gsap/react";
import { animHeading, dropOneByOne } from "@/lib/utils/animations";

const Skills = () => {
  const skillsData = data as ISkill[];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      animHeading(".heading");
      dropOneByOne(".item-to-drop");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="skills" className="grid grid-cols-12 my-40">
      <div className="col-span-12 md:col-span-6 flex flex-col mb-10 justify-center items-center md:items-start">
        <h2 className="text-6xl lg:text-9xl mb-5 font-secondary uppercase text-foreground heading">
          <span className="block font-handwritten text-6xl lowercase heading">
            my tech
          </span>
          Skills
        </h2>
      </div>

      <section className="items-to-drop grid col-span-12 gap-2 gap-y-8 place-items-center py-5 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 opacity-75 grayscale hover:opacity-100 hover:grayscale-0">
        {skillsData.map((skill, index) => (
          <figure
            key={index}
            className="item-to-drop flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]"
          >
            <Image src={skill.src} alt={skill.alt} width={100} height={100} />
            <figcaption className="mt-2">{skill.name}</figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Skills;

//       {/* TODO: add shadcn/ui */}
