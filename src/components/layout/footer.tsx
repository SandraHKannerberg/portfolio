import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ContactLinks from "../contact/contact-links";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-30 mb-5 px-5">
      <section className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <h2 className="font-secondary text-5xl">sandra.</h2>
          <Link href="mailto:sandra.hkannerberg@gmail.com">
            <Button
              variant="outline"
              className="rounded-full p-3 uppercase flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-background"
            >
              Get in touch
            </Button>
          </Link>
        </div>
        <ContactLinks />
      </section>

      <small className="text-center text-xs mt-5">
        &copy; {new Date().getFullYear()} - Sandra Höst Kannerberg - All rights
        reserved
      </small>
    </footer>
  );
};

export default Footer;
