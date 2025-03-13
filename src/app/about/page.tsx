import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import HeaderWithNavBar from "@/components/navigation/header-with-navbar";
import Footer from "@/components/ui/footer";
import KeyFeatures from "@/components/about/key-features";

export const metadata: Metadata = {
  title: "Portfolio - About",
  description:
    "Learn more about Sandra Höst Kannerberg, a passionate web developer with a focus on creativity, user-friendly solutions, and continuous growth. Discover my journey and expertise!",
};

export default function AboutPage() {
  return (
    <>
      <HeaderWithNavBar></HeaderWithNavBar>
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <section className="flex flex-col justify-center md:col-span-2">
            <span className="block font-handwritten text-6xl lowercase">
              a little
            </span>
            <h1 className="text-8xl font-secondary uppercase">About me</h1>
          </section>
          <section className="flex items-center my-10 md:col-span-2">
            <KeyFeatures />
          </section>
          <section className="grid items-center">
            <p className="mb-5">
              My name is Sandra Höst Kannerberg and I&apos;m a fullstack skilled
              developer based i Stockholm, with a truly strong passion for
              frontend development.
            </p>
            <p className="mb-5">
              I&apos;m passionate about turning ideas into interactive
              experiences. With 3 years of experience in web development and 15+
              years in customer relations within the banking sector, I bring a
              unique user perspective, creativity, and technical expertise to
              every project.
            </p>
            <p className="mb-5">
              I&apos;m committed to user-friendliness, accessibility, and
              crafting high-quality solutions that transform complex ideas into
              intuitive and engaging interfaces.
            </p>
          </section>
          <figure className="justify-self-center grid items-center w-80 h-80">
            <Image
              src="/images/about-me.svg"
              alt="Illustration of a woman and about me text"
              width={400}
              height={400}
              className="justify-self-center"
              priority
            />
          </figure>
          <figure className="justify-self-center grid items-center md:order-1 order-2 w-80 h-80">
            <Image
              src="/images/my-words.svg"
              alt="Illustration of a talking woman"
              width={400}
              height={400}
            />
          </figure>
          <article className="relative grid items-center md:order-2 order-1 my-16">
            <Image
              src="/images/double-quotes.svg"
              alt="Double-quotes icon"
              width={300}
              height={300}
              className="absolute opacity-25"
            />

            <div className="flex flex-col gap-5 z-50">
              <p className="z-50 italic">
                &quot;I love the magic of turning ideas into interactive
                experiences. There is something truly exciting about crafting
                seamless interfaces where colors, shapes, and animations work
                together to create both beauty and function.
              </p>
              <p className="z-50 italic">
                I find my flow in the creative process, where attention to
                detail meets problem-solving—often with a good cup of coffee by
                my side and music in the background.
              </p>
              <p className="z-50 italic">
                For me, frontend development is more than just code; it is about
                bringing design to life in a way that feels intuitive and
                engaging.&quot;
              </p>
            </div>
          </article>
        </main>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
}
