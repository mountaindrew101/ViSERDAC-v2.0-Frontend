import React from "react";
import { FooterSectionOne } from "../styles/footerStyle";
import { StaticImage } from "gatsby-plugin-image";

export const FundedBy = () => {
  return (
    <div
      id="FundedBy"
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
        Funded By
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
            src="../../images/PCAARRD.png"
            loading="lazy"
            placeholder="blurred"
            alt="PCAARRD"
          />
        </div>
      </div>
    </div>
  );
};
