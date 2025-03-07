"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function CvBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/sandra-kannerberg-cv.pdf";
    link.download = "sandra-kannerberg-cv.pdf"; // Custome file-name
    link.click();
  };

  return (
    <>
      <Button
        variant="default"
        className="relative rounded uppercase cursor-pointer shadow mt-5 mb-10 hover:bg-secondary hover:text-background hover:shadow-md"
        onClick={handleDownload}
      >
        Download CV
        <div className="absolute flex size-6 -right-2 -top-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex size-6 rounded-full bg-foreground text-background justify-center items-center">
            <ArrowDown />
          </span>
        </div>
      </Button>
    </>
  );
}
