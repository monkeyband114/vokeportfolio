import React from "react";
import { uiux, arduino, react, playgroundapps, monitor } from "../assets";

export const Card = ({ icon, head, para }) => (
  <>
    <div className="items-center flex flex-col bg-white dark:bg-darken sm:mb-0 mb-6  justify-center shadow-lg text-center py-8 px-12">
      <div className="object-contain w-[65px] h-[53px] mb-4">
        <img src={icon} alt={head} className="w-[65px] h-[53px]" />
      </div>
      <div className="flex flex-col justify-between">
        <h4 className="font-[500] text-[16px] font-inter leading-[123%]">
          {head}
        </h4>
        <p className="font-normal text-[14px] font-inter text-gray-500">
          {para}
        </p>
      </div>
    </div>
  </>
);

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-between scale-in-top">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">My Services</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="section__layout">
        <Card icon={monitor} head="Web Development" para="Blog, E commerce" />
        <Card
          icon={playgroundapps}
          head="Playground Apps"
          para="Chatbots, Packages"
        />
        <Card icon={arduino} head="Embedded Code" para="IOT, Hardware" />
        <Card icon={react} head="React WebApps" para="PicsMaster, peble" />
        <Card icon={uiux} head="Python Design" para="RampLage, bluecurosawa" />
        <Card icon={monitor} head="Web Development" para="Blog, E commerce" />
      </div>
    </section>
  );
};

export default Services;
