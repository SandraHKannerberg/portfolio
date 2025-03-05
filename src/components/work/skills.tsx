import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section className="grid col-span-12 gap-2 gap-y-8 place-items-center py-5 grid-cols-3 md:grid-cols-5 lg:grid-cols-9 opacity-75 grayscale hover:opacity-100 hover:grayscale-0">
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/html.svg"
            alt="HTML logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">HTML</figcaption>
        </figure>
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/css.svg"
            alt="CSS logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">CSS</figcaption>
        </figure>
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/javascript.svg"
            alt="JavaScript logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">JavaScript</figcaption>
        </figure>
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/typescript.svg"
            alt="TypeScript logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">TypeScript</figcaption>
        </figure>
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/react.svg"
            alt="React logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">React</figcaption>
        </figure>
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/next-js.svg"
            alt="NextJs logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">React</figcaption>
        </figure>

        {/* CSS Frameworks */}
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/tailwind.svg"
            alt="Tailwind logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">Tailwind</figcaption>
        </figure>

        {/* TODO: add shadcn/ui here */}

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/bootstrap.svg"
            alt="Bootstrap logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">Bootstrap</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/antdesign.svg"
            alt="AntDesign logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">AntDesign</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/materialui.svg"
            alt="MaterialUI logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">MaterialUI</figcaption>
        </figure>

        {/* Backend skills */}
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/node-js.svg"
            alt="NodeJs logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">NodeJS</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/mongodb.svg"
            alt="MongoDB logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">MongoDB</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/mysql.svg"
            alt="MySQL logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">MySQL</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <img
            src="/skills/postgresql.svg"
            alt="PostgreSQL logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">PostgreSQL</figcaption>
        </figure>
        {/* Other */}
        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/git.svg"
            alt="Git logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">Git</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/github.svg"
            alt="GitHub logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">GitHub</figcaption>
        </figure>

        <figure className="flex flex-col items-center m-4 sm:my-0 w-[3rem] md:w-[4rem]">
          <Image
            src="/skills/graphql.svg"
            alt="GraphQL logotype"
            width={100}
            height={100}
          />
          <figcaption className="mt-2">GraphQL</figcaption>
        </figure>
      </section>
    </>
  );
}
