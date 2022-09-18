// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";

import { InPartnership } from "./Footer Components/inPartnership";
import { ManagedBy } from "./Footer Components/managedBy";
import { FundedBy } from "./Footer Components/fundedBy";
import { FooterStyles } from "./styles/footerStyle";
import { ContactDetails } from "./Footer Components/contactDetails";

export const Footer = () => {
  return (
    <div
      id="container"
      className={
        FooterStyles.MainContainer +
        " " +
        FooterStyles.MainContainerBreakpointStyles
      }
    >
      <div
        id="footerDividingLine"
        className={
          FooterStyles.FooterDividingLine +
          " " +
          FooterStyles.FooterDividingLineBreakpointStyles
        }
      ></div>
      <div
        id="SectionOneContainer"
        className={
          FooterStyles.SectionOneContainer +
          " " +
          FooterStyles.SectionOneContainerBreakpointStyles
        }
      >
        <InPartnership />
        <ManagedBy />
        <FundedBy />
      </div>
      <ContactDetails />
    </div>
  );
};
