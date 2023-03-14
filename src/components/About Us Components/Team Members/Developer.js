import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MeetOurTeamStyles } from "../../styles/aboutUsComponentStyles";

export const DeveloperTEAMMEMBER = () => {
  return (
    <div className={MeetOurTeamStyles.MembersContainer}>
      <div className={MeetOurTeamStyles.MemberTextsContainer}>
        <div className={MeetOurTeamStyles.MemberName}>Mr. NORMAN O. VILLAS</div>
        <div className={MeetOurTeamStyles.MemberPosition}>
          Database Developer
        </div>
      </div>
      <StaticImage
        src="../assets/TeamMembers/Database Dev.png"
        className={MeetOurTeamStyles.MemberPhoto}
        alt=""
      />
    </div>
  );
};
