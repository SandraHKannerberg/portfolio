import Link from "next/link";
import FullScreenMenu from "./fullscreen-menu";

export default function NavBar() {
  return (
    <header className="p-3 sticky top-0 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm mb-5">
      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center gap-10 uppercase p-3">
        <Link href="/" className="hover:underline ">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/work" className="hover:underline">
          Work
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden flex items-center justify-end">
        <FullScreenMenu></FullScreenMenu>
      </nav>
    </header>
  );
}
