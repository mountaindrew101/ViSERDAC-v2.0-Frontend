import React from "react";
import { Footer } from "./footer";
import { layoutContainerStyle } from "./styles/layoutStyles";
import { Header } from "./header";

export const Layout = ({ children }) => {
  // document.addEventListener("contextmenu", (event) => event.preventDefault());
  return (
    <div className={layoutContainerStyle} id="layoutContainer">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
