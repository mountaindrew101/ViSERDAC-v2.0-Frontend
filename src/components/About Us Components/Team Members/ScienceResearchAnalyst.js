import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MeetOurTeamStyles } from "../../styles/aboutUsComponentStyles";

export const ResearchAnalystTEAMMEMBER = () => {
  return (
    <div className={MeetOurTeamStyles.MembersContainer}>
      <div className={MeetOurTeamStyles.MemberTextsContainer}>
        <div className={MeetOurTeamStyles.MemberName}>Ms. WENDY C. ENERLAN</div>
        <div className={MeetOurTeamStyles.MemberPosition}>
          Science Research Analyst
        </div>
      </div>
      <StaticImage
        src="../assets/TeamMembers/Science Research Analyst.png"
        className={MeetOurTeamStyles.MemberPhoto}
        alt=""
      />
    </div>
  );
};
