import React from "react";
import styles, { layout } from "../../style";
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

const Hero = () => {
  return (
    <div className="justify-center">
      <div
        className={`${styles.paddingX} bg-home-white bg-white dark:bg-darken w-full  sm:h-[450px] h-[800px] object-contain`}
      >
        <Home />
      </div>
      <div className={`${layout.section}`}>
        <Services />
        <Priceplans />
        <Recomendations />
        <Education />
        <Workhistory />
        <Portfolio />
        <Contact />
        <Blog />
        <Map />
        <Footer />
      </div>
    </div>
  );
};
export default Hero;
