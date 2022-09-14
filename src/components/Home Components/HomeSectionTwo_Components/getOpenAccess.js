import { motion } from "framer-motion";
import React from "react";
import { GetOpenAccessStyles } from "../../styles/homeSectionTwoStyles";

const GetOpenAccess = () => {
  return (
    <motion.div
      initial={{ x: "100px", rotate: 10, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        type: "spring",
        delay: 0.1,
        stiffness: 150,
      }}
      className={
        GetOpenAccessStyles.MainContainer +
        " " +
        GetOpenAccessStyles.MainContainerBreakpointStyles
      }
    >
      <div
        className={
          GetOpenAccessStyles.ContentContainer +
          " " +
          GetOpenAccessStyles.ContentContainerBreakpoints
        }
      >
        <h3
          className={
            GetOpenAccessStyles.Content_h3Title +
            " " +
            GetOpenAccessStyles.Content_h3TitleBreakpointStyles
          }
        >
          Get open-access <br /> datasets of <br /> research studies
        </h3>
        <h3
          className={
            GetOpenAccessStyles.Content_h3Subtitle +
            " " +
            GetOpenAccessStyles.Content_h3SubtitleBreakpointStyles
          }
        >
          All data is licensed under a <br />
          <strong>
            Creative Commons Attribution 4.0 International License
          </strong>
        </h3>
        <button
          className={
            GetOpenAccessStyles.Button +
            " " +
            GetOpenAccessStyles.ButtonBreakpointStyles
          }
        >
          Click here to download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 lg:mt-0 mt-1 xs:mt-[0.15rem] ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default GetOpenAccess;
