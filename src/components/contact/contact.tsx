import React from "react";
import ContactForm from "@/components/contact/contact-form";
import TextAnimWrapper from "../animations/text-anim-wrapper";
import ContactBtn from "./contact-btn";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animHeading } from "@/lib/utils/animations";

const Contact = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      animHeading(".heading");
    },
    { scope: containerRef }
  );

  return (
    <section id="contact" className="grid md:grid-cols-2 justify-center">
      <section className="flex flex-col gap-3 justify-center items-center col-span-2">
        <div ref={containerRef} className="flex flex-col text-center">
          <h2 className="text-8xl lg:text-9xl mb-5 font-secondary uppercase leading-snug heading">
            <span className="block font-handwritten text-6xl lowercase heading">
              let&apos;s
            </span>
            Get in touch
          </h2>
        </div>

        <TextAnimWrapper>
          <p className="text-center">
            Ready to built amazing things together? Reaching out to offer a new
            opportunity? Just want to say Hello? Feel free to fill out the form
            or send me an e-mail—let&apos;s connect today!
          </p>
        </TextAnimWrapper>
        <ContactBtn text="E-mail me" className="fade-in m-[2.5rem]" />
      </section>

      <section className="fade-in col-span-2 flex flex-col gap-3 justify-center items-center bg-background border-1 border-foreground shadow-lg rounded py-5 md:my-0 h-fit w-full md:w-[50vw] mx-auto">
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
