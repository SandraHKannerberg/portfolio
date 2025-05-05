import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import ContactLinks from "../contact/contact-links";

export default function footer() {
  return (
    <footer className="flex flex-col mt-10 mb-5 px-5">
      <section className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="font-secondary text-5xl">sandra.</p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="rounded-full uppercase flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-background"
            >
              Get in touch
            </Button>
          </Link>
        </div>
        <ContactLinks></ContactLinks>
      </section>

      <small className="text-center text-xs mt-5">
        Copyright &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
}
