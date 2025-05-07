// Animations using GSAP
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

/**
 * Soft scroll when click on i link in the navbar
 * @param targetId section id
 * @param offset value in pixels, for example navbar hight
 */
export const scrollToSection = (targetId: string, offset: number = 100) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${targetId}`,
      offsetY: offset,
    },
    ease: "power2.inOut",
  });
};

// Animation for letters - bounce one by one in random order
export const fallingLettersAnimation = (target: Element): Promise<void> => {
  return new Promise((resolve) => {
    const letters = target.querySelectorAll(".letter");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      onComplete: () => resolve(),
    });

    tl.fromTo(
      letters,
      {
        y: () => gsap.utils.random(-300, -100),
        x: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-45, 45),
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 3,
        ease: "bounce.out",
        stagger: {
          each: 0.2,
          from: "random",
        },
      }
    );
  });
};

// Fade in sections content when scrolling
export const fadeInOnScroll = (selector: string) => {
  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

// Drop one by one
export const dropOneByOne = (selector: string) => {
  const targets = gsap.utils.toArray<HTMLElement>(selector);

  targets.forEach((container) => {
    const items = container.querySelectorAll<HTMLElement>(".item-to-drop");

    if (items.length === 0) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: -50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      }
    );
  });
};
