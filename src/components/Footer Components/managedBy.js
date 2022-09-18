import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FooterSectionOne } from "../styles/footerStyle";

export const ManagedBy = () => {
  return (
    <div
      id="ManagedBy"
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
        Managed By
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
            src="../../images/ViSERDAC-Logo.png"
            loading="lazy"
            placeholder="blurred"
            alt="ViSERDAC"
          />
        </div>
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        >
          <StaticImage
            src="../../images/VSU Logo-01.png"
            loading="lazy"
            placeholder="blurred"
            alt="VSU"
          />
        </div>
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        >
          <StaticImage
            src="../../images/CME.png"
            loading="lazy"
            placeholder="blurred"
            alt="VSU - CME"
          />
        </div>
      </div>
    </div>
  );
};
