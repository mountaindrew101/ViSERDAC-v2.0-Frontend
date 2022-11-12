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

// TODO: HOMEPAGE => [ViSERDAC Statistics, Avail our services now, ViSERDAC Video]
// TODO: Error 404 Page
// // TODO: Graphql => [API fetching]
// TODO: Back-end deployment - Heroku w/posgresql
// TODO: SEO & Helmet
// TODO: About us - LinkedIn accs
