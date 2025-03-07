"use client";

import { AlignJustify, X } from "lucide-react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function FullscreenMenu() {
  return (
    <Drawer>
      <DrawerTrigger aria-label="Menu" className="flex justify-self-end">
        <AlignJustify></AlignJustify>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby="dropdown-menu"
        className="top-0 font-secondary flex flex-col justify-between uppercase p-5 text-5xl gap-5"
      >
        <DrawerHeader>
          <DrawerClose className="flex justify-center">
            <X></X>
          </DrawerClose>
          <DrawerTitle className="text-4xl flex justify-between items-center sr-only">
            Menu
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Dropdown menu for small devices
          </DrawerDescription>
        </DrawerHeader>

        <Link
          href="/"
          className="focus:bg-secondary focus:text-background"
          scroll={false}
        >
          Home
        </Link>

        <Link
          href="/about"
          className="focus:bg-secondary focus:text-background"
          scroll={false}
        >
          About
        </Link>
        <Link
          href="/work"
          className="focus:bg-secondary focus:text-background"
          scroll={false}
        >
          Work
        </Link>
        <Link
          href="/projects"
          className="focus:bg-secondary focus:text-background"
          scroll={false}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="focus:bg-secondary focus:text-background"
          scroll={false}
        >
          Contact
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
