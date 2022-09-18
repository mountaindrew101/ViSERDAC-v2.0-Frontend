import React from "react";
import { AboutUsDesktop } from "./navBar Desktop Breakpoint Dropdown Components/About us (Desktop Dropdown)";
import { ContactUsDesktop } from "./navBar Desktop Breakpoint Dropdown Components/Contact us (Desktop)";
import { DatasetsDesktop } from "./navBar Desktop Breakpoint Dropdown Components/Datasets (Desktop)";
import { PublicationDesktop } from "./navBar Desktop Breakpoint Dropdown Components/Publication (Desktop)";
import { ServicesOfferedDesktopDropdown } from "./navBar Desktop Breakpoint Dropdown Components/Services Offered (Desktop Dropdown)";
import { navBarListStyle, navBarStyle } from "./styles/navbarStyles";

export const NavBar = () => {
  return (
    <nav className={navBarStyle}>
      <ul className={navBarListStyle} id="navListContainerDesktop">
        <ServicesOfferedDesktopDropdown />
        <DatasetsDesktop />
        <PublicationDesktop />
        <AboutUsDesktop />
        <ContactUsDesktop />
      </ul>
    </nav>
  );
};
