import React from "react";

const HeroIntro = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Left side block */}
      <div className="anim-block absolute left-0 top-0 w-1/2 h-full z-[200] overflow-hidden bg-light">
        <div className="anim-word flex h-full justify-end items-center pr-2 md:pr-8 overflow-hidden">
          <h2
            className="text-6xl font-handwritten translate-y-[-120%] opacity-0"
            id="left-word"
          >
            port
          </h2>
        </div>
      </div>

      {/* Right side block*/}
      <div className="anim-block absolute right-0 top-0 w-1/2 h-full z-[200] overflow-hidden bg-light">
        <div className="anim-word flex h-full justify-start items-center pl-2 md:pl-8 overflow-hidden">
          <h2
            className="text-6xl font-secondary uppercase translate-y-[120%] opacity-0"
            id="right-word"
          >
            folio
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="divider absolute top-0 left-1/2 bg-primary w-[3px] h-full z-[300] opacity-0" />
    </section>
  );
};

export default HeroIntro;
