"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Menu */}
      <nav className="flex justify-center gap-10 uppercase p-3">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Work", path: "/work" },
          { name: "Projects", path: "/projects" },
          { name: "Contact", path: "/contact" },
        ].map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            scroll={false}
            className={`relative pb-1 transition hover:underline hover:font-bold ${
              pathname === path
                ? "font-bold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-primary"
                : "after:w-0 after:bg-primary hover:after:w-full"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
}
