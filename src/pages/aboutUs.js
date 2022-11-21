import React from "react";
import { Layout } from "../components/layout";

import { WhatIsViserdac } from "../components/About Us Components/whatIsViserdac";
import { MissionVision } from "../components/About Us Components/missionVision";
import { OtherSERDACs } from "../components/About Us Components/otherSerdacs";
import { Objectives } from "../components/About Us Components/objectives";
import { ScopeOfReach } from "../components/About Us Components/scopeOfReach";
import { MeetOurTeam } from "../components/About Us Components/meetOurTeam";
import { AboutUsContainer } from "../components/styles/aboutUsStyles";

const AboutUs = () => {
  return (
    <Layout>
      <div className={AboutUsContainer} id="AboutUsContainer">
        <WhatIsViserdac />
        <MissionVision />
        <OtherSERDACs />
        <Objectives />
        <ScopeOfReach />
        <MeetOurTeam />
      </div>
    </Layout>
  );
};

export default AboutUs;
