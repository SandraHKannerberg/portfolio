import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import HeaderWithNavBar from "@/components/navigation/header-with-navbar";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import CvBtn from "@/components/contact/cv-btn";
import TimeLine from "@/components/work/time-line";
import Skills from "@/components/work/skills";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Portfolio - Work",
  description:
    "Discover Sandra Höst Kannerberg's professional journey, including her work experience and educational background. Learn about the skills and expertise gained throughout her career.",
};

export default function WorkPage() {
  return (
    <>
      <HeaderWithNavBar />
      <MaxWidthWrapper>
        <main className="grid grid-cols-12">
          <section className="col-span-12 md:col-span-6">
            <span className="block font-handwritten text-6xl lowercase">
              work
            </span>
            <h1 className="text-6xl lg:text-8xl mb-5 font-secondary uppercase">
              Experience
            </h1>

            {/* Cta-btn: download cv */}
            <CvBtn></CvBtn>
          </section>
          <figure className="grid col-span-12 md:col-span-6 animate-fade-in justify-self-center lg:justify-self-end w-80 h-80">
            <Image
              src="/images/work.svg"
              alt="Illustration of a businesswoman"
              width={400}
              height={400}
              priority
            />
          </figure>
          {/* TODO: ADD A SECTION FOR HIGHLIGHTS ?
   
          {/* Timeline */}
          <section className="col-span-12 my-16">
            <h2 className="pb-5 text-lg uppercase sr-only">
              Experience timeline
            </h2>
            <TimeLine />
          </section>

          {/* Skills */}
          <section className="col-span-12 my-16">
            <h2 className="pb-5 text-lg uppercase">My Tech Skills</h2>
            <Skills />
          </section>
        </main>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
