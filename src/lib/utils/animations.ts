// Animations using GSAP
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// gsap plugins
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

/**
 * Soft scroll when click on i link in the navbar
 * @param targetId = section id
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
  gsap.from(selector, {
    scale: 0,
    duration: 1,
    repeat: 0,
    ease: "power2.inOut",
    yoyo: true,
    stagger: {
      each: 0.2,
    },
    scrollTrigger: {
      trigger: selector,
      start: "bottom 80%",
      toggleActions: "play none none reverse",
    },
  });
};

// Parallax effect on scroll
export const parallaxScroll = (
  parallaxItemRef: HTMLElement,
  textRef: HTMLElement,
  parallaxContainerRef: HTMLElement
) => {
  // Parallax scroll for form
  gsap.to(parallaxItemRef, {
    y: () => {
      // Dynamic value - scroll upp to this ref - then stop
      const textBox = textRef?.getBoundingClientRect().height || 0;
      return -textBox;
    },
    ease: "none",
    scrollTrigger: {
      trigger: parallaxContainerRef,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const animHeading = (selector: string) => {
  gsap.set(selector, { opacity: 1 });

  let split = SplitText.create(".heading", {
    type: "chars",
    charsClass: "char++",
    smartWrap: true,
  });

  gsap.from(split.chars, {
    y: 20,
    autoAlpha: 0,
    stagger: 0.05,
    duration: 2,
    ease: "bounce",
    opacity: 0,
    scrollTrigger: {
      trigger: selector,
      start: "bottom 80%",
      toggleActions: "play none none reverse",
    },
  });
};
