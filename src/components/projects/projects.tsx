import React from "react";
import Image from "next/image";

import { IProject } from "@/lib/interfaces";

import data from "../../../public/data/projects-data.json";
import ProjectsTimeline from "./projects-timeline";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const Projects = () => {
  const projectsData = data as IProject[];

  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-12 my-50">
      <figure className="fade-in grid col-span-12 animate-fade-in justify-self-center lg:justify-self-start h-80 w-90 sm:w-100">
        <Image
          src="/images/projects-illustration.svg"
          alt="Illustration of a woman and about me text"
          width={500}
          height={400}
          priority
        />
      </figure>
      <TextAnimWrapper>
        <div className="col-span-12 flex flex-col items-end justify-center">
          <p className="block font-handwritten text-6xl lowercase">selected</p>
          <h2 className="text-6xl lg:text-[10rem] mb-5 font-secondary uppercase">
            Projects
          </h2>
        </div>
      </TextAnimWrapper>
      <h3 className="pb-5 text-lg uppercase sr-only">Projects timeline</h3>
      <ProjectsTimeline projects={projectsData} />
    </section>
  );
};

export default Projects;
