import React from "react";
import { Layout } from "../components/layout";
import { Hero } from "../components/Home Components/hero";
import { HomeSectionTwo } from "../components/Home Components/homeSectionTwo";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HomeSectionTwo />
    </Layout>
  );
};

export default Home;
