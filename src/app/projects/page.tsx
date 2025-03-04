import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";
import ProjectsList from "@/components/ui/projects-list";
import { Project } from "@/lib/interfaces";
import { fetchProjects } from "@/lib/actions";
import Footer from "@/components/ui/footer";

export default async function ProjectPage() {
  // Fetch project data server-side
  const projects: Project[] = await fetchProjects();

  return (
    <>
      <NavBar />
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 md:grid-cols-12">
          <section className="col-span-12 md:col-span-6">
            <span className="block font-handwritten text-6xl lowercase animate-slide-in-left">
              showcase my
            </span>
            <h1 className="text-6xl lg:text-8xl  mb-5 font-secondary uppercase animate-slide-in-right">
              Projects
            </h1>
          </section>
          <figure className="grid col-span-12 md:col-span-6 animate-fade-in justify-self-center lg:justify-self-end">
            <Image
              src="/projects.svg"
              alt="Illustration of a woman and about me text"
              width={400}
              height={400}
            />
          </figure>

          <ProjectsList projects={projects} />
        </main>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
