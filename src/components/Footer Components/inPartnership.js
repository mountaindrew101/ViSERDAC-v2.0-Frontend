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
      <span>In Partnership</span>
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
