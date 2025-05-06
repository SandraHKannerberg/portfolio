// Animations using GSAP

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

/**
 * Soft scroll when click on i link in the navbar
 * @param targetId section id
 * @param offset value in pixels, for example navbar hight
 */
export const scrollToSection = (targetId: string, offset: number = 70) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${targetId}`,
      offsetY: offset,
    },
    ease: "power2.inOut",
  });
};
