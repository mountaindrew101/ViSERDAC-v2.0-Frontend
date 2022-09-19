import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import {
  groupController,
  listItemGreenBarStyle,
  navListItemStyle,
} from "../styles/navbarStyles";
import { hoverExpand } from "../styles/navbarStyles";

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
          <Link to="/servicesOffered" className={`${navListItemStyle}`}>
            Services Offered
          </Link>
          <motion.span
            variants={hoverExpand}
            className={`w-[7.9rem] ${listItemGreenBarStyle}`}
            id="listItemGreenBar"
          ></motion.span>
        </li>
      </motion.div>
    </motion.div>
  );
};
