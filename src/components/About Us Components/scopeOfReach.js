import React from "react";
import { ScopeOfReachStyles } from "../styles/aboutUsComponentStyles";

import Scope from "./assets/ScopeOfReach.inline.svg";

export const ScopeOfReach = () => {
  return (
    <div className={ScopeOfReachStyles.Container}>
      <div className={ScopeOfReachStyles.Title}>Our Scope of Reach</div>
      <Scope className={ScopeOfReachStyles.Scope} />
    </div>
  );
};
