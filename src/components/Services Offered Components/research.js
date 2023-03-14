import React from 'react'
import { motion } from 'framer-motion';


import Analyze from "./graphics/Analyze.inline.svg"
import { ServicesOfferedItemsStyle } from "../styles/servicesOfferedStyles";

export const ResearchSVCS = () => {
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
            >Research
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
                >We conduct socio-economic research studies of government and non-government agencies. 

                </div>
                <div
                  id="Description"
                  className={ServicesOfferedItemsStyle.PtOne_Description}
                >
                  Research studies include <span className='text-[#003D00] italic'>Baseline studies, Valuation studies, 
Impact assessment</span>  and etc.
                 
                </div>
              </div>
              <div
                id="PtTwoContainer"
                className={ServicesOfferedItemsStyle.PtTwoContainer}
              >
                <Analyze />
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