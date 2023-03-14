import React from 'react'
import { motion } from 'framer-motion';


import Trainings from "./graphics/Trainings.inline.svg"
import { ServicesOfferedItemsStyle } from "../styles/servicesOfferedStyles";
import SampleTrainings from "./graphics/SampleTrainings.inline.svg"
export const TrainingsSVCS = () => {
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
            >Trainings
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
                >Get trained by us! 

                </div>
                <div
                  id="Description"
                  className={ServicesOfferedItemsStyle.PtOne_Description}
                >
                  We do capacity building activities for socio-economic researchers.
We offer programmed trainings and/or on-request trainings.
                 
                </div>
              </div>
              <div
                id="PtTwoContainer"
                className={ServicesOfferedItemsStyle.PtTwoContainer}
              >
                <Trainings />
              </div>
            </div>
            <div
              className={ServicesOfferedItemsStyle.SectionTwo}
              id="SectionTwo"
            >
                <SampleTrainings />
            </div>
          </motion.div>
    )
}