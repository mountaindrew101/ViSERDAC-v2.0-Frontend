import React from "react";
import { ArrowUp } from "./assets/arrowUpSVG";

export const BackToTop = () => {
  return (
    <div
      className="w-14 h-14 bg-[#FDCB00] rounded-full flex justify-center items-center translate-y-[0.12rem] drop-shadow-thicknear"
      id="back-to-top"
    >
      <div className="w-14 h-14 bg-[#003D00] rounded-full flex justify-center items-center translate-y-[-0.12rem]">
        <ArrowUp ArrowUpClass="h-8 w-8" />
      </div>
    </div>
  );
};
