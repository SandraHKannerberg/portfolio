import React, { useRef } from "react";
import Image from "next/image";
import data from "../../../public/data/skills-data.json";
import { ISkill } from "@/lib/interfaces";
import { useGSAP } from "@gsap/react";
import { dropOneByOne } from "@/lib/utils/animations";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const Skills = () => {
  const skillsData = data as ISkill[];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      dropOneByOne(".item-to-drop");
    },
    { scope: containerRef }
  );

  return (
    <section id="skills" className="grid grid-cols-12 my-20">
      <TextAnimWrapper>
        <div className="col-span-12 md:col-span-6 flex flex-col justify-end mb-10 overflow-visible">
          <p className="block font-handwritten text-6xl lowercase">tech</p>
          <h2 className="text-6xl lg:text-[10rem] mb-5 font-secondary uppercase text-foreground">
            Skills
          </h2>
        </div>
      </TextAnimWrapper>

      <section
        ref={containerRef}
        className="items-to-drop grid col-span-12 gap-2 gap-y-8 place-items-center py-5 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 opacity-75 grayscale hover:opacity-100 hover:grayscale-0"
      >
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
