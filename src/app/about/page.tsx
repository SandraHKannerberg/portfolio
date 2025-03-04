import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";

export default function AboutPage() {
  return (
    <>
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <section className="flex flex-col justify-center md:col-span-2">
            <span className="block font-handwritten text-6xl lowercase animate-slide-in-left">
              a little
            </span>
            <h1 className="text-8xl mb-5 font-secondary uppercase animate-slide-in-right">
              About me
            </h1>
          </section>
          <section className="animate-slide-up grid items-center">
            <p className="mb-5">
              My name is Sandra Höst Kannerberg and I'm a fullstack skilled
              developer with a truly strong passion for frontend development.
            </p>
            <p className="mb-5">
              I'm passionate about turning ideas into interactive experiences.
              With 3 years of experience in web development and 15+ years in
              customer relations within the banking sector, I bring a unique
              user perspective, creativity, and technical expertise to every
              project.
            </p>
            <p className="mb-5">
              I'm committed to user-friendliness, accessibility, and crafting
              high-quality solutions that transform complex ideas into intuitive
              and engaging interfaces.
            </p>
          </section>
          <figure className="w-[400px] h-[400px] animate-fade-in justify-self-center grid items-center">
            <Image
              src="/about-me.svg"
              alt="Illustration of a woman and about me text"
              width={400}
              height={400}
              className="justify-self-center"
            />
          </figure>
          <figure className="w-[400px] h-[400px] animate-fade-in justify-self-center grid items-center md:order-1 order-2">
            <Image
              src="/my-words.svg"
              alt="Illustration of a talking woman"
              width={400}
              height={400}
            />
          </figure>
          <aside className="relative animate-slide-up grid items-center md:order-2 order-1">
            <Image
              src="/double-quotes.svg"
              alt="Double-quotes icon"
              width={300}
              height={300}
              className="absolute opacity-25"
            />

            <div className="flex flex-col gap-5 z-50">
              <em className="z-50">
                "I love the magic of turning ideas into interactive experiences.
                There's something truly exciting about crafting seamless
                interfaces where colors, shapes, and animations work together to
                create both beauty and function.
              </em>
              <em className="z-50">
                I find my flow in the creative process, where attention to
                detail meets problem-solving—often with a good cup of coffee by
                my side and music in the background.
              </em>
              <em className="z-50">
                For me, frontend development is more than just code; it's about
                bringing design to life in a way that feels intuitive and
                engaging."
              </em>
            </div>
          </aside>
        </main>
      </MaxWidthWrapper>
    </>
  );
}
