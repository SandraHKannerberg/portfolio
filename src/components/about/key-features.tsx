"use client";
import { Heart, Palette, PersonStanding, Rocket, Search } from "lucide-react";
import WavePulseAnimation from "../animations/wave-pulse";

const highlights = [
  { icon: <Palette size={48} />, text: "Creative" },
  { icon: <Search size={48} />, text: "Details" },
  { icon: <Heart size={48} />, text: "Ambitious" },
  { icon: <PersonStanding size={48} />, text: "User Focus" },
  { icon: <Rocket size={48} />, text: "Curious" },
];

export default function KeyFeatures() {
  return (
    <ul className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
      {highlights.map((highlight, index) => (
        <WavePulseAnimation
          key={index}
          delayIndex={index}
          className="flex gap-3 sm:gap-0 sm:flex-col sm:justify-center items-center"
        >
          {highlight.icon}
          <p>{highlight.text}</p>
        </WavePulseAnimation>
      ))}
    </ul>
  );
}
