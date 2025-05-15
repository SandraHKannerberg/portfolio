import Image from "next/image";
import React from "react";
import TextAnimWrapper from "../animations/text-anim-wrapper";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 my-20"
      >
        <TextAnimWrapper>
          <div className="flex flex-col col-span-2">
            <p className="block font-handwritten text-6xl lowercase split-line">
              a little
            </p>
            <h2
              id="main-heading"
              className="text-8xl lg:text-[10rem] font-secondary uppercase split-line"
            >
              About me
            </h2>
          </div>
        </TextAnimWrapper>
        <section className="col-span-2">
          <TextAnimWrapper>
            <p className="text-xl mb-5 md:indent-10 lg:indent-25">
              I am a fullstack web developer with a frontend heart – passionate
              about creating intuitive, responsive interfaces while ensuring
              solid and scalable backend foundations.
            </p>
            <p className="text-xl mb-5 md:indent-10 lg:indent-25">
              With a strong background in customer service, I bring a deeply
              rooted customer-centric mindset to every project. This experience
              has honed my communication skills, sharpened my focus on
              accessibility, and instilled in me the importance of intuitive
              user experiences.
            </p>
            <p className="text-xl md:indent-10 lg:indent-25">
              A true frontend addict who thrives on pixel perfection and modern
              UI/UX design, I build with the end user always in mind.
            </p>
          </TextAnimWrapper>
        </section>
        {/* <figure className="fade-in grid col-span-2 md:col-span-6 justify-self-center items-end lg:justify-self-start w-80 h-65">
          <Image
            src="/images/work.svg"
            alt="Illustration of a businesswoman"
            width={400}
            height={400}
            priority
          />
        </figure> */}
      </section>
    </>
  );
};

export default About;
