import React from "react";
import styles from "../../style";
import Home from "./Home";
import {
  Blog,
  Services,
  Contact,
  Education,
  Footer,
  Map,
  Portfolio,
  Priceplans,
  Recomendations,
  Workhistory,
} from "../../components";

const Hero = () => (
  <div className="justify-center">
    <div
      className={`${styles.paddingX}  bg-home-white dark:bg-home-dark w-full  h-[450px]`}
    >
      <Home />
    </div>
    <div>
      <Services />
      <Priceplans />
      <Recomendations />
      <Education />
      <Workhistory />
      <Portfolio />
      <Blog />
      <Contact />
      <Map />
      <Footer />
    </div>
  </div>
);

export default Hero;
