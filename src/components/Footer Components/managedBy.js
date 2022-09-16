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
      <span>Managed By</span>
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
        ></div>
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        ></div>
        <div
          className={
            FooterSectionOne.Logo + " " + FooterSectionOne.LogoBreakpointStyles
          }
        ></div>
      </div>
    </div>
  );
};
