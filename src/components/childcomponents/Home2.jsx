import { useState, useEffect } from "react";
import { arrrowright, contrasticon, menu, close } from "../../assets/icons";
import { michael } from "../../assets";
import useDarkmode from "../../hooks/useDarkmode";
import Project from "../Projects/Project";
const Home2 = () => {
  const [toggle, settoggle] = useState(false);

  const [colorTheme, setTheme] = useDarkmode();

  return (
    <section className="py-3">
      <nav className="flex md:hidden  flex-row justify-end">
        <div
          onClick={() => setTheme(colorTheme)}
          className="mr-2 cursor-pointer shadow-lg"
        >
          <img src={contrasticon} alt="contrasticon" />
        </div>
        <div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] animate__icon h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle((prev) => !prev)}
          />
        </div>
        {/* toggle menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-primary dark:bg-fullBlack absolute top-[3rem] right-2 mx-4 border border-brightyellow my-2 min-w-[140px] rounded-xl animate__menu`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mt-2 mb-2">
              <a href="#Home">Home</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="#Projects">Projects</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="#Tools">Tools</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="#Education">Education</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="#Contact">Contact</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="#Blog">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="my-3 text-black dark:text-white">
        <div className="text-center text-4xl">My Projects</div>
      </div>
    </section>
  );
};

export default Home2;
