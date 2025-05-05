"use client";

import { Button } from "@/components/ui/button";
import RotatingTextCircle from "../animations/rotating-text-circle";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const ScrollDown = () => {
  return (
    <div className="relative circle flex justify-center items-center">
      <Link href="#about" className="absolute">
        <Button
          variant="default"
          className="w-25 h-25 rounded-full uppercase cursor-pointer shadow hover:bg-secondary hover:text-background hover:shadow-md z-5 flex justify-center items-center"
        >
          <ArrowDown />
        </Button>
      </Link>
      <RotatingTextCircle text="Scroll Down -- Scroll Down -- Scroll Down" />
    </div>
  );
};

export default ScrollDown;
