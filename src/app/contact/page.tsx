import React from "react";
import { Metadata } from "next";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ContactIcons from "@/components/contact/contact-icons";

export const metadata: Metadata = {
  title: "Portfolio - Contact",
  description:
    "Get in touch with Sandra Höst Kannerberg. Reach out for inquiries, feedback, or collaboration opportunities. I'm here to help and connect!",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <MaxWidthWrapper>
        <main className="h-[85vh] my-auto grid md:grid-cols-2">
          <section className="flex flex-col justify-center">
            <span className="block font-handwritten text-6xl lowercase">
              let's
            </span>
            <h1 className="text-7xl lg:text-9xl mb-5 font-secondary uppercase">
              Get in touch
            </h1>
          </section>

          {/* TODO: update to a contact form */}
          <section className="flex flex-col justify-center items-center gap-5 bg-foreground text-background">
            <div className="text-center w-[fit-content] text-lg">
              <p className="uppercase mb-0">Email</p>
              <a
                className="border-b-2 border-dashed border-background"
                href="mailto:sandra.hkannerberg@gmail.com"
              >
                sandra.hkannerberg@gmail.com
              </a>
            </div>

            <ContactIcons></ContactIcons>
          </section>
        </main>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
}
