import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Project from "./Project";
import { About, Hero2, Navbar } from "../childcomponents";
import styles from "../../style";
const Projects = () => {
  // const locate = useLocation();
  // const { from } = locate.state;
  // console.log(from);
  return (
    <div className="bg-primary dark:bg-fullBlack dark:text-white  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className="grid__layout">
            <About />
            <Hero2 />
            <Navbar />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
