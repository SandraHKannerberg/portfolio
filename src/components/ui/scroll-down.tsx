"use client";

import { Button } from "@/components/ui/button";
import RotatingTextCircle from "../animations/rotating-text-circle";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const ScrollDown = ({ className }: { className?: string }) => {
  return (
    <div
      className={`relative flex justify-center items-center w-fit ${className} `}
    >
      <Link
        href="#about"
        className="absolute"
        aria-label="Scroll down for more content"
      >
        <Button
          variant="default"
          className="w-15 h-15 rounded-full uppercase cursor-pointer shadow hover:bg-secondary hover:text-background hover:shadow-md z-5 flex justify-center items-center"
        >
          <p className="sr-only">Scroll down</p>
          <ArrowDown />
        </Button>
      </Link>
      <RotatingTextCircle
        text="Scroll down ---- Explore my portfolio ---- Scroll down --"
        width="150"
        height="150"
      />
    </div>
  );
};

export default ScrollDown;
