import React from "react";
import styles, { layout } from "../../style";
import Home from "./Home";
import {
  Services,
  Contact,
  Education,
  Footer,
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
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default Hero;
