"use client";

import * as React from "react";
import { AlignJustify, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function FullscreenMenu() {
  return (
    <Drawer>
      <DrawerTrigger aria-label="Menu">
        <AlignJustify></AlignJustify>
      </DrawerTrigger>
      <DrawerContent className="top-0 font-secondary flex flex-col justify-between uppercase p-5 text-5xl gap-5">
        <DrawerHeader>
          <DrawerTitle className="text-4xl flex justify-between items-center">
            Menu
            <DrawerClose className="flex justify-center">
              <X></X>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>

        <Link href="/" className="focus:bg-secondary focus:text-background">
          Home
        </Link>

        <Link
          href="/about"
          className="focus:bg-secondary focus:text-background"
        >
          About
        </Link>
        <Link href="/work" className="focus:bg-secondary focus:text-background">
          Work
        </Link>
        <Link
          href="/projects"
          className="focus:bg-secondary focus:text-background"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="focus:bg-secondary focus:text-background"
        >
          Contact
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
