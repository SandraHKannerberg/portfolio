"use client";

import Link from "next/link";
import { scrollToSection } from "@/lib/utils/animations";
import { usePathname, useRouter } from "next/navigation";

interface NavBarProps {
  className?: string;
}

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const NavBar = ({ className }: NavBarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string, href: string) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      sessionStorage.setItem("scrollTo", sectionId);
      router.push("/");
    }
  };

  return (
    <>
      <nav>
        {/* <TransitionLink href="/" label="Home"></TransitionLink> */}

        <ul className={className}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.id, link.href)}
                className={`relative pb-1 transition hover:font-bold ${
                  pathname === link.id
                    ? "font-bold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-primary"
                    : "after:w-0 after:bg-primary hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
