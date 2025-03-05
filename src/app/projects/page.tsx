import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";
import ProjectsList from "@/components/projects/projects-list";
import { Project } from "@/lib/interfaces";
import Footer from "@/components/ui/footer";

import data from "../../../public/data/projects-data.json";

export default async function ProjectPage() {
  const projectsData = data as Project[];

  return (
    <>
      <NavBar />
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 md:grid-cols-12">
          <section className="col-span-12 md:col-span-6">
            <span className="block font-handwritten text-6xl lowercase">
              showcase my
            </span>
            <h1 className="text-6xl lg:text-8xl  mb-5 font-secondary uppercase">
              Projects
            </h1>
          </section>
          <figure className="grid col-span-12 md:col-span-6 animate-fade-in justify-self-center lg:justify-self-end">
            <Image
              src="/images/projects.svg"
              alt="Illustration of a woman and about me text"
              width={400}
              height={400}
            />
          </figure>

          <ProjectsList projects={projectsData} />
        </main>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
