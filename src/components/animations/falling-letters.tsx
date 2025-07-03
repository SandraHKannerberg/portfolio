"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fallingLettersAnimation } from "@/lib/utils/animations";

interface FallingLettersProps {
  letters: string[];
  className?: string;
}

const FallingLetters = ({ letters, className }: FallingLettersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      fallingLettersAnimation(containerRef.current);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className={`grid grid-cols-3 gap-5 lg:gap-10 col-span-2 md:col-span-1 z-5 ${className}`}
    >
      {letters.map((char, index) => (
        <div
          key={index}
          className="letter flex items-center justify-center font-secondary text-[clamp(4.5rem,8vw,20rem)] uppercase"
        >
          {char}
        </div>
      ))}
    </section>
  );
};

export default FallingLetters;
