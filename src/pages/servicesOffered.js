// ! warn: empty strings should be included in between className concatenations for the styles to work properly

import React from "react";
import { Layout } from "../components/layout";

// Styles
import {
  ServicesOfferedContainer,
  ServicesOfferedItemsStyle,
} from "../components/styles/servicesOfferedStyles";

// Components
import { EquipmentsFacilicitesSVCS } from "../components/Services Offered Components/equipmentsFacilities";
import { DatabaseSVCS } from "../components/Services Offered Components/Database";
import { MiniLibrarySVCS } from "../components/Services Offered Components/miniLibrary";
import { TrainingsSVCS } from "../components/Services Offered Components/trainings";
import { DataAnalysisSVCS } from "../components/Services Offered Components/dataAnalysis";
import { ConsultationSVCS } from "../components/Services Offered Components/consultation";
import { OnTheJobTrainingsSVCS } from "../components/Services Offered Components/onTheJobTrainings";
import { SurveySVCS } from "../components/Services Offered Components/survey";
import { ResearchSVCS } from "../components/Services Offered Components/research";

const ServicesOffered = () => {


  return (
    <Layout>
      <div className={ServicesOfferedContainer} id="ServicesOfferedContainer">
          <EquipmentsFacilicitesSVCS />
          <DatabaseSVCS />
          <MiniLibrarySVCS />
          <TrainingsSVCS />
          <DataAnalysisSVCS />
          <ConsultationSVCS />
          <OnTheJobTrainingsSVCS />
          <SurveySVCS />
          <ResearchSVCS />
        <div
          id="SectionThree"
          className={ServicesOfferedItemsStyle.SectionThree}
        >
          To avail our services, send us an email at{" "}
          <a href="mailto:viserdac@vsu.edu.ph" className="underline">
            viserdac@vsu.edu.ph
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesOffered;
