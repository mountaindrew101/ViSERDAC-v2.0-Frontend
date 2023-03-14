import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MeetOurTeamStyles } from "../../styles/aboutUsComponentStyles";

export const ResearchAssistantTEAMMEMBER = () => {
  return (
    <div className={MeetOurTeamStyles.MembersContainer}>
      <div className={MeetOurTeamStyles.MemberTextsContainer}>
        <div className={MeetOurTeamStyles.MemberName}>
          Mr. REYVIN N. SABANAL
        </div>
        <div className={MeetOurTeamStyles.MemberPosition}>
          Science Research Assistant
        </div>
      </div>
      <StaticImage
        src="../assets/TeamMembers/Science Research Assistant.png"
        className={MeetOurTeamStyles.MemberPhoto}
        alt=""
      />
    </div>
  );
};
