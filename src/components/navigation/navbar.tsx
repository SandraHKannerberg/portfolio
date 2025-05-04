"use client";

import TransitionLink from "./transition-link";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center gap-10 uppercase p-3">
        <TransitionLink href="/" label="Home"></TransitionLink>
        <TransitionLink href="/about" label="About"></TransitionLink>
        <TransitionLink href="/work" label="Work"></TransitionLink>
        <TransitionLink href="/projects" label="Projects"></TransitionLink>
        <TransitionLink href="/contact" label="Contact"></TransitionLink>
      </nav>
    </>
  );
}
