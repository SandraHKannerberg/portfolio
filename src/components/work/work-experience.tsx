import React, { useRef } from "react";
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
      <div
        ref={containerRef}
        className="col-span-12 flex flex-col justify-center items-center md:items-end"
      >
        <p className="block font-handwritten text-6xl lowercase heading">
          work
        </p>
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-secondary uppercase heading">
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
