import React from "react";
import { AboutUsDesktop } from "./navBar Desktop Breakpoint Components/About us (Desktop)";
import { ContactUsDesktop } from "./navBar Desktop Breakpoint Components/Contact us (Desktop)";
import { DatasetsDesktop } from "./navBar Desktop Breakpoint Components/Datasets (Desktop)";
import { PublicationDesktop } from "./navBar Desktop Breakpoint Components/Publication (Desktop)";
import { ServicesOfferedDesktop } from "./navBar Desktop Breakpoint Components/Services Offered (Desktop)";
import { navBarListStyle, navBarStyle } from "./styles/navbarStyles";

export const NavBar = () => {
  return (
    <nav className={navBarStyle}>
      <ul className={navBarListStyle} id="navListContainerDesktop">
        <ServicesOfferedDesktop />
        <DatasetsDesktop />
        <PublicationDesktop />
        <AboutUsDesktop />
        <ContactUsDesktop />
      </ul>
    </nav>
  );
};
