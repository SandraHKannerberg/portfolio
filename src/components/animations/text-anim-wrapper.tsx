"use client";
import React, {
  ReactElement,
  cloneElement,
  isValidElement,
  useRef,
  JSX,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// gsap plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface SplitTextInstance {
  lines: Element[];
  words: Element[];
  chars: Element[];
  revert: () => void;
}

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

        // Create the SplitText object
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          autoSplit: true, // Important for responsive design
        });

        // Add split obj to the splitRef array
        splitRef.current.push(split);

        const linesAsHTMLElements = toHTMLElementArray(split.lines);

        lines.current.push(...linesAsHTMLElements);
      });
      // Staring position
      gsap.set(lines.current, { y: "100%" });

      // Animation settings
      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: delay,
      };

      // Scroll-trigger config
      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
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

  // Important to safe and correct set ref-attribute to a child, BUT just if it is a HTML-element! Can't be a string for example
  // If children = 1 element -> set ref to the that element
  const isSingleHtmlElement =
    React.Children.count(children) === 1 &&
    isValidElement(children) &&
    typeof children.type === "string";

  if (isSingleHtmlElement) {
    type HtmlTag = keyof JSX.IntrinsicElements;

    const child = children as ReactElement<
      JSX.IntrinsicElements[HtmlTag],
      HtmlTag
    >;

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
