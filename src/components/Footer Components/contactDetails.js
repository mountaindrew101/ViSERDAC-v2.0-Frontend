// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";

import { FooterStyles } from "../styles/footerStyle";

import LocationSVG from "./Location.inline.svg";
import LottieCallAnimation from "../lottie/LottieCallAnimation";
import LottieMailAnimation from "../lottie/LottieMailAnimation";

export const ContactDetails = () => {
  return (
    <div
      id="ContactDetailsContainer"
      className={
        FooterStyles.ContactDetailsContainer +
        " " +
        FooterStyles.ContactDetailsContainerBreakpointStyles
      }
    >
      <div id="Contact">
        <span>Contact</span>
        <div id="Address">
          <LocationSVG />
          <span>
            <strong>
              Visayas Socio-Economic Research and Data Analytics Center
            </strong>
            <br />
            1/F Department of Economics, Visayas State University <br />
            Visca, Baybay City, Leyte, 6521, Philippines
          </span>
        </div>
        <div id="Landline">
          <LottieCallAnimation />
          <span>(053) 563 – 7751</span>
        </div>
        <div id="Email">
          <LottieMailAnimation />
          <a href="mailto:viserdac@vsu.edu.ph">viserdac@vsu.edu.ph</a>
        </div>
      </div>
      <div id="ContactMap"></div>
    </div>
  );
};
