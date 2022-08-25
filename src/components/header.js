import React from "react";
import { NavBar } from "./navbar";
import {
  headerContainerStyle,
  gapControllerStyle,
  headerSubContainerStyle,
  yellowBarStyle,
  headerLogoDesktopStyle,
} from "./styles/headerStyles";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import ViSERDACLogo from "./assets/ViSERDAC-Logo-Landscape.inline.svg";

export const Header = () => {
  return (
    <motion.div
      initial={{
        y: -50,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
        type: "spring",
        delay: 0.15,
        stiffness: 100,
      }}
    >
      <header className={headerContainerStyle} id="headerContainer">
        <div className={yellowBarStyle} id="yellowBar"></div>
        <div className={headerSubContainerStyle} id="headerSubContainer">
          <Link to="/" className={headerLogoDesktopStyle} id="ViSERDAC Logo">
            <ViSERDACLogo />
          </Link>
          <div className={gapControllerStyle} id="gapController"></div>
          <NavBar />
        </div>
      </header>
    </motion.div>
  );
};
