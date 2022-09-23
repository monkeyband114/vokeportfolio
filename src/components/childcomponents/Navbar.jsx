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

import useDarkmode from "../../hooks/useDarkmode";

export const Item = ({ href, img }) => (
  <>
    <a href={href}>
      <li className="hover:bg-brightyellow dark:hover:bg-brightyellow dark:bg-slate-500 items-center rounded-full w-[40px] h-[40px] p-1.5 mx-3">
        <img src={img} alt={`${href}`} className="cursor-pointer p-1.5" />
      </li>
    </a>
  </>
);

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkmode();

  return (
    <div
      className={`${styles.paddingY} bg-white dark:bg-darken hidden md:flex sm:flex-col w-full`}
    >
      <div
        onClick={() => setTheme(colorTheme)}
        className="p-2 items-center justify-center mb-[140px] cursor-pointer"
      >
        <img
          src={contrasticon}
          alt="contrasticon"
          className="md:ml-6 pl-0 cursor-pointer bg-white rounded-full p-0"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col p-2 justify-between items-center h-[500px]">
          <Item href="#home" img={homeicon} />
          <Item href="#service" img={codeicon} />
          <Item href="#tools" img={toolsicon} />
          <Item href="#blog" img={pen} />
          <Item href="#contact" img={bookicon} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
