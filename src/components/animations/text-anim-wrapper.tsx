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
gsap.registerPlugin(ScrollTrigger, SplitText);

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
  const wordsRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset
      splitRef.current = [];
      wordsRef.current = [];

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
          type: "words",
          mask: "words",
          wordsClass: "word++",
        })
      );

      // Collect every lines in an array
      wordsRef.current = splitRef.current.flatMap((split) =>
        htmlElementsArray(split.words)
      );

      // Staring position
      gsap.set(wordsRef.current, { opacity: 1, filter: "blur(0px)" });

      // Animation settings
      const animationProps = {
        opacity: 0,
        filter: "blur(8px)",
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
      };

      // Scroll-trigger config
      if (animateOnScroll) {
        gsap.from(wordsRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.to(wordsRef.current, animationProps);
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
