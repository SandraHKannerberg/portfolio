import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

export default function footer() {
  return (
    <footer className="flex justify-center items-center text-center">
      <MaxWidthWrapper className="p-5">
        <div className="flex flex-col">
          <small>Copyright &copy; Sandra Höst Kannerberg - Portfolio.</small>
          <small>All rights reserved.</small>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
