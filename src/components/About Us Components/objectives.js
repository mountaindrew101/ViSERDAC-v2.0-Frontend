import React from "react";
import { motion } from "framer-motion";

import { ObjectivesList } from "./objectivesList";
import CheckIcon from "./assets/checkIcon.inline.svg";
import { ObjectivesStyles } from "../styles/aboutUsComponentStyles";

export const Objectives = () => {
  return (
    <div
      id="ObjectivesContainer"
      className={ObjectivesStyles.ObjectivesContainer}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.2,
          stiffness: 80,
        }}
        id="ObjectivesTextContainer"
        className={ObjectivesStyles.ObjectivesTextContainer}
      >
        <div id="ObjectivesText" className={ObjectivesStyles.ObjectivesText}>
          <span className="text-[3rem]">Our</span> <br />
          OBJECTIVES
        </div>
      </motion.div>
      {/* Item Iteration */}
      <div
        id="ObjectivesListParent"
        className={ObjectivesStyles.ObjectivesListParent}
      >
        {ObjectivesList.map((ListItem, index) => (
          <motion.div
            key={index}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              type: "spring",
              delay: 0.15,
              stiffness: 80,
            }}
            className={ObjectivesStyles.ObjectivesListContainer}
          >
            <CheckIcon className={ObjectivesStyles.ObjectivesListIcon} />
            <span className={ObjectivesStyles.ObjectivesListHighlight}>
              {ListItem.Highlight}
            </span>
            <span className={ObjectivesStyles.ObjectivesListText}>
              {ListItem.Text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
