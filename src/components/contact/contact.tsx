import React from "react";
import ContactForm from "@/components/contact/contact-form";
import TextAnimWrapper from "../animations/text-anim-wrapper";
import ContactBtn from "./contact-btn";

const Contact = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 gap-[10rem]">
      <section className="flex flex-col gap-3 justify-center items-center md:items-start md:text-left col-span-2">
        <TextAnimWrapper>
          <p className="block font-handwritten text-6xl lg:text-[8rem] lowercase px-5">
            let&apos;s
          </p>
          <h2 className="text-7xl lg:text-[10rem] mb-5 font-secondary uppercase">
            Get in touch
          </h2>
        </TextAnimWrapper>

        <TextAnimWrapper>
          <p className="indent-12">
            Ready to built amazing things together? Reaching out to offer a new
            opportunity? Just want to say Hello? Feel free to fill out the form
            or send me an e-mail—let's connect today!
          </p>
        </TextAnimWrapper>

        <ContactBtn text="E-mail me" className="m-[2.5rem]" />
      </section>

      <section
        className="col-span-2 flex gap-3 justify-end items-end bg-foreground text-background shadow-lg rounded py-5 my-10 md:my-0 w-full md:w-[50vw] lg:w-[25vw]  justify-self-end"
        data-speed=".4"
      >
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
