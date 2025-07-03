import React, { useRef } from "react";
import Image from "next/image";

import { IProject } from "@/interfaces";

import data from "../../../public/data/projects.json";
import ProjectsTimeline from "./projects-timeline";
import { useGSAP } from "@gsap/react";
import { animHeading } from "@/lib/utils/animations";

const Projects = () => {
  const projectsData = data as IProject[];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      animHeading(".heading");
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-12 my-50">
      <figure className="fade-in grid col-span-12 md:col-span-6 justify-self-center lg:justify-self-start h-80 w-90 sm:w-100">
        <Image
          src="/images/projects-illustration.svg"
          alt="Illustration of a woman and about me text"
          width={500}
          height={400}
          priority
        />
      </figure>

      <div
        ref={containerRef}
        className="col-span-12 md:col-span-6 flex flex-col justify-center md:items-end"
      >
        <h2 className="text-6xl lg:text-9xl mb-5 font-secondary uppercase heading">
          <span className="block font-handwritten text-6xl lowercase heading">
            selected
          </span>
          Projects
        </h2>
      </div>

      <h3 className="pb-5 text-lg uppercase sr-only">Projects timeline</h3>
      <ProjectsTimeline projects={projectsData} />
    </section>
  );
};

export default Projects;
