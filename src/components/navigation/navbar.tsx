import Link from "next/link";
import FullScreenMenu from "./fullscreen-menu";

export default function NavBar() {
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center gap-10 uppercase p-3">
        <Link href="/" className="hover:underline" scroll={false}>
          Home
        </Link>
        <Link href="/about" className="hover:underline" scroll={false}>
          About
        </Link>
        <Link href="/work" className="hover:underline" scroll={false}>
          Work
        </Link>
        <Link href="/projects" className="hover:underline" scroll={false}>
          Projects
        </Link>
        <Link href="/contact" className="hover:underline" scroll={false}>
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden flex items-center justify-end">
        <FullScreenMenu></FullScreenMenu>
      </nav>
    </>
  );
}
