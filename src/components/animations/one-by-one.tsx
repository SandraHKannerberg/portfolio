"use client";
import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

interface OneByOneAnimationProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delayIndex?: number;
  duration?: number;
}

export default function OneByOneAnimation({
  as: Component = "div",
  className,
  children,
  delayIndex = 0,
  duration = 0.5,
}: OneByOneAnimationProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      initial={{ opacity: 0, y: -100, scale: 0.9 }} // Start above the screen
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Fall down effect
      viewport={{ once: true, amount: 0.2 }} // Starts when 20% are shown
      transition={{ duration, delay: delayIndex * 0.2 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
