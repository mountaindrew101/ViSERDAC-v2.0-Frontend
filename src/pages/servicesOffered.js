// ! warn: empty strings should be included in between className concatenations for the styles to work

import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  ServicesOfferedContainer,
  ServicesOfferedItemsStyle,
} from "../components/styles/servicesOfferedStyles";

const ServicesOffered = ({ data }) => {
  const ServicesOfferedItems = data.allStrapiServicesOffered.nodes;

  // console.log(ServicesOfferedItems);

  return (
    <Layout>
      <div className={ServicesOfferedContainer} id="ServicesOfferedContainer">
        {/* Item Iteration */}
        {ServicesOfferedItems.map((Item) => (
          <div
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
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ServicesOffered;

// ? Data query
export const query = graphql`
  query ServicesOfferedQuery {
    allStrapiServicesOffered {
      nodes {
        Button
        Order_Number
        Description
        Title
        Subtitle
        Button_Text
        Graphics {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        Button_Icon {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
        Content_Image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        Button_Link
      }
    }
  }
`;
