import React, { useEffect, useState } from "react";
import { Footer } from "./footer";
import { layoutContainerStyle } from "./styles/layoutStyles";
import { Header } from "./header";
import ViSERDACLottieLoader from "../components/lottie/ViSERDAC-LottieLoader";
import { motion } from "framer-motion";

export const Layout = ({ children }) => {
  // document.addEventListener("contextmenu", (event) => event.preventDefault());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(loader);
  }, []);
  return (
    <div>
      {loading === false ? (
        <div className={layoutContainerStyle} id="layoutContainer">
          <Header />
          {children}
          <Footer />
        </div>
      ) : (
        <div
          className="flex items-center justify-center w-screen h-screen"
          id="Loading Screen"
        >
          <motion.div
            className="h-20 w-20 rounded-full absolute bg-gradient-radial from-white to-[#FDCB00] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, x: "-30px", y: "-10px" }}
            animate={{ scale: 100, x: "-30px", y: "-10px" }}
            transition={{ delay: 0.5, duration: 2 }}
          ></motion.div>
          <div className="-translate-y-4">
            <ViSERDACLottieLoader />
          </div>
        </div>
      )}
    </div>
  );
};
