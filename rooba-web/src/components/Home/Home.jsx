import React from "react";
import styles from "./home.module.scss";
import Hero from "../Hero/Hero";
import Opportunities from "../Opportunities/Opportunities";
import Explore from "../Explore/Explore";
import Invest from "../Invest/Invest";
import InvestClub from "../InvestClub/InvestClub";
import Partner from "../Partner/Partner";
import Contact from "../Contact/Contact";
import GraphAlternative from "../GraphAlternative/GraphAlternative";
const Home = () => {
  return (
    <>
      <Hero />
      <Opportunities />
      <GraphAlternative />
      <Explore />
      <Invest />
      <InvestClub />
      <Partner />
      <Contact />
    </>
  );
};

export default Home;
