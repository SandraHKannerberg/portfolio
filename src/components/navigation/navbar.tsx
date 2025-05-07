"use client";

import Link from "next/link";
import { scrollToSection } from "@/lib/utils/animations";
import { usePathname, useRouter } from "next/navigation";
import { useScrollSpy } from "@/lib/utils/use-scroll-spy";

interface NavBarProps {
  className?: string;
  onLinkClick?: () => void;
}

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

const NavBar = ({ className, onLinkClick }: NavBarProps) => {
  const activeId = useScrollSpy(
    navLinks.map((l) => l.id),
    100
  );
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
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
        <ul className={className}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                data-id={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                  onLinkClick?.(); // Close DrawerMenu if this prop exists
                }}
                className={`relative pb-1 transition hover:font-bold ${
                  activeId === link.id
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
