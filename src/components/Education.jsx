import React from "react";
import EduWork from "./childcomponents/EduWork";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">Education</h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="bg-white pb-6 dark:bg-darken shadow-lg flex flex-col justify-between">
        <EduWork
          title="University of Toronto"
          student="Student"
          date="Jan 1016 - Dec 2021"
          certi="Certificate of web training"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
        />
        <div className="bg-gray-300  w-[90%]  h-[1px] mt-4 mx-2" />
        <EduWork
          title="University of Toronto"
          student="Student"
          date="Jan 1016 - Dec 2021"
          certi="Certificate of web training"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
        />
        <div className="bg-gray-300  w-[90%]  h-[1px] mt-4 mx-2" />
        <EduWork
          title="University of Toronto"
          student="Student"
          date="Jan 1016 - Dec 2021"
          certi="Certificate of web training"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
        />
      </div>
    </div>
  );
};

export default Education;
