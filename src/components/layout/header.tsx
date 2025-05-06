"use client";
import NavBar from "../navigation/navbar";
import FullscreenMenu from "../navigation/fullscreen-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="sticky top-0 px-5 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm flex justify-between items-center m-auto">
      <Link href="/">
        <h2 className="font-secondary text-5xl">sandra.</h2>
      </Link>

      {isMobile ? (
        <FullscreenMenu />
      ) : (
        <NavBar className="flex gap-10 uppercase p-3 font-secondary" />
      )}
    </header>
  );
};

export default Header;
