import React from "react";
import { Button } from "@/components/ui/button";

export default function CvBtn() {
  return (
    <Button
      variant="default"
      className="rounded uppercase cursor-pointer shadow mb-5 hover:bg-secondary hover:text-background hover:shadow-md"
    >
      Download CV
    </Button>
  );
}
