import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MeetOurTeamStyles } from "../../styles/aboutUsComponentStyles";

export const DirectorTEAMMEMBER = () => {
  return (
    <div className={MeetOurTeamStyles.MembersContainer}>
      <div className={MeetOurTeamStyles.MemberTextsContainer}>
        <div className={MeetOurTeamStyles.MemberName}>
          Dr. MOISES NEIL V. SERIÑO
        </div>
        <div className={MeetOurTeamStyles.MemberPosition}>Director</div>
      </div>
      <StaticImage
        src="../assets/TeamMembers/Director.png"
        className={MeetOurTeamStyles.MemberPhoto}
        alt=""
      />
    </div>
  );
};
