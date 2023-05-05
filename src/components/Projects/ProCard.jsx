import React from "react";

const ProCard = ({ image, name, type, note, description, link, id }) => {
  return (
    <>
      <div className="relative">
        <a href="portfolio-details.html" class="block">
          <img
            src="assets/img/portfolio/portfolio5.jpg"
            className="mb-25 rounded-sm md:rounded-md lg:rounded-lg"
            alt="portfolio-image"
          />
        </a>
        <h3 className="font-bold text-18px md:text-20px lg:text-22px mb-10 lg:mb-12">
          <a
            href="portfolio-details.html"
            className="inline-block text-black-color hover:text-primary-color ease-in duration-300"
          >
            Mobile App Development
          </a>
        </h3>
        <p className="text-13px md:text-15px lg:text-16px text-optional-color">
          Design, App
        </p>
      </div>
    </>
  );
};

export default ProCard;
