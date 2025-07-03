import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { EMAIL } from "@/constants";

interface ContactBtnProps {
  text: string;
  className?: string;
}

const ContactBtn = ({ text, className }: ContactBtnProps) => {
  return (
    <Link href={`mailto:${EMAIL}`}>
      <Button
        variant="outline"
        className={`${className} rounded-full shadow p-3 uppercase flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-background`}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ContactBtn;
