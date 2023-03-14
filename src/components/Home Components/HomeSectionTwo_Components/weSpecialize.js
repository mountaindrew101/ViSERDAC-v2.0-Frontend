// ! warn: empty strings should be included in between className concatenations for the styles to work

import { motion } from "framer-motion";
import React from "react";
import { Link } from "gatsby"
import { WeSpecializeStyles } from "../../styles/homeSectionTwoStyles";

const WeSpecialize = () => {
  return (
    <motion.div
      id="WeSpecialize"
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
        WeSpecializeStyles.MainContainer +
        " " +
        WeSpecializeStyles.MainContainerBreakpoints
      }
    >
      <div
        className={
          WeSpecializeStyles.ContentContainer +
          " " +
          WeSpecializeStyles.ContentContainerBreakpoints
        }
      >
        <h3
          className={
            WeSpecializeStyles.Content_h3 +
            " " +
            WeSpecializeStyles.Content_h3BreakpointStyles
          }
        >
          We specialize in <br />
          Socio-Economic Research and Development
        </h3>
        <Link to="/aboutUs"
          className={
            WeSpecializeStyles.Button +
            " " +
            WeSpecializeStyles.ButtonBreakpointStyles
          }
        >
          Learn more about us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mt-1 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default WeSpecialize;
