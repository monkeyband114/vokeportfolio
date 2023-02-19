import React from "react";
import styles, { layout } from "../../style";
import Home2 from "./Home2";

const Hero2 = () => {
  return (
    <div className="justify-center">
      <div
        className={`${styles.paddingX} bg-home-white bg-white dark:bg-darken w-full  sm:h-[100px] h-[100px] object-contain`}
      >
        <Home2 />
      </div>
    </div>
  );
};

export default Hero2;
