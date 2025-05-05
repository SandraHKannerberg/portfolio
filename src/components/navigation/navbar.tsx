"use client";

import Link from "next/link";
import TransitionLink from "./transition-link";

const NavBar = () => {
  return (
    <>
      <nav className="flex gap-10 uppercase p-3 font-secondary">
        <TransitionLink href="/" label="Home"></TransitionLink>
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>

        <Link href="#contact">Contact</Link>
      </nav>
    </>
  );
};

export default NavBar;

/* <TransitionLink href="/contact" label="Contact"></TransitionLink> */
