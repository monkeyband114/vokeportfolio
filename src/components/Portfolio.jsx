import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Protfolios = () => (
  <>
    <div></div>
  </>
);

const Portfolio = () => {
  const [value, setValue] = useState({
    value: true,
    value2: true,
    value3: true,
    value4: true,
  });

  return (
    <div
      id="potfolios"
      className="flex flex-col items-center justify-center mt-10"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">Portfolio</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div>
        <ul className="flex flex-row  justify-between w-full font-inter font-normal text-[16px] gap-4">
          <a onClick={() => !setValue.value} href="#potfolios">
            <li className="active:text-brightyellow">All Categories</li>
          </a>
          <a href="#potfolios">
            <li>Web Develpment</li>
          </a>
          <a href="#potfolios">
            <li>Python Django</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
