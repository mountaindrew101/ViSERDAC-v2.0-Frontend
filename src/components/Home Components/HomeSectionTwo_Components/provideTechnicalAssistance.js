import { motion } from "framer-motion";
import React from "react";

const ProvideTechnicalAssistance = () => {
  return (
    <motion.div
      initial={{ x: "-100px", rotate: -10, opacity: 0 }}
      whileInView={{ x: 0, rotate: 0, opacity: 1 }}
      transition={{
        duration: 4.2,
        ease: "easeInOut",
        type: "spring",
        delay: 0.2,
        stiffness: 150,
      }}
      className="group lg:mt-0 lg:ml-0 mt-[-4.3rem] ml-10 z-20 min-xl:hover:z-40"
    >
      <div className="transition duration-300 ease-in-out min-xl:group-hover:scale-105 xs:h-[200px] xs:w-[300px] sm:h-[260px] sm:w-[400px] md:h-[200px] md:w-[500px] lg:w-[600px] w-[745px] h-[250px] bg-[#003D00] rounded-[36px] shadow-xl flex flex-col items-center justify-center">
        <h3 className="lg:pr-5 xs:ml-8 xs:leading-6 xs:text-[1.5rem] md:text-[2.1rem] lg:text-4xl text-5xl font-bold text-[#DCE775] self-start ml-10">
          We provide technical <br />
          to research sectors
        </h3>
        <button className="xs:ml-8 xs:text-[0.7rem] xs:p-1 xs:pr-4 xs:pl-4 lg:text-sm transition duration-300 ease-in-out self-start active:bg-[#FDCB00] min-xl:hover:scale-105 bg-[#FDCB00] ml-12 mt-4 p-3 pr-8 pl-8 rounded-[50px] flex flex-row min-xl:hover:bg-white min-xl:hover:-translate-y-1 min-xl:hover:shadow-xl">
          Talk with us
        </button>
      </div>
    </motion.div>
  );
};

export default ProvideTechnicalAssistance;
