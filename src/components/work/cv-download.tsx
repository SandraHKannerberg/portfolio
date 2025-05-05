"use client";

import { Button } from "@/components/ui/button";
import RotatingTextCircle from "../animations/rotating-text-circle";

const CvDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/sandra-kannerberg-cv.pdf";
    link.download = "sandra-kannerberg-cv.pdf"; // Custome file-name
    link.click();
  };

  return (
    <div className="relative circle flex justify-center items-center">
      <Button
        variant="default"
        className="absolute w-25 h-25 rounded-full text-2xl uppercase cursor-pointer shadow hover:bg-secondary hover:text-background hover:shadow-md z-5"
        onClick={handleDownload}
      >
        CV
      </Button>
      <RotatingTextCircle text="Download -- Download -- Download -- Download" />
    </div>
  );
};

export default CvDownload;
