import React from "react";
import ExperienceTimeline from "@/components/work/experience-timeline";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const WorkExperience = () => {
  return (
    <section id="work" className="grid grid-cols-12">
      <div className="col-span-12 flex flex-col justify-end items-end">
        <TextAnimWrapper>
          <p className="block font-handwritten text-6xl lowercase indent-10">
            work
          </p>
          <h2 className="text-6xl lg:text-[10rem] font-secondary uppercase">
            Experience
          </h2>
        </TextAnimWrapper>
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
