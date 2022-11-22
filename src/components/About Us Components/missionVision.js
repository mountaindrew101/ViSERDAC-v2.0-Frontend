import React from "react";
import { motion } from "framer-motion";

import { MissionVisionStyles } from "../styles/aboutUsComponentStyles";

import MissionBG from "./assets/MissionBG.inline.svg";
import VisionBG from "./assets/VisionBG.inline.svg";
import VisionSymbol from "./assets/VisionSymbol.inline.svg";
import MissionSymbol from "./assets/MisionSymbol.inline.svg";

export const MissionVision = () => {
  return (
    <div
      className={MissionVisionStyles.MissionVisionContainer}
      id="MissionVisionContainer"
    >
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.05,
          stiffness: 150,
        }}
        className={MissionVisionStyles.VisionContainer}
        id="MissionContainer"
      >
        <VisionBG className={MissionVisionStyles.VisionBG} />
        <VisionSymbol
          id="VisionSymbol"
          className="absolute bottom-0 left-0 w-[4rem] ml-[7.5rem] mb-[6.3rem]"
        />
        <div className={MissionVisionStyles.VisionTextContainer}>
          <div className={MissionVisionStyles.VisionTitle}>Vision</div>
          <div className={MissionVisionStyles.VisionSubtitle}>
            {" "}
            A <span className="text-white">leading center</span> for <br />
            socio-economic research and development in the Visayas.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.05,
          stiffness: 150,
        }}
        className={MissionVisionStyles.MissionContainer}
        id="VisionContainer"
      >
        <MissionBG className={MissionVisionStyles.MissionBG} />
        <MissionSymbol
          className="absolute bottom-0 right-0 w-[8rem] mr-[5rem] mb-[7rem]"
          id="MissionSymbol"
        />
        <div className={MissionVisionStyles.MissionTextContainer}>
          <div className={MissionVisionStyles.MissionTitle}>Mission</div>
          <div className={MissionVisionStyles.MissionSubtitle}>
            <span className="text-[#8BC34A]">Provide access</span> to genuine
            socio-economic <br /> tools, cutting edge <br /> data analytics and
            relevant capacity <br /> building for inclusive and sustainable
            development.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
