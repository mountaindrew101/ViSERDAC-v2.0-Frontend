// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";
import { ArrowUp } from "./assets/arrowUpSVG";
import scrollTo from "gatsby-plugin-smoothscroll";

import { backToTopStyles } from "./styles/layoutStyles";

export const BackToTop = ({ backToTopTextStyle }) => {
  return (
    <div className="group">
      <div
        className={
          backToTopStyles.backToTopParent +
          " " +
          backToTopStyles.backToTopParentHover
        }
        id="back-to-top"
      >
        <button
          onClick={() => scrollTo("#headerContainer")}
          className={
            backToTopStyles.backtoTopSubParent +
            " " +
            backToTopStyles.backToTopSubParentHover
          }
        >
          <ArrowUp ArrowUpClass={backToTopStyles.backToTopArrowStyle} />
        </button>
      </div>
      <div className={backToTopTextStyle}>Back to top</div>
    </div>
  );
};
