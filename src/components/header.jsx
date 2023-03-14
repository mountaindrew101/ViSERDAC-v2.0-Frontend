// ! warn: empty strings should be included in between className concatenations for the styles to work

import React from "react";
import { useRef } from "react";


import { AboutUsDesktop } from "./navBar Desktop Breakpoint Components/About us (Desktop)";
import { ContactUsDesktop } from "./navBar Desktop Breakpoint Components/Contact us (Desktop)";
import { DatasetsDesktop } from "./navBar Desktop Breakpoint Components/Datasets (Desktop)";
import { PublicationDesktop } from "./navBar Desktop Breakpoint Components/Publication (Desktop)";
import { ServicesOfferedDesktop } from "./navBar Desktop Breakpoint Components/Services Offered (Desktop)";
import { navBarListStyle, navBarStyle } from "./styles/navbarStyles";

import {
  headerContainerStyle,
  gapControllerStyle,
  headerSubContainerStyle,
  yellowBarStyle,
  headerLogoDesktopStyle,
  backToTopContainerStyle,
  backToTopTextStyles,
  backToTopParentContainerStyle,
  mobileMenu,
  mobileMenuBar,
} from "./styles/headerStyles";

import { motion } from "framer-motion";
import { Link } from "gatsby";

import ViSERDACLogoMobile from "./assets/ViSERDAC-logo-mobile.inline.svg"
import ViSERDACLogo from "./assets/ViSERDAC-Logo-Landscape.inline.svg";
import { BackToTop } from "./backToTop";

import useOnScreen from "./hooks/useOnScreenHook";
import { useState } from "react";

export const Header = () => {
  const ref = useRef();
  let isVisible = useOnScreen(ref);

  const [Menu, ShowMenu] = useState(false);
  const ToggleMenu = () => {
    ShowMenu(!Menu);
  }


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
            <ViSERDACLogoMobile className="hidden md:block drop-shadow-thicknear" />
            <ViSERDACLogo className="block md:hidden" />
          </Link>
          <div className={gapControllerStyle} id="gapController"></div>
          <button className={mobileMenu} onClick={ToggleMenu} onKeyDown={ToggleMenu}>
            <span className={mobileMenuBar}></span>
            <span className={mobileMenuBar}></span>
            <span className={mobileMenuBar}></span>
          </button>
          <nav className={Menu ? navBarStyle.Active : navBarStyle.Inactive} id="NavBar">
      <ul className={navBarListStyle} id="navListContainerDesktop">
        <ServicesOfferedDesktop />
        <DatasetsDesktop />
        <PublicationDesktop />
        <AboutUsDesktop />
        <ContactUsDesktop />
      </ul>
    </nav>
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
