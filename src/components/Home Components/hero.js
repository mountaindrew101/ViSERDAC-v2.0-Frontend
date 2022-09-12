import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { motion } from "framer-motion";

import AppWindowSVG from "./assets/AppWindow.inline.svg";
import BarGraph from "./assets/BarGraph.inline.svg";
import Checklist from "./assets/Checklist.inline.svg";

export const Hero = () => {
  return (
    <div
      className="w-screen h-[50rem] lg:h-[60rem] md:h-[55rem] sm:h-[55rem] xs:h-[50rem] lg:bg-[#003D00]"
      id="Hero"
    >
      <div
        id="mainBG"
        className="h-[50rem] md:h-1 lg:h-[6rem] xs:h-0 xs:-mt-6 bg-[#003D00] flex flex-row items-center justify-center space-x-10 xl:space-x-0 lg:flex-col"
      >
        <div
          id="gradientWhite"
          className="absolute bg-gradient-radial from-white to-[#003D00] rounded-full scale-150 h-[25rem] w-[25rem] blur-2xl opacity-30 lg:top-10"
        ></div>
        <div className="flex flex-col space-y-4 self-start lg:self-center md:justify-center mt-[13rem] ml-[-10rem] xl:mt-[15rem] lg:mt-[20rem]">
          <h1 className="text-[#FDCB00] font-bold text-5xl text-start drop-shadow-thicknearwhite xs:text-[1.65rem] md:text-[2.2rem] sm:text-[2rem] lg:text-center xl:text-[2.5rem]">
            Visayas Socio-Economic <br /> Research and Data <br /> Analytics
            Center
          </h1>
          <h2 className="font-bold text-2xl text-white drop-shadow-thicknear pb-7 lg:pb-3 whitespace-nowrap xl:text-[1.15rem] md:leading-5 md:text-[1rem] sm:text-center sm:text-[0.8rem] xs:leading-4 xs:text-[0.7rem]">
            Established to serve as a repository of socio-economic <br /> and
            demographic data in the Visayas.{" "}
          </h2>
          <button className="lg:hidden hover:scale-110 transition duration-300 ease-in-out hover:bg-white hover:text-[#476930] active:bg-[#476930] active:text-white active:scale-100 bg-[#476930] text-white rounded-full pt-3 pb-3 w-[12rem] font-medium text-md drop-shadow-thicknear">
            Learn more
          </button>
        </div>

        {/* Hero Animation */}
        <motion.div
          className="self-start lg:self-center lg:pt-0 pt-20 h-[30rem] w-[28rem] xl:w-[32rem]"
          id="Hero-Animation"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute z-[6] xs:mt-[20rem] sm:mt-[25rem] mt-[20rem] ml-[7rem]"
          >
            <Checklist className="h-[15rem] xl:h-[13rem] sm:h-[14rem] xs:h-[12rem]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -40, 0], x: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="z-[5] absolute sm:mt-[6rem] mt-[3rem] ml-[6rem] xs:ml-[5rem] xl:mt-[5rem]"
          >
            <BarGraph className="h-[17rem] xl:h-[15rem] sm:h-[15rem] xs:h-[13rem]" />
          </motion.div>

          {/* <PieChart className="absolute z-[4]" /> */}
          {/* <GearGreen className="absolute z-[3]" /> */}
          {/* <GearGray className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]" /> */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="z-[1] absolute"
          >
            <AppWindowSVG className="z-[1] absolute xl:h-[38rem] xs:h-[32rem] xs:ml-10 sm:h-[40rem] sm:ml-6 xl:mt-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolldown Button */}
      <div className="flex items-center justify-center -mt-8 lg:hidden drop-shadow-thicknear overflow-visible">
        <button
          id="HomeBody"
          onClick={() => scrollTo("#HomeBody")}
          className="transition duration-[550ms] ease-in-out rounded-full hover:scale-125 bg-yellow-300 hover:bg-[#476930] active:bg-yellow-300 active:duration-75 active:scale-100 h-[4rem] w-[4rem]"
        >
          <div className="transition duration-[550ms] ease-in-out rounded-full hover:scale-105 bg-[#476930] hover:bg-white active:bg-[#476930] active:scale-100 h-[4rem] w-[4rem] -mt-1 flex items-center justify-center text-white active:text-white hover:text-[#476930]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
