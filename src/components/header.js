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
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ViSERDACLogo from "./assets/ViSERDAC-Logo-Landscape.inline.svg";
import { BackToTop } from "./backToTop";

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
          <AniLink
            hex="#003D00"
            paintDrip
            to="/"
            className={headerLogoDesktopStyle}
            id="ViSERDAC Logo"
          >
            <ViSERDACLogo />
          </AniLink>
          <div className={gapControllerStyle} id="gapController"></div>
          <NavBar />
        </div>
      </header>
      <div className="sticky">
        <BackToTop />
      </div>
    </motion.div>
  );
};
