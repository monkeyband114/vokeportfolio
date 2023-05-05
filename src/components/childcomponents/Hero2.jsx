import React from "react";
import styles, { layout } from "../../style";
import Home2 from "./Home2";
import Category from "../Projects/Category";
import Project from "../Projects/Project";

const Hero2 = ({ from }) => {
  console.log(from.state);
  return (
    <div className="justify-center">
      <div
        className={`${styles.paddingX} bg-home-white bg-white dark:bg-darken w-full  sm:h-[100px] h-[100px] object-contain`}
      >
        <Home2 />
      </div>
      <div className={`${layout.section}`}>
        {from.state == null ? <Category /> : <Project from={from} />}
      </div>
    </div>
  );
};

export default Hero2;
