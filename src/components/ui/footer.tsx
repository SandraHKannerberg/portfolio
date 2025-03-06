import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import ContactIcons from "../contact/contact-icons";

export default function footer() {
  return (
    <footer className="flex justify-center items-center text-center">
      <MaxWidthWrapper className="p-5">
        <div className="flex flex-col items-center">
          <small>Copyright &copy; Sandra Höst Kannerberg - Portfolio.</small>
          <small>All rights reserved.</small>
          <ContactIcons className={"text-2xl "}></ContactIcons>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
