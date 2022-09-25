import React from "react";
import { tick, ex } from "../assets/icons";

export const PriceCard = ({ name, price, like, nolik }) => (
  <>
    <div className="bg-white flex flex-col items-center justify-between dark:bg-darken shadow-lg  transition hover:scale-110 duration-500">
      <div
        className={`${
          name == "Gold" ? "flex" : "hidden"
        } flex-col bg-brightyellow w-full relative  items-center`}
      >
        <p className="font-inter font-normal text-[15px] capitalize">
          Most Popular
        </p>
      </div>
      <div className="flex flex-col items-center justify-between px-4 py-6">
        <h4 className="font-inter font-semibold text-[24px]">{name}</h4>
        <div>
          <p className="font-inter font-bold text-[32px]">
            ${price}
            <span className="font-inter font-normal text-[15px]">/Hour</span>
          </p>
        </div>
        <p className="items-center text-center font-inter mb-4 text-gray-400 text-[15px] font-normal">
          Get Optimized fast tools here men
        </p>
        <div>
          <ul className="font-inter font-normal text-gray-400 text-[15px] flex flex-col justify-between">
            <li className="flex flex-row mb-2">
              <img src={like} alt="" className="mr-2" />
              <p>FrontEnd Web development</p>
            </li>
            <li className="flex flex-row mb-2">
              <img src={nolik} alt="" className="mr-2" />
              <p>BackEnd Development</p>
            </li>
            <li className="flex flex-row mb-2">
              <img src={nolik} alt="" className="mr-2" />
              <p>FullStack Project</p>
            </li>
            <li className="flex flex-row mb-2">
              <img src={nolik} alt="" className="mr-2" />
              <p>Ai Dependencies</p>
            </li>
          </ul>
        </div>
        <a
          href="#contact"
          className="bg-brightyellow rounded-full shadow-lg px-4 py-2"
        >
          <p className="capitalize font-bold text-[14px]">Order Now</p>
        </a>
      </div>
    </div>
  </>
);

const Priceplans = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">Price Plans</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1  md:mb-0 mb-4 gap-4">
        <PriceCard name="Silver" price={10.0} like={tick} nolik={ex} />
        <PriceCard name="Gold" price={20.0} like={ex} nolik={tick} />
        <PriceCard name="Platinum" price={30.0} like={tick} nolik={tick} />
      </div>
    </div>
  );
};

export default Priceplans;
