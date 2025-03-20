import React from "react";
import ContactIcons from "../contact/contact-icons";
import { MapPin } from "lucide-react";

export default function footer() {
  return (
    <footer className="flex flex-col justify-center items-center text-center mt-10 mb-5">
      <small className="text-center">
        Copyright &copy; {new Date().getFullYear()} Sandra Höst Kannerberg. All
        rights reserved.
      </small>
      <small className="flex gap-1 justify-center mb-5">
        <MapPin /> Stockholm or remote
      </small>
      <ContactIcons className={"text-2xl"}></ContactIcons>
    </footer>
  );
}
