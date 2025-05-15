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

interface TextAnimWrapperProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

// els: Element[] = It is an array of DOM elements of type Element - which is the general base class for all HTML/SVG/XML elements in the DOM.
// el is HTMLElement = This is a type predicate - it tells TypeScript that after filtering, el will be an HTMLElement, not just a generic Element.
// el instanceof HTMLElement = The runtime check - "Is this element a real HTML element?"
// Now TypeScript now knows that htmlElementsArray = HTMLElement[]
const htmlElementsArray = (els: Element[]): HTMLElement[] =>
  els.filter((el): el is HTMLElement => el instanceof HTMLElement);

export default function TextAnimWrapper({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset
      splitRef.current = [];
      lines.current = [];

      const isWrapper = containerRef.current.hasAttribute("data-copy-wrapper");

      // Target all direct children
      const elements = isWrapper
        ? Array.from(containerRef.current.children).filter(
            (el): el is HTMLElement => el instanceof HTMLElement
          )
        : [containerRef.current];

      // SplitText setup
      splitRef.current = elements.map((element) =>
        SplitText.create(element, {
          type: "lines",
          mask: "lines", // Create a visual ‘mask’ that hides the content until it is animated
          linesClass: "line++",
          autoSplit: true, // Important for responsive design
        })
      );

      // Collect every lines in an array
      lines.current = splitRef.current.flatMap((split) =>
        htmlElementsArray(split.lines)
      );

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

  // Detect if children = exactly 1 element AND ensure it is a HTML-element. Can't be a React-component, React-fragment or a string since they can't handle the ref-attribute
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
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      className="overflow-visible w-full"
    >
      {children}
    </div>
  );
}
