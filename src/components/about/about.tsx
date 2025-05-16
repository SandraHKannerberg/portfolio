import Image from "next/image";
import React from "react";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 my-40"
      >
        <section>
          <div className="flex flex-col col-span-2 mb-20">
            <TextAnimWrapper>
              <p className="block font-handwritten text-6xl lowercase indent-10">
                a little
              </p>
              <h2
                id="main-heading"
                className="text-8xl lg:text-9xl font-secondary uppercase"
              >
                About me
              </h2>
            </TextAnimWrapper>
          </div>

          <TextAnimWrapper>
            <p className="text-xl mb-10">
              I am a fullstack web developer with a frontend heart – passionate
              about creating intuitive, responsive interfaces while ensuring
              solid and scalable backend foundations. With a strong background
              in customer service, I bring a deeply rooted customer-centric
              mindset to every project. This experience has honed my
              communication skills, sharpened my focus on accessibility, and
              instilled in me the importance of intuitive user experiences.
            </p>

            <p className="text-xl">
              My fullstack development and design passion allows me to build
              projects from the ground up, transforming ideas into powerful and
              user-centric solutions. A true frontend addict who thrives on
              pixel perfection and modern UI/UX design, I build with the end
              user always in mind.
            </p>
          </TextAnimWrapper>
        </section>

        <figure className="fade-in grid col-span-2 justify-self-center items-end lg:justify-self-end w-80 h-65">
          <Image
            src="/images/work.svg"
            alt="Illustration of a businesswoman"
            width={400}
            height={400}
            priority
          />
        </figure>
      </section>
    </>
  );
};

export default About;
