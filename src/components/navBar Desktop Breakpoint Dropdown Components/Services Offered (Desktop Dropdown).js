import React from "react";
import { motion } from "framer-motion";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  ArrowNavStyle,
  groupController,
  listItemGreenBarStyle,
  navListItemStyle,
  desktopDropdownContainerStyle,
  navDropdownMapStyle,
  desktopDropdownSubContainerStyle,
} from "../styles/navbarStyles";
import { ArrowNav } from "../assets/arrowDownSVG";
import { hoverExpand } from "../styles/navbarStyles";
import { servicesOfferedDropdownList } from "./Services Offered Dropdown List";

export const ServicesOfferedDesktopDropdown = () => {
  return (
    <motion.div
      initial={{ y: "-20px", rotate: 1, opacity: 0 }}
      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        delay: 0.1,
        stiffness: 100,
      }}
      id="servicesOfferedDesktopListItem"
    >
      <motion.div initial="rest" whileHover="hover" animate="rest">
        <li className={groupController}>
          <AniLink paintDrip to="/" className={`${navListItemStyle}`}>
            Services Offered
            <ArrowNav ArrowClasses={ArrowNavStyle} />
          </AniLink>
          <motion.span
            variants={hoverExpand}
            className={`w-36 ${listItemGreenBarStyle}`}
            id="listItemGreenBar"
          ></motion.span>
          <div
            className={`${desktopDropdownContainerStyle} -ml-2`}
            id="ServicesOfferedDropdownContainer"
          >
            <div
              className={desktopDropdownSubContainerStyle}
              id="ServicesOfferedDropdownSubContainer"
            >
              {servicesOfferedDropdownList.map((list) => (
                <AniLink
                  key={list.title}
                  hex="#003D00"
                  paintDrip
                  to={list.link}
                  className={navDropdownMapStyle}
                >
                  {list.title}
                </AniLink>
              ))}
            </div>
          </div>
        </li>
      </motion.div>
    </motion.div>
  );
};
