import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MeetOurTeamStyles } from "../../styles/aboutUsComponentStyles";

export const ProjStaffTEAMMEMBER = () => {
  return (
    <div className={MeetOurTeamStyles.MembersContainer}>
      <div className={MeetOurTeamStyles.MemberTextsContainer}>
        <div className={MeetOurTeamStyles.MemberName}>
          Mr. IAN DAVE B. CUSTODIO
        </div>
        <div className={MeetOurTeamStyles.MemberPosition}>Project Staff</div>
      </div>
      <StaticImage
        src="../assets/TeamMembers/Project Staff.png"
        className={MeetOurTeamStyles.MemberPhoto}
        alt=""
      />
    </div>
  );
};
