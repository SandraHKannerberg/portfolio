import React from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function TimeLine() {
  return (
    <ul className="grid col-span-12 mt-[5rem] space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
      {/* Timeline item */}
      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <GraduationCap />
        </div>

        {/* TODO: card as an own component with h3 and p content as props */}
        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded shadow">
          <h3 className="font-bold">
            Frontend advanced training at Lexicon IT-Proffs
          </h3>
          <p className="font-medium">Nov 2024 - ongoing to April 2025</p>
        </article>
      </li>

      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <BriefcaseBusiness />
        </div>

        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-light p-4 rounded shadow">
          <h3 className="font-bold">
            Fullstack developer at Propida Solutions AB
          </h3>
          <p className="font-medium">Feb 2024 - Nov 2024</p>
        </article>
      </li>

      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <GraduationCap />
        </div>

        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded shadow">
          <h3 className="font-bold">
            Webdeveloper Fullstack E-commerce at Medieinstitutet
          </h3>
          <p className="font-medium">Sep 2022 - May 2024</p>
        </article>
      </li>

      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <BriefcaseBusiness />
        </div>

        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded shadow">
          <h3 className="font-bold">Fullstack Intern at ByggDagboken</h3>
          <p className="font-medium">Sep 2023 - Dec 2023</p>
        </article>
      </li>

      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <BriefcaseBusiness />
        </div>

        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded shadow">
          <h3 className="font-bold">
            Customer Service Advisor at SEB / SEB Kort
          </h3>
          <p className="font-medium">Sep 2009- May 2024</p>
        </article>
      </li>

      <li className="relative col-span-12 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-muted bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <GraduationCap />
        </div>

        {/* Card */}
        <article className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted p-4 rounded shadow">
          <h3 className="font-bold">IT-Business at Nackademin</h3>
          <p className="font-medium">Aug 2007 - Jun 2009</p>
        </article>
      </li>
    </ul>
  );
}
