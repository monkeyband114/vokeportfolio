import React from "react";
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
} from "./components";

import { Hero, Navbar, About } from "./components/childcomponents";
import styles from "./style";

const App = () => {
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

export default App;
