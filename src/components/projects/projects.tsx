import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import ProjectsList from "@/components/projects/projects-list";
import { IProject } from "@/lib/interfaces";

import data from "../../../public/data/projects-data.json";

export const metadata: Metadata = {
  title: "Portfolio - Projects",
  description:
    "Explore a curated selection of projects created by Sandra Höst Kannerberg, see how I bring ideas to life through design and development.",
};

const Projects = () => {
  const projectsData = data as IProject[];

  return (
    <section id="projects" className="fade-in grid grid-cols-1 md:grid-cols-12">
      <figure className="grid col-span-12 sm:col-span-6 animate-fade-in justify-self-center lg:justify-self-start h-80 w-90 sm:w-100">
        {/* TODO: add animation to this image */}
        <Image
          src="/images/projects.svg"
          alt="Illustration of a woman and about me text"
          width={500}
          height={400}
          priority
        />
      </figure>
      <div className="col-span-12 sm:col-span-6 flex flex-col items-end justify-center">
        <span className="block font-handwritten text-6xl lowercase">
          selected
        </span>
        <h2 className="text-6xl lg:text-8xl mb-5 font-secondary uppercase">
          Projects
        </h2>
      </div>

      <ProjectsList projects={projectsData} />
    </section>
  );
};

export default Projects;
