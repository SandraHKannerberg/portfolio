import React from "react";
import { TypeAnimation } from "react-type-animation";
import FallingLetters from "../animations/falling-letters";
import ScrollDown from "../ui/scroll-down";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative grid grid-cols-2 items-center my-10 lg:my-0"
      >
        <section className="col-span-2 text-center md:col-span-1">
          <h1 className="text-xl">Hi & welcome, I&apos;m Sandra</h1>
          <TypeAnimation
            sequence={[
              "creative coder",
              1000,
              "frontend addict",
              1000,
              "strong commitment",
              1000,
              "design passion",
              1000,
              "curious",
              1000,
              "eye for details",
              1000,
              "problem solver",
              1000,
            ]}
            wrapper="span"
            className="block text-5xl md:text-7xl p-5 font-handwritten"
            speed={40}
            repeat={Infinity}
          />
        </section>

        <FallingLetters
          letters={["p", "o", "r", "t", "f", "o", "l", "i", "o"]}
        />
        <div className="absolute -bottom-30 lg:-bottom-10">
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Hero;
