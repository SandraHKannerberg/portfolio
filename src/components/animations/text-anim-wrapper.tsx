"use client";
import React, {
  ReactElement,
  cloneElement,
  isValidElement,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// gsap plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

type SplitTextInstance = {
  lines: Element[];
  words: Element[];
  chars: Element[];
  revert: () => void;
};

interface TextAnimWrapperProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

const toHTMLElementArray = (els: Element[]): HTMLElement[] =>
  els.filter((el): el is HTMLElement => el instanceof HTMLElement);

export default function TextAnimWrapper({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitTextInstance[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLElement[] = [];

      if (containerRef.current) {
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children).filter(
            (el): el is HTMLElement => el instanceof HTMLElement
          );
        } else {
          elements = [containerRef.current];
        }
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        const linesAsHTMLElements = toHTMLElementArray(split.lines);

        if (textIndent === "0px") {
          if (linesAsHTMLElements.length > 0) {
            linesAsHTMLElements[0].style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...linesAsHTMLElements);
      });
      // Staring position
      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      // cleanup function
      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  // If children = 1 element set ref to that element
  if (React.Children.count(children) === 1 && isValidElement(children)) {
    const child = children as ReactElement<any, any>;

    return cloneElement(child, {
      ref: containerRef,
    });
  }

  // If children = more than 1 element -> wrap them in i div and set ref to the div-element
  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
