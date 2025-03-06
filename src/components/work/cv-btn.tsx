"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function CvBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/sandra-kannerberg-cv.pdf";
    link.download = "sandra-kannerberg-cv.pdf"; // Custome file-name
    link.click();
  };

  return (
    <Button
      variant="default"
      className="rounded uppercase cursor-pointer shadow mt-5 mb-10 hover:bg-secondary hover:text-background hover:shadow-md animate-bounce"
      onClick={handleDownload}
    >
      Download CV
    </Button>
  );
}
