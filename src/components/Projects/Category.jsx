import React from "react";

const Category = () => {
  return (
    <div>
      <div className="pb-60 md:pb-80 lg:pb-100">
        <div className="container">
          <div className="customer-service-tabs style-two">
            <ul className="text-center mb-25 md:mb-35 lg:mb-30 xl:mb-50">
              <li className="current mb-12 last:mb-0 lg:mb-0 ml-5 mr-5 inline-block">
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  All
                </span>
              </li>
              <li
                className="mb-12 last:mb-0 lg:mb-0 inline-block ml-5 mr-5"
                data-tab="tab-2"
              >
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  Design
                </span>
              </li>
              <li
                className="tab-link mb-12 last:mb-0 lg:mb-0 inline-block ml-5 mr-5"
                data-tab="tab-3"
              >
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  Development
                </span>
              </li>
              <li
                className="tab-link mb-12 last:mb-0 lg:mb-0 inline-block ml-5 mr-5"
                data-tab="tab-4"
              >
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  Mobile App
                </span>
              </li>
              <li
                className="tab-link mb-12 last:mb-0 lg:mb-0 inline-block ml-5 mr-5"
                data-tab="tab-5"
              >
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  Wordpress Theme
                </span>
              </li>
              <li
                className="tab-link mb-12 last:mb-0 lg:mb-0 inline-block ml-5 mr-5"
                data-tab="tab-6"
              >
                <span className="text-black-color text-15px lg:text-16px rounded-sm font-semibold bg-[#F5F0E8] relative pl-20 md:pl-25 pr-20 md:pr-25 pt-12 pb-12 hover:text-white cursor-pointer block z-1 ease-in duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-0 before:invisible before:ease-in before:duration-300 before:-z-1 before:rounded-sm before:bg-secondary-gradient-color hover:before:opacity-100 hover:before:visible">
                  Plugin
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
