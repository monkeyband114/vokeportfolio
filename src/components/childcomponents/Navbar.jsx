import React from "react";
import styles, { layout } from "../../style";
import {
  homeicon,
  codeicon,
  toolsicon,
  bookicon,
  pen,
  project,
  contrasticon,
} from "../../assets/icons";

const Navbar = () => {
  return (
    <div
      className={`${styles.paddingY} bg-white dark:bg-darken hidden md:flex sm:flex-col w-full`}
    >
      <div className="p-2 items-center justify-center mb-[140px]">
        <img
          src={contrasticon}
          alt="contrasticon"
          className="md:pl-6 pl-0 cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col p-2 justify-between items-center h-[500px]">
          <a href="#home">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img
                src={homeicon}
                alt="homeicon"
                className="cursor-pointer p-1.5"
              />
            </li>
          </a>
          <a href="#service">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img
                src={codeicon}
                alt="codeicon"
                className="cursor-pointer p-1.5"
              />
            </li>
          </a>
          <a href="#tools">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img
                src={toolsicon}
                alt="toolsicon"
                className="cursor-pointer p-1.5"
              />
            </li>
          </a>
          <a href="#edu">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img
                src={bookicon}
                alt="bookicon"
                className="cursor-pointer p-1.5"
              />
            </li>
          </a>
          <a href="#blog">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img src={pen} alt="pen" className="cursor-pointer p-1.5" />
            </li>
          </a>
          <a href="#map">
            <li className="hover:bg-brightyellow items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
              <img
                src={project}
                alt="project"
                className="cursor-pointer p-1.5"
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
