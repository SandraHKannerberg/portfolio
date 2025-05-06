import React from "react";
import { TypeAnimation } from "react-type-animation";
import FallingLetters from "../animations/falling-letters";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative grid grid-cols-2 items-center max-h-screen py-10"
    >
      <section className="col-span-2 text-center md:col-span-1 md:text-left">
        <h1 className="text-2xl md:text-3xl">Hello & welcome, I am Sandra</h1>
        <TypeAnimation
          sequence={[
            "creative coder",
            1000,
            "frontend addict",
            1000,
            "strong commitment",
            1000,
            "curious",
            1000,
            "eye for details",
            1000,
            "problem solver",
            1000,
          ]}
          wrapper="span"
          className="block text-5xl md:text-8xl p-5 font-handwritten"
          speed={40}
          repeat={Infinity}
        />
      </section>

      <FallingLetters letters={["p", "o", "r", "t", "f", "o", "l", "i", "o"]} />
    </section>
  );
};

export default Hero;
