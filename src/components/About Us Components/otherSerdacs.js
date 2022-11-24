import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import { OtherSERDACsStyles } from "../styles/aboutUsComponentStyles";

import MapLuzon from "./assets/Luzon.inline.svg";
import MapVisayas from "./assets/Visayas.inline.svg";
import MapMindanao from "./assets/Mindanao.inline.svg";

export const OtherSERDACs = () => {
  const [LuzonHover, LuzonHovered] = useState(false);
  const [VisayasHover, VisayasHovered] = useState(false);
  const [MindanaoHover, MindanaoHovered] = useState(false);

  const LogoWidth = "100%";
  return (
    <div id="Container" className={OtherSERDACsStyles.Container}>
      <div id="Title" className={OtherSERDACsStyles.Title}>
        Other <span className="text-[4rem]">SERDACs</span> in the Philippines
      </div>
      <div id="Subcontainer" className={OtherSERDACsStyles.Subcontainer}>
        <div id="Map" className={OtherSERDACsStyles.Map}>
          <div>
            <MapLuzon
              className={
                LuzonHover
                  ? OtherSERDACsStyles.MapComponents +
                    " " +
                    OtherSERDACsStyles.MapComponentHover
                  : OtherSERDACsStyles.MapComponents
              }
            />
            <MapVisayas
              className={
                VisayasHover
                  ? "mt-[-14rem] ml-[7rem] scale-[.70]" +
                    " " +
                    OtherSERDACsStyles.MapComponents +
                    " " +
                    OtherSERDACsStyles.MapComponentHover
                  : "mt-[-14rem] ml-[7rem] scale-[.70]" +
                    " " +
                    OtherSERDACsStyles.MapComponents
              }
            />
            <MapMindanao
              className={
                MindanaoHover
                  ? "mt-[-6rem] ml-[4.7rem] scale-110" +
                    " " +
                    OtherSERDACsStyles.MapComponents +
                    " " +
                    OtherSERDACsStyles.MapComponentHover
                  : "mt-[-6rem] ml-[4.7rem] scale-110" +
                    " " +
                    OtherSERDACsStyles.MapComponents
              }
            />
          </div>
        </div>
        <div
          id="SERDACsContainer"
          className={OtherSERDACsStyles.SERDACsContainer}
        >
          <a
            href="https://ph.linkedin.com/in/maria-excelsis-orden-151201104"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => LuzonHovered(true)}
            onMouseLeave={() => LuzonHovered(false)}
            id="SERDACLuzon"
            className={OtherSERDACsStyles.SERDACsSubcontainer}
          >
            <div className={OtherSERDACsStyles.SERDACsLogo}>
              <StaticImage
                src="./assets/CLSU Logo-01.png"
                alt=""
                layout="constrained"
              />
            </div>
            <div className={OtherSERDACsStyles.SERDACsText}>
              <span className={OtherSERDACsStyles.SERDACsTextTitle}>
                SERDAC Luzon
              </span>
              <span className={OtherSERDACsStyles.SERDACsTextSubtitle}>
                Dr. Maria Excelsis M. Orden
              </span>
            </div>
          </a>
          <a
            href="https://ph.linkedin.com/in/moises-neil-seri%C3%B1o-9b8b0912/tl?trk=people-guest_people_search-card"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => VisayasHovered(true)}
            onMouseLeave={() => VisayasHovered(false)}
            id="SERDACVisayas"
            className={OtherSERDACsStyles.SERDACsSubcontainer}
          >
            <div className={OtherSERDACsStyles.SERDACsLogo}>
              <StaticImage
                src="./assets/VSU Logo-01.png"
                alt=""
                layout="constrained"
                imgStyle={LogoWidth}
              />
            </div>
            <div className={OtherSERDACsStyles.SERDACsText}>
              <span className={OtherSERDACsStyles.SERDACsTextTitle}>
                SERDAC Visayas
              </span>
              <span className={OtherSERDACsStyles.SERDACsTextSubtitle}>
                Dr. Moises Neil V. Seriño
              </span>
            </div>
          </a>
          <a
            href="https://ph.linkedin.com/in/jennifer-hinlo-1917ab15"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => MindanaoHovered(true)}
            onMouseLeave={() => MindanaoHovered(false)}
            id="SERDACMindanao"
            className={OtherSERDACsStyles.SERDACsSubcontainer}
          >
            <div className={OtherSERDACsStyles.SERDACsLogo}>
              <StaticImage
                src="./assets/USEP.png"
                alt=""
                layout="constrained"
              />
            </div>

            <div className={OtherSERDACsStyles.SERDACsText}>
              <span className={OtherSERDACsStyles.SERDACsTextTitle}>
                SERDAC Mindanao
              </span>
              <span className={OtherSERDACsStyles.SERDACsTextSubtitle}>
                Prof. Jennifer Hinlo
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
