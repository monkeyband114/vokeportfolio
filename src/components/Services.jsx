import React from "react";
import { uiux, arduino, react, playgroundapps, monitor } from "../assets";
import { azure } from "../assets/icons";
import { Link } from "react-router-dom";

export const Card = ({ icon, head, para, name }) => (
  <Link to={"/projects/" + name} state={{ from: { name } }}>
    <div className="transform transition hover:scale-110 duration-500 items-center flex flex-col bg-white dark:bg-darken sm:mb-0 mb-6  justify-center shadow-lg text-center py-8 px-12">
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
  </Link>
);

const Services = () => {
  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-between scale-in-top"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">My Services</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          All Services Managed by, you can find intresting be sure to cheak it
          out
        </p>
      </div>
      <div className="grid sm:grid-cols-3 grid-col-1 gap-4 mx-0">
        <Card
          icon={monitor}
          head="Web Development"
          para="Blog, E commerce"
          name="Web"
        />
        <Card
          icon={arduino}
          head="Embedded Code"
          para="IOT, Hardware"
          name="Embedded"
        />
        <Card
          icon={playgroundapps}
          head="Playground Apps"
          para="Chatbots, Packages"
          name="Data Science"
        />
        <Card
          icon={react}
          head="React WebApps"
          para="PicsMaster, peble"
          name="Frontend"
        />
        <Card
          icon={uiux}
          head="Python Design"
          para="RampLage, bluecurosawa"
          name="Banckend"
        />
        <Card
          icon={azure}
          head="AI Models"
          para="Sales, E commerce"
          name="AI"
        />
      </div>
    </section>
  );
};

export default Services;
