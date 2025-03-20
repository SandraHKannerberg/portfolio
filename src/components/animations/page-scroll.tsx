"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

interface PageScrollProps {
  children: ReactNode;
  className?: string;
}

export default function PageScroll({
  children,
  className = "",
}: PageScrollProps) {
  // Smooth scrolling to AboutPage
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    router.prefetch("/about"); // Preload next page
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

  // Handle button click if scroll not possible
  const handleButtonClick = () => {
    setScrolling(true);
    setTimeout(() => {
      router.push("/about");
    }, 500);
  };

  return (
    <>
      <motion.div
        className={`relative w-full min-h-[300px] will-change-transform ${className}`}
        animate={
          scrolling ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
        onWheel={handleScroll} // Desktop
        onTouchStart={handleTouchStart} // Mobile
        onTouchMove={handleTouchMove} // Mobile
      >
        {children}
      </motion.div>
      <Button
        onClick={handleButtonClick}
        className="absolute bottom-23 left-1/2 transform -translate-x-1/2 px-4 py-2 h-12 w-12 flex justify-center items-center rounded-full shadow-md animate-bounce bg-muted hover:bg-muted hover:border hover:border-2-foreground cursor-pointer"
      >
        <ArrowDown />
      </Button>
    </>
  );
}
