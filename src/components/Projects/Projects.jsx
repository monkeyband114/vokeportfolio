import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Project from "./Project";
import { useState } from "react";
import { About, Hero2, Navbar } from "../childcomponents";
import styles from "../../style";
import { Link } from "react-router-dom";
const Projects = () => {
  const locate = useLocation();
  const getstate = () => {
    const { from } = locate.state;
  };

  return (
    <div className="bg-primary dark:bg-fullBlack dark:text-white  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section className="grid__layout">
            <About />
            <Hero2 from={locate} />
            <Navbar />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
