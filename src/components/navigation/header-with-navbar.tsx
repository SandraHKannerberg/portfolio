"use client";
import NavBar from "./navbar";
import FullscreenMenu from "./fullscreen-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeaderWithNavBar() {
  const isMobile = useIsMobile();

  return (
    <header className="p-3 sticky top-0 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm mb-5">
      {isMobile ? <FullscreenMenu></FullscreenMenu> : <NavBar></NavBar>}
    </header>
  );
}
