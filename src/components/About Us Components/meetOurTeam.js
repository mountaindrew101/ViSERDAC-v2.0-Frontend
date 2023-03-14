import React from "react";
import { MeetOurTeamStyles } from "../styles/aboutUsComponentStyles";

import { DeveloperTEAMMEMBER } from "./Team Members/Developer";
import { DirectorTEAMMEMBER } from "./Team Members/Director";
import { ProjStaffTEAMMEMBER } from "./Team Members/ProjectStaff";
import { ResearchAssistantTEAMMEMBER } from "./Team Members/ResearchAssistant";
import { ResearchAnalystTEAMMEMBER } from "./Team Members/ScienceResearchAnalyst";

export const MeetOurTeam = () => {
  return (
    <div className={MeetOurTeamStyles.Container}>
      <div id="TitleContainer" className={MeetOurTeamStyles.TitleContainer}>
        <span className={MeetOurTeamStyles.TitlePt1}>Meet our </span>
        <span className={MeetOurTeamStyles.TitlePt2}>Team</span>
        <span className={MeetOurTeamStyles.TitlePt3}>!</span>
      </div>
      <div className={MeetOurTeamStyles.MembersParent}>
        <DirectorTEAMMEMBER />
        <ProjStaffTEAMMEMBER />
        <DeveloperTEAMMEMBER />
        <ResearchAnalystTEAMMEMBER />
        <ResearchAssistantTEAMMEMBER />
      </div>
    </div>
  );
};
