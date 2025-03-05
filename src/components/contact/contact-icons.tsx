import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <section className="flex justify-center items-center gap-3 w-[fit-content]">
      <a
        href="https://github.com/SandraHKannerberg"
        target="_blank"
        aria-label="Link to GitHub"
      >
        <FaGithub className="text-5xl text-primary hover:text-secondary hover:outline-2 outline-secondary rounded-full outline-offset-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/sandra-h%C3%B6st-kannerberg-086a9b7b/"
        target="_blank"
        aria-label="Link to LinkedIn"
      >
        <FaLinkedin className="text-5xl text-primary hover:text-secondary hover:outline-2 outline-secondary outline-offset-4" />
      </a>
    </section>
  );
}
