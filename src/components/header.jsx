// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";
import { useRef } from "react";
import { NavBar } from "./navbar";

import {
  headerContainerStyle,
  gapControllerStyle,
  headerSubContainerStyle,
  yellowBarStyle,
  headerLogoDesktopStyle,
  backToTopContainerStyle,
  backToTopTextStyles,
  backToTopParentContainerStyle,
} from "./styles/headerStyles";

import { motion } from "framer-motion";
import { Link } from "gatsby";

import ViSERDACLogo from "./assets/ViSERDAC-Logo-Landscape.inline.svg";
import { BackToTop } from "./backToTop";

import useOnScreen from "./hooks/useOnScreenHook";

export const Header = () => {
  const ref = useRef();
  let isVisible = useOnScreen(ref);

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
      className="relative z-50"
    >
      <header
        className={
          headerContainerStyle.Main + " " + headerContainerStyle.Breakpoints
        }
        id="headerContainer"
      >
        <div className={yellowBarStyle} id="yellowBar"></div>
        <div
          className={
            headerSubContainerStyle.Main +
            " " +
            headerSubContainerStyle.Breakpoints
          }
          id="headerSubContainer"
          ref={ref}
        >
          <Link
            to="/"
            className={
              headerLogoDesktopStyle.Main +
              " " +
              headerLogoDesktopStyle.Breakpoints
            }
            id="ViSERDAC Logo"
          >
            <ViSERDACLogo />
          </Link>
          <div className={gapControllerStyle} id="gapController"></div>
          <NavBar />
        </div>
      </header>

      <div
        id="BackToTopParentContainer"
        className={backToTopParentContainerStyle}
      >
        <div
          id="backToTopContainer"
          className={
            isVisible
              ? backToTopContainerStyle.Invisible
              : backToTopContainerStyle.Visible
          }
        >
          <BackToTop
            backToTopTextStyle={
              isVisible
                ? backToTopTextStyles.Invisible
                : backToTopTextStyles.Visible
            }
          />
        </div>
      </div>
    </motion.div>
  );
};
