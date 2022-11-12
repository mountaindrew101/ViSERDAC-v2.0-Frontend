// ! warn: empty strings should be included in between className concatenations for the styles to work properly

import React from "react";
import { Layout } from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { items } from "../components/Services Offered Components/servicesOfferedItems";

import {
  ServicesOfferedContainer,
  ServicesOfferedItemsStyle,
} from "../components/styles/servicesOfferedStyles";

const ServicesOffered = ({ data }) => {
  const ServicesOfferedItems = items;
  const ServicesOfferedItemsAscending = []
    .concat(ServicesOfferedItems)
    .sort((a, b) => (a.Order_Number > b.Order_Number ? 1 : -1));
  console.log(ServicesOfferedItemsAscending);

  return (
    <Layout>
      <div className={ServicesOfferedContainer} id="ServicesOfferedContainer">
        {/* Item Iteration */}
        {ServicesOfferedItemsAscending.map((Item) => (
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
            key={Item.Title}
          >
            <span
              className={
                ServicesOfferedItemsStyle.Title +
                " " +
                ServicesOfferedItemsStyle.TitleBreakpointStyles
              }
              id="Title"
            >
              {Item.Title}
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
                >
                  {Item.Subtitle}
                </div>
                <div
                  id="Description"
                  className={
                    Item.Description === null
                      ? "invisible"
                      : ServicesOfferedItemsStyle.PtOne_Description
                  }
                >
                  {Item.Description}
                </div>
                <a
                  href={Item.Button_Link === null ? "" : Item.Button_Link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className={
                      Item.Button === false
                        ? "invisible"
                        : ServicesOfferedItemsStyle.PtOne_Button
                    }
                    id="Button"
                  >
                    <span>{Item.Button_Text}</span>
                    <div
                      id="Button Image Container"
                      className="w-[10px] flex justify-center"
                    >
                      {Item.Button_Icon === null ? (
                        <div></div>
                      ) : (
                        <GatsbyImage
                          image={
                            Item.Button_Icon.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt=""
                        />
                      )}
                    </div>
                  </button>
                </a>
              </div>
              <div
                id="PtTwoContainer"
                className={ServicesOfferedItemsStyle.PtTwoContainer}
              >
                {Item.Graphics === null ? (
                  <span></span>
                ) : (
                  <GatsbyImage
                    className={
                      ServicesOfferedItemsStyle.PtTwo +
                      " " +
                      ServicesOfferedItemsStyle.PtTwoBreakpointStyles
                    }
                    image={
                      Item.Graphics.localFile.childImageSharp.gatsbyImageData
                    }
                    alt=""
                    id="Graphics"
                  />
                )}
              </div>
            </div>
            <div
              className={ServicesOfferedItemsStyle.SectionTwo}
              id="SectionTwo"
            >
              {Item.Content_Image === null ? (
                <span></span>
              ) : (
                <GatsbyImage
                  image={
                    Item.Content_Image.localFile.childImageSharp.gatsbyImageData
                  }
                  alt=""
                />
              )}
            </div>
          </motion.div>
        ))}
        <div
          id="SectionThree"
          className={ServicesOfferedItemsStyle.SectionThree}
        >
          To avail our services, send us an email at{" "}
          <a href="mailto:viserdac@vsu.edu.ph" className="underline">
            viserdac@vsu.edu.ph
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesOffered;
