"use client";
import NavBar from "../navigation/navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import DrawerMenu from "../navigation/drawer-menu";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="sticky top-0 px-5 py-3 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm flex justify-between items-center m-auto">
      <h2 className="font-secondary text-5xl">
        <Link href="/">sandra.</Link>
      </h2>

      {isMobile ? (
        <DrawerMenu />
      ) : (
        <NavBar className="flex gap-10 uppercase p-3 font-secondary" />
      )}
    </header>
  );
};

export default Header;
