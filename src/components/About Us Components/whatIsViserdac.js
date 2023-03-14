import React from "react";
import { motion } from "framer-motion";

import { WhatIsViserdacStyles } from "../styles/aboutUsComponentStyles";
import { Link } from "gatsby";

export const WhatIsViserdac = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={WhatIsViserdacStyles.SectionOneContainer}
        id="SectionOneContainer"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.15,
            stiffness: 80,
          }}
          className={WhatIsViserdacStyles.SectionOneWhatIsViserdacContainer}
        >
          <span
            className={
              "ml-[5rem] md:ml-[3rem]" +
              " " +
              WhatIsViserdacStyles.SectionOneWhatIsViserdac
            }
          >
            What is
          </span>
          <span className={WhatIsViserdacStyles.SectionOneWhatIsViserdac}>
            ViSERDAC{" "}
            <span className="absolute text-[10rem] font-Metropolis md:text-[8rem]">
              ?
            </span>
          </span>
        </motion.div>
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
              type: "spring",
              delay: 0.25,
              stiffness: 80,
            }}
            className={WhatIsViserdacStyles.SectionOneWeSpecializeContainer}
            id="WeSpecializeContainer"
          >
            <span className={WhatIsViserdacStyles.SectionOneWeSpecialize}>
              We specialize in Socio-Economic <br />
            </span>
            <span
              className={
                "pl-10" + " " + WhatIsViserdacStyles.SectionOneWeSpecialize
              }
            >
              Research and Development.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
              type: "spring",
              delay: 0.35,
              stiffness: 80,
            }}
            className={WhatIsViserdacStyles.SectionOneWeSpecializeSubtext}
          >
            The Visayas Socio-Economic Research and Data Analytics Center
            (ViSERDAC) is one of the three (3) newly established socio-economic
            centers in the Philippines funded by DOST-PCAARRD.
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.4,
          stiffness: 80,
        }}
        id="SectionTwoContainer"
        className={WhatIsViserdacStyles.SectionTwoContainer}
      >
        <span className={WhatIsViserdacStyles.SectionTwo}>
          We aim to{" "}
          <span className={WhatIsViserdacStyles.SectionTwoSpan}>enhance</span>{" "}
          the capacity of socio-economic research in the
          <span className={WhatIsViserdacStyles.SectionTwoSpan}>
            {" "}
            Visayas
          </span>{" "}
          and tap the potential of the socioeconomic R&D sector in
          <span> providing technical assistance</span> to the other research
          sectors (e.g. crops, livestock, forestry, fishery, etc.).
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          delay: 0.45,
          stiffness: 80,
        }}
        id="SectionThreeContainer"
        className={WhatIsViserdacStyles.SectionThree}
      >
        The
        <strong>
          {" "}
          Visayas Socio-Economic Research and Data Analytics Center (ViSERDAC){" "}
        </strong>
        is established to address the current gap that facility development in
        the Philippines are mostly concentrated on physical-based commodities
        and none devoted for socio-economics. According to the initial data of
        PCAARRD, there have been 23 facilities devoted for commodity based
        products. Moreover, ViSERDAC is established because the demand for
        socio-economic research is increasing which is manifested with the
        increasing need of institutions to assess impact of technology and
        interventions in the community.
        <br />
        <br />
        This project also addresses the problem of using of ingenuine licenses
        for socio-economic analysis. ViSERDAC is equipped with 10 desktop
        computers with genuine software licenses as well as books and journals
        that researchers can access for their R&D projects for free. The
        ViSERDAC team also provide trainings, seminars, consultancy services,
        and technical assistance to other R&D sectors.{" "}
        <Link
          to="../../pages/servicesOffered.js"
          className="text-[#003D00] hover:underline font-bold"
        >
          Click here for more details.
        </Link>
        <br />
        <br />
        ViSERDAC aims to serve as a repository of socio-economic and demographic
        data in the Visayas. Anyone can browse and download open-access datasets
        of research studies. Data is licensed under a Creative Commons
        Attribution 4.0 International License.{" "}
        <a className="text-[#003D00] hover:underline font-bold" href="/">
          Click here for more details.
        </a>
      </motion.div>
    </div>
  );
};
