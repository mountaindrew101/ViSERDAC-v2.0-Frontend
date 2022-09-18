import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FooterSectionOne } from "../styles/footerStyle";

export const InPartnership = () => {
  return (
    <div
      id="InPartnership"
      className={
        FooterSectionOne.Container +
        " " +
        FooterSectionOne.ContainerBreakpointStyles
      }
    >
      <span
        className={
          FooterSectionOne.Text + " " + FooterSectionOne.TextBreakpointStyles
        }
      >
        In Partnership
      </span>
      <div
        id="Logo Container"
        className={
          FooterSectionOne.LogoContainer +
          " " +
          FooterSectionOne.LogoContainerBreakpointStyles
        }
      >
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        >
          <StaticImage
            src="../../images/CLSU Logo-01.png"
            loading="lazy"
            placeholder="blurred"
            alt="CLSU"
          />
        </div>
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        >
          <StaticImage
            src="../../images/USEP.png"
            loading="lazy"
            placeholder="blurred"
            alt="USEP"
          />
        </div>
      </div>
    </div>
  );
};
