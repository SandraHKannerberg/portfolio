"use client";
import { Heart, Palette, PersonStanding, Rocket, Search } from "lucide-react";
import WavePulseAnimation from "../animations/wave-pulse";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  { icon: <Palette size={48} />, text: "Creative" },
  { icon: <Search size={48} />, text: "Eye for Details" },
  { icon: <Heart size={48} />, text: "Ambitious" },
  { icon: <PersonStanding size={48} />, text: "User Focus" },
  { icon: <Rocket size={48} />, text: "Curious" },
];

export default function KeyFeatures() {
  const isMobile = useIsMobile();
  return (
    // <ul className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
    <ul className="w-full flex justify-between items-center">
      {features.map((feature, index) => (
        <WavePulseAnimation
          key={index}
          delayIndex={index}
          className="flex gap-3 sm:gap-0 sm:flex-col sm:justify-center items-center"
        >
          <Popover>
            <PopoverTrigger
              aria-label={`Display icon for ${feature.text}`}
              className="cursor-pointer transition-transform duration-300 hover:scale-120"
            >
              {feature.icon}
            </PopoverTrigger>

            <PopoverContent
              className="text-center uppercase side-bottom"
              // side={isMobile ? "right" : "bottom"}
            >
              <p>{feature.text}</p>
            </PopoverContent>
          </Popover>
        </WavePulseAnimation>
      ))}
    </ul>
  );
}
