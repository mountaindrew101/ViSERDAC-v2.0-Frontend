// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";

import WeSpecialize from "./HomeSectionTwo_Components/weSpecialize";
import GetOpenAccess from "./HomeSectionTwo_Components/getOpenAccess";
import ProvideTechnicalAssistance from "./HomeSectionTwo_Components/provideTechnicalAssistance";
import { homeSectionTwoContainerStyles } from "../styles/homeSectionTwoStyles";

export const HomeSectionTwo = () => {
  return (
    <div
      className={
        homeSectionTwoContainerStyles.MainContainer +
        " " +
        homeSectionTwoContainerStyles.MainContainerBreakpointStyles
      }
      id="HomeSectionTwoContainer"
    >
      <div
        className={
          homeSectionTwoContainerStyles.SubContainer +
          " " +
          homeSectionTwoContainerStyles.SubContainerBreakpointStyles
        }
      >
        <WeSpecialize />
        <GetOpenAccess />
        <ProvideTechnicalAssistance />
      </div>
    </div>
  );
};
