"use client";

import { AlignJustify, X } from "lucide-react";

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
// import { usePathname } from "next/navigation";
import NavBar from "./navbar";

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();

  const handleClose = () => setIsOpen(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerTrigger aria-label="Menu" className="w-full flex justify-end">
        <AlignJustify></AlignJustify>
      </DrawerTrigger>

      <DrawerContent
        aria-describedby="dropdown-menu"
        className="font-secondary flex flex-col gap-5 uppercase p-5 text-5xl z-1000"
      >
        <DrawerClose className="flex justify-end">
          <X />
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle className="text-4xl flex items-center sr-only">
            Menu
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Dropdown menu for small devices
          </DrawerDescription>
        </DrawerHeader>
        <NavBar
          className="flex flex-col justify-between"
          onLinkClick={handleClose}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
