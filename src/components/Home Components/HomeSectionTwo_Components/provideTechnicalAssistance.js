// ! warn: empty strings should be included in between className concatenations for the styles to work

import { motion } from "framer-motion";
import React from "react";
import { ProvideTechnicalAssistanceStyles } from "../../styles/homeSectionTwoStyles";

const ProvideTechnicalAssistance = () => {
  return (
    <motion.div
      id="ProvideTechnicalAssistance"
      initial={{ x: "-100px", rotate: -10, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 4.2,
        ease: "easeInOut",
        type: "spring",
        delay: 0.2,
        stiffness: 150,
      }}
      className={
        ProvideTechnicalAssistanceStyles.MainContainer +
        " " +
        ProvideTechnicalAssistanceStyles.MainContainerBreakpointStyles
      }
    >
      <div
        className={
          ProvideTechnicalAssistanceStyles.ContentContainer +
          " " +
          ProvideTechnicalAssistanceStyles.ContentContainerBreakpointStyles
        }
      >
        <h3
          className={
            ProvideTechnicalAssistanceStyles.Content_h3 +
            " " +
            ProvideTechnicalAssistanceStyles.Content_h3BreakpointStyles
          }
        >
          We provide technical <br />
          to research sectors
        </h3>
        <button
          className={
            ProvideTechnicalAssistanceStyles.Button +
            " " +
            ProvideTechnicalAssistanceStyles.ButtonBreakpointStyles
          }
        >
          Talk with us
        </button>
      </div>
    </motion.div>
  );
};

export default ProvideTechnicalAssistance;
