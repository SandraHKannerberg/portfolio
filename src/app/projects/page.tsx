import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Button } from "@/components/ui/button";
import ProjectsList from "@/components/projects/projects-list";
import { Project } from "@/lib/interfaces";
import Footer from "@/components/ui/footer";

import data from "../../../public/data/projects-data.json";

export const metadata: Metadata = {
  title: "Portfolio - Projects",
  description:
    "Explore a curated selection of projects created by Sandra Höst Kannerberg, see how I bring ideas to life through design and development.",
};

export default async function ProjectsPage() {
  const projectsData = data as Project[];

  return (
    <>
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 md:grid-cols-12">
          <section className="col-span-12 sm:col-span-6">
            <span className="block font-handwritten text-6xl lowercase">
              selected
            </span>
            <h1 className="text-6xl lg:text-8xl mb-5 font-secondary uppercase">
              Projects
            </h1>
            <a href="https://github.com/SandraHKannerberg" target="_blank">
              <Button className="rounded shadow uppercase mt-5 mb-10 cursor-pointer hover:bg-secondary hover:text-background">
                Follow me on GitHub
              </Button>
            </a>
          </section>
          <figure className="grid col-span-12 sm:col-span-6 animate-fade-in justify-self-center lg:justify-self-end h-80 w-90 sm:w-100">
            <Image
              src="/images/projects.svg"
              alt="Illustration of a woman and about me text"
              width={500}
              height={400}
              priority
            />
          </figure>

          <ProjectsList projects={projectsData} />
        </main>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
