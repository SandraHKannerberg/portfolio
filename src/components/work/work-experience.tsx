import React, { useRef } from "react";
import Image from "next/image";
import ExperienceTimeline from "@/components/work/experience-timeline";
import { animHeading } from "@/lib/utils/animations";
import { useGSAP } from "@gsap/react";

const WorkExperience = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      animHeading(".heading");
    },
    { scope: containerRef }
  );
  return (
    <section id="work" className="grid grid-cols-12">
      <figure className="fade-in grid col-span-12 md:col-span-6 my-20 justify-center items-center md:justify-self-start w-80 h-65">
        <Image
          src="/images/work.svg"
          alt="Illustration of a businesswoman"
          width={400}
          height={400}
          priority
        />
      </figure>
      <div
        ref={containerRef}
        className="col-span-12 md:col-span-6 flex flex-col justify-center"
      >
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-secondary uppercase heading">
          <span className="block font-handwritten text-6xl lowercase heading">
            work
          </span>
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <section className="col-span-12 my-16">
        <h3 className="pb-5 text-lg uppercase sr-only">Experience timeline</h3>
        <ExperienceTimeline />
      </section>
    </section>
  );
};

export default WorkExperience;
