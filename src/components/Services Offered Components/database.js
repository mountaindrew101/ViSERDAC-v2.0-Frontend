import React from 'react'
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import Database from "./graphics/Data.inline.svg"
import { ServicesOfferedItemsStyle } from "../styles/servicesOfferedStyles";

export const DatabaseSVCS = () => {
    return (
        <motion.div
            initial={{ x: "-50px", rotate: 1, opacity: 0 }}
            whileInView={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              delay: 0.1,
              stiffness: 100,
            }}
            className={
              ServicesOfferedItemsStyle.ItemContainer +
              " " +
              ServicesOfferedItemsStyle.ItemContainerBreakpointStyles
            }
            id="ServicesOfferedItemContainer"
          >
            <span
              className={
                ServicesOfferedItemsStyle.Title +
                " " +
                ServicesOfferedItemsStyle.TitleBreakpointStyles
              }
              id="Title"
            >Database
            </span>
            <div
              className={
                ServicesOfferedItemsStyle.SectionOne +
                " " +
                ServicesOfferedItemsStyle.SectionOneBreakpointStyles
              }
              id="SectionOne"
            >
              <div
                className={
                  ServicesOfferedItemsStyle.PtOne +
                  " " +
                  ServicesOfferedItemsStyle.PtOneBreakpointStyles
                }
                id="PtOne"
              >
                <div
                  className={
                    ServicesOfferedItemsStyle.PtOne_Subtitle +
                    " " +
                    ServicesOfferedItemsStyle.PtOne_SubtitleBreakpointStyles
                  }
                  id="Subtitle"
                >We believe that Socio-Economics data should be shared among interested researchers in the Philippines. 

                </div>
                  <button
                    className={
                      ServicesOfferedItemsStyle.PtOne_Button
                    }
                    id="Button"
                  >
                    <span>Download Datasets</span>
                    <div
                      id="Button Image Container"
                      className="w-[10px] flex justify-center"
                    >
                        <StaticImage src='./images/downloadIcon.png' />
                    </div>
                  </button>

              </div>
              <div
                id="PtTwoContainer"
                className={ServicesOfferedItemsStyle.PtTwoContainer}
              >
                <Database />
              </div>
            </div>
            <div
              className={ServicesOfferedItemsStyle.SectionTwo}
              id="SectionTwo"
            >
            </div>
          </motion.div>
    )
}