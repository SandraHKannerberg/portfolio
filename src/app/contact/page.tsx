import React from "react";
import { Metadata } from "next";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import Footer from "@/components/ui/footer";
import ContactIcons from "@/components/contact/contact-icons";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description:
    "Get in touch with Sandra Höst Kannerberg. Reach out for inquiries, feedback, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <MaxWidthWrapper>
        <main className="my-[10vh] grid md:grid-cols-2">
          <section className="flex flex-col gap-3 justify-center items-center md:items-start text-center md:text-left">
            <div>
              <span className="block font-handwritten text-6xl lowercase">
                let&apos;s
              </span>
              <h1 className="text-7xl lg:text-9xl mb-5 font-secondary uppercase">
                Get in touch
              </h1>
            </div>

            <ContactIcons icons={["github", "linkedin"]} className="text-5xl" />
            <a
              className="border-b-2 border-dashed border-foreground hover:font-bold"
              href="mailto:sandra.hkannerberg@gmail.com"
            >
              sandra.hkannerberg@gmail.com
            </a>
          </section>

          <section className="flex flex-col gap-3 justify-center items-center bg-foreground text-background shadow-lg rounded py-5 my-10 md:my-0">
            <div className="text-center">
              <h2 className="text-lg uppercase">Let&apos;s work together!</h2>
              <p>
                Feel free to send me a message, e-mail or contact me on LinkedIn
              </p>
            </div>
            <ContactForm />
          </section>
        </main>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
}
