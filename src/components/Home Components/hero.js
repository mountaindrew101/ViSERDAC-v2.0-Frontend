// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { motion } from "framer-motion";

import { HeroAnimationStyles, HeroStyles } from "../styles/heroStyle";

import AppWindowSVG from "./assets/AppWindow.inline.svg";
import BarGraph from "./assets/BarGraph.inline.svg";
import Checklist from "./assets/Checklist.inline.svg";

export const Hero = () => {
  return (
    <div
      className={
        HeroStyles.HeroContainer +
        " " +
        HeroStyles.HeroContainerBreakpointStyles
      }
      id="HeroContainer"
    >
      <div
        id="mainBG"
        className={HeroStyles.MainBG + " " + HeroStyles.MainBGBreakpointStyles}
      >
        <div
          id="gradientWhiteBG"
          className={
            HeroStyles.GradientWhiteBG +
            " " +
            HeroStyles.GradientWhiteBGBreakpointStyles
          }
        ></div>
        <div
          id="ContentContainer"
          className={
            HeroStyles.ContentContainer +
            " " +
            HeroStyles.ContentContainerBreakpointStyles
          }
        >
          <h1
            className={
              HeroStyles.Content_h1 +
              " " +
              HeroStyles.Content_h1BreakpointStyles
            }
          >
            Visayas Socio-Economic <br /> Research and Data <br /> Analytics
            Center
          </h1>
          <h2
            className={
              HeroStyles.Content_h2 +
              " " +
              HeroStyles.Content_h2BreakpointStyles
            }
          >
            Established to serve as a repository of socio-economic <br /> and
            demographic data in the Visayas.{" "}
          </h2>
          <button
            onClick={() => scrollTo("#HomeSectionTwoContainer")}
            className={
              HeroStyles.LearnMoreButton +
              " " +
              HeroStyles.LearnMoreButtonBreakpointStyles
            }
          >
            Learn more
          </button>
        </div>

        {/* Hero Animation */}
        <motion.div
          className={
            HeroAnimationStyles.HeroAnimationContainer +
            " " +
            HeroAnimationStyles.HeroAnimationContainerBreakpointStyles
          }
          id="Hero-Animation"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className={
              HeroAnimationStyles.ChecklistContainer +
              " " +
              HeroAnimationStyles.ChecklistContainerBreakpointStyles
            }
          >
            <Checklist className={HeroAnimationStyles.Checklist} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -40, 0], x: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className={
              HeroAnimationStyles.BarGraphContainer +
              " " +
              HeroAnimationStyles.BarGraphContainerBreakpointStyles
            }
          >
            <BarGraph className={HeroAnimationStyles.BarGraph} />
          </motion.div>

          {/* <PieChart className="absolute z-[4]" /> */}
          {/* <GearGreen className="absolute z-[3]" /> */}
          {/* <GearGray className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]" /> */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className={
              HeroAnimationStyles.AppWindowContainer +
              " " +
              HeroAnimationStyles.AppWindowContainerBreakpointStyles
            }
          >
            <AppWindowSVG className={HeroAnimationStyles.AppWindow} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
