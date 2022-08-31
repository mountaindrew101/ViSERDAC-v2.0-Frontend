import React from "react";
import { ArrowUp } from "./assets/arrowUpSVG";
import { backToTopStyles } from "./styles/layoutStyles";
import scrollTo from "gatsby-plugin-smoothscroll";

export const BackToTop = ({ backToTopTextStyle }) => {
  return (
    <div className="group">
    <div
      className={`${backToTopStyles.backToTopParent} + ${backToTopStyles.backToTopParentHover}`}
      id="back-to-top"
    >
      <button onClick={() => scrollTo('#headerContainer')} className={`${backToTopStyles.backtoTopSubParent} + ${backToTopStyles.backToTopSubParentHover}`}>
        <ArrowUp ArrowUpClass={backToTopStyles.backToTopArrowStyle} />
      </button>
    </div>
    <div className={backToTopTextStyle}>Back to top</div>
    </div>
  );
};
