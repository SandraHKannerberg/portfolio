import React, { useRef } from "react";
import ContactForm from "@/components/contact/contact-form";
import { Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { splitTextByLines } from "@/lib/utils/animations";
import Link from "next/link";

const Contact = () => {
  const textAnimationRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      splitTextByLines(".lines");
    },
    { scope: textAnimationRef }
  );

  return (
    <section id="contact" className="fade-in grid md:grid-cols-2">
      <section
        ref={textAnimationRef}
        className="flex flex-col gap-3 justify-center items-center md:items-start text-center md:text-left"
      >
        <div className="split-heading">
          <span className="block font-handwritten text-6xl lowercase lines">
            let&apos;s
          </span>
          <h2 className="text-7xl lg:text-9xl mb-5 font-secondary uppercase lines">
            Get in touch
          </h2>
        </div>
        <p className="lines">Together we can build amazing things</p>

        <Link
          className="flex items-center gap-3 hover:font-bold"
          href="mailto:sandra.hkannerberg@gmail.com"
        >
          <Mail />
          sandra.hkannerberg@gmail.com
        </Link>
      </section>

      <section className="flex flex-col gap-3 justify-center items-center bg-foreground text-background shadow-lg rounded py-5 my-10 md:my-0">
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
