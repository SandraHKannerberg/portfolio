import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import ContactIcons from "../contact/contact-icons";

export default function footer() {
  return (
    <footer className="flex justify-center items-center text-center mt-10">
      <MaxWidthWrapper className="p-5 flex flex-col justify-center items-center">
        <small className="text-center">
          Copyright &copy; {new Date().getFullYear()} Portfolio by Sandra Höst
          Kannerberg. All rights reserved.
        </small>
        <ContactIcons className={"text-2xl"}></ContactIcons>
      </MaxWidthWrapper>
    </footer>
  );
}
