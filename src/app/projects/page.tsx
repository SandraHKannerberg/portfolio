import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";
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
            <a href="https://github.com/SandraHKannerberg/portfolio">
              <Button className="rounded shadow uppercase cursor-pointer hover:bg-secondary hover:text-background">
                GitHub-repo for this Portfolio
              </Button>
            </a>
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
