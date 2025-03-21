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
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function FullscreenMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger aria-label="Menu" className="w-full flex justify-end">
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
          className={`relative focus:bg-secondary focus:text-background ${
            pathname === "/"
              ? "font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-primary after:w-full"
              : "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary hover:after:w-full transition-all duration-300"
          }`}
          scroll={false}
          onClick={handleClose}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`relative focus:bg-secondary focus:text-background ${
            pathname === "/about"
              ? "font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-primary after:w-full"
              : "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary hover:after:w-full transition-all duration-300"
          }`}
          scroll={false}
          onClick={handleClose}
        >
          About
        </Link>
        <Link
          href="/work"
          className={`relative focus:bg-secondary focus:text-background ${
            pathname === "/work"
              ? "font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-primary after:w-full"
              : "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary hover:after:w-full transition-all duration-300"
          }`}
          scroll={false}
          onClick={handleClose}
        >
          Work
        </Link>
        <Link
          href="/projects"
          className={`relative focus:bg-secondary focus:text-background ${
            pathname === "/projects"
              ? "font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-primary after:w-full"
              : "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary hover:after:w-full transition-all duration-300"
          }`}
          scroll={false}
          onClick={handleClose}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`relative focus:bg-secondary focus:text-background ${
            pathname === "/contact"
              ? "font-bold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-primary after:w-full"
              : "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary hover:after:w-full transition-all duration-300"
          }`}
          scroll={false}
          onClick={handleClose}
        >
          Contact
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
