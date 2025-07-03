import React, { useRef } from "react";
import TextAnimWrapper from "../animations/text-anim-wrapper";
import { useGSAP } from "@gsap/react";
import { animHeading } from "@/lib/utils/animations";

const About = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      animHeading(".heading");
    },
    { scope: containerRef }
  );
  return (
    <>
      <section id="about" className="grid grid-cols-4 justify-between my-40">
        <div
          ref={containerRef}
          className="flex flex-col col-span-4 mb-10 md:mb-20 justify-center"
        >
          <h2 className="text-6xl lg:text-9xl font-secondary uppercase heading">
            <span className="block font-handwritten text-6xl lowercase heading">
              a little
            </span>
            About me
          </h2>
        </div>

        <section className="col-span-4 md:col-start-2 md:col-end-5">
          <TextAnimWrapper>
            <p className="text-xl mb-10">
              I&apos;m a fullstack web developer with a frontend heart –
              passionate about creating intuitive, responsive interfaces while
              ensuring solid and scalable backend foundations. With a strong
              background in customer service, I bring a deeply rooted
              customer-centric mindset to every project. This experience has
              honed my communication skills, sharpened my focus on
              accessibility, and instilled in me the importance of intuitive
              user experiences.
            </p>

            <p className="text-xl">
              My fullstack development knowledge and design passion allows me to
              build projects from the ground up, transforming ideas into
              powerful and user-centric solutions. A true frontend addict who
              thrives on pixel perfection and modern UI/UX design, I build with
              the end user always in mind.
            </p>
          </TextAnimWrapper>
        </section>
      </section>
    </>
  );
};

export default About;
