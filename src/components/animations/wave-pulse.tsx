"use client";
import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

interface WavePulseAnimationProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delayIndex?: number;
  duration?: number;
}

export default function WavePulseAnimation({
  as: Component = "li",
  className,
  children,
  delayIndex = 0,
  duration = 2,
}: WavePulseAnimationProps) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      animate={{
        y: [0, -10, 0], // Up and down
        opacity: [1, 0.8, 1], // Pulse
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delayIndex * 0.3,
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
