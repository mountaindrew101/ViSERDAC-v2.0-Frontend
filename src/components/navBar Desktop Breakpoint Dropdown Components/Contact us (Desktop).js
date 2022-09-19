import { Link } from "gatsby";
import React from "react";
import {
  navListItemStyle,
  listItemGreenBarStyle,
} from "../styles/navbarStyles";
import { motion } from "framer-motion";
import { hoverExpand } from "../styles/navbarStyles";

export const ContactUsDesktop = () => {
  return (
    <motion.div
      initial={{ y: "-20px", rotate: 1, opacity: 0 }}
      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        delay: 0.3,
        stiffness: 100,
      }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group"
      >
        <li>
          <Link to="/" className={navListItemStyle}>
            Contact us
          </Link>
          <motion.span
            variants={hoverExpand}
            className={`w-[5.3rem] ${listItemGreenBarStyle}`}
            id="listItemGreenBar"
          ></motion.span>
        </li>
      </motion.div>
    </motion.div>
  );
};
