import React from "react";

import { Hero, Navbar, About } from "./childcomponents";
import styles from "../style";

const Top = () => {
  return (
    <div className="bg-primary dark:bg-fullBlack dark:text-white  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className="grid__layout">
            <About />
            <Hero />
            <Navbar />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Top;
