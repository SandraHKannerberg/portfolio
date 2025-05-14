import React from "react";
import ContactLinks from "../contact/contact-links";
import ContactBtn from "../contact/contact-btn";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-30 mb-5 px-5">
      <section className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <h2 className="font-secondary text-5xl">sandra.</h2>
          <ContactBtn text="Get in touch" />
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
