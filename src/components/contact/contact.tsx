import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description:
    "Get in touch with Sandra Höst Kannerberg. Reach out for inquiries, feedback, or collaboration opportunities.",
};

const Contact = () => {
  return (
    <section id="contact" className="fade-in grid md:grid-cols-2">
      <section className="flex flex-col gap-3 justify-center items-center md:items-start text-center md:text-left">
        <div>
          <span className="block font-handwritten text-6xl lowercase">
            let&apos;s
          </span>
          <h2 className="text-7xl lg:text-9xl mb-5 font-secondary uppercase">
            Get in touch
          </h2>
        </div>
        <p>Together we can build amazing things</p>

        <a
          className="flex items-center gap-3 hover:font-bold"
          href="mailto:sandra.hkannerberg@gmail.com"
        >
          <Mail />
          sandra.hkannerberg@gmail.com
        </a>
      </section>

      <section className="flex flex-col gap-3 justify-center items-center bg-foreground text-background shadow-lg rounded py-5 my-10 md:my-0">
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
