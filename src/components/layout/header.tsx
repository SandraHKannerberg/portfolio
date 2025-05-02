"use client";
import NavBar from "../navigation/navbar";
import FullscreenMenu from "../navigation/fullscreen-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="p-3 sticky top-0 bg-background/75 z-[100] backdrop-blur-lg transition-all shadow-sm mb-5">
      {isMobile ? <FullscreenMenu></FullscreenMenu> : <NavBar></NavBar>}
    </header>
  );
};

export default Header;
