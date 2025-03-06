import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Highlights from "@/components/work/highlights";

export default function AboutPage() {
  return (
    <>
      <NavBar></NavBar>
      <MaxWidthWrapper>
        <main className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <section className="flex flex-col justify-center md:col-span-1">
            <span className="block font-handwritten text-6xl lowercase">
              a little
            </span>
            <h1 className="text-8xl font-secondary uppercase">About me</h1>
          </section>
          <section className="flex items-center md:col-span-2 my-10">
            <Highlights />
          </section>
          <section className="grid items-center">
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
          <figure className="justify-self-center grid items-center">
            <Image
              src="/images/about-me.svg"
              alt="Illustration of a woman and about me text"
              width={400}
              height={400}
              className="justify-self-center"
            />
          </figure>
          <figure className="justify-self-center grid items-center md:order-1 order-2">
            <Image
              src="/images/my-words.svg"
              alt="Illustration of a talking woman"
              width={400}
              height={400}
            />
          </figure>
          <article className="relative grid items-center md:order-2 order-1">
            <Image
              src="/images/double-quotes.svg"
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
          </article>
        </main>
      </MaxWidthWrapper>
      <Footer></Footer>
    </>
  );
}
