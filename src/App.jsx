import React from "react";
import {
  Blog,
  Services,
  Contact,
  Education,
  Footer,
  Header,
  Map,
  Portfolio,
  Priceplans,
  Recomendations,
  Workhistory,
} from "./components";

import styles from "./style";

import useDarkmode from "./hooks/useDarkmode";

const App = () => {
  // useDarkmode();
  return (
    <div className="bg-primary dark:bg-fullBlack dark:text-white  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
