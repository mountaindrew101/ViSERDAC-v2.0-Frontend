import { Link } from "gatsby";
import React from "react";
import {
  navListItemStyle,
  listItemGreenBarStyle,
  ArrowNavStyle,
  groupController,
  desktopDropdownContainerStyle,
  navDropdownMapStyle,
  desktopDropdownSubContainerStyle,
} from "../styles/navbarStyles";
import { motion } from "framer-motion";
import { hoverExpand } from "../styles/navbarStyles";
import { ArrowNav } from "../assets/arrowDownSVG";
import { aboutUsDropdownList } from "./About us Dropdown List";

export const AboutUsDesktop = () => {
  return (
    <motion.div
      initial={{ y: "-20px", rotate: 1, opacity: 0 }}
      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        delay: 0.25,
        stiffness: 100,
      }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group"
      >
        <li className={groupController}>
          <Link to="/" className={navListItemStyle}>
            About us
            <ArrowNav ArrowClasses={ArrowNavStyle} />
          </Link>
          <motion.span
            variants={hoverExpand}
            className={`w-[5.5rem] ${listItemGreenBarStyle}`}
            id="listItemGreenBar"
          ></motion.span>
          <div
            className={`${desktopDropdownContainerStyle} ml-[-10rem]`}
            id="aboutUsDropdownContainer"
          >
            <div
              className={desktopDropdownSubContainerStyle}
              id="aboutUsDropdownSubContainer"
            >
              {aboutUsDropdownList.map((list) => (
                <Link
                  key={list.title}
                  id="aboutUsListItem"
                  to={list.link}
                  className={navDropdownMapStyle}
                >
                  {list.title}
                </Link>
              ))}
            </div>
          </div>
        </li>
      </motion.div>
    </motion.div>
  );
};
