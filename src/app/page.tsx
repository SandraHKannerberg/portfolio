"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import FullscreenMenu from "@/components/navigation/fullscreen-menu";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function HomePage() {
  // Smooth scrolling to AboutPage
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    router.prefetch("/about"); // Preload AboutPage
  }, [router]);

  // Handle scroll on desktop-device
  const handleScroll = () => {
    if (!scrolling) {
      setScrolling(true);
      setTimeout(() => {
        router.push("/about");
      }, 500);
    }
  };

  // Handle touch on mobile-device
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (deltaY > 50) {
      // Swipe up
      handleScroll();
    }
  };

  return (
    <motion.div
      className="relative w-full h-screen"
      animate={
        scrolling ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 0.7 }}
      onWheel={handleScroll} // Desktop
      onTouchStart={handleTouchStart} // Mobile
      onTouchMove={handleTouchMove} // Mobile
    >
      {/* Hero section */}
      <header className="flex flex-col items-center justify-center relative w-screen h-screen">
        <div className="z-1 absolute top-0 right-0 p-5">
          <FullscreenMenu></FullscreenMenu>
        </div>

        <Image
          src="/images/background.jpg"
          alt="Background image showing crumpled paper"
          fill
          className="bg-cover bg-center"
          priority
        />
        <section className="relative w-full z-1 flex flex-col items-center justify-center">
          <h1 className="font-handwritten">
            <TypeAnimation
              sequence={[
                "a frontend",
                1000,
                "a fullstack",
                1000,
                "a creative",
                1000,
              ]}
              wrapper="span"
              className="block text-5xl md:text-8xl p-5"
              speed={50}
              repeat={Infinity}
            />
            <span className="uppercase text-6xl md:text-9xl font-secondary">
              Portfolio
            </span>
          </h1>
        </section>

        <section className="absolute bottom-10 flex flex-col justify-center items-center">
          <small className="absolute bottom-15">Scroll</small>
          <div className="h-12 w-12 flex justify-center items-center rounded-full shadow-md animate-bounce bg-muted">
            <ArrowDown />
          </div>
        </section>
      </header>
    </motion.div>
  );
}
