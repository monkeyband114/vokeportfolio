import React from "react";

const EduWork = ({ title, student, date, certi, para }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-between items-center py-2 px-4">
      <div className="flex flex-col justify-between w-full sm:mr-[100px]">
        <h3 className="font-inter font-medium text-[18px] sm:mt-[-2rem] mb-2">
          {title}
        </h3>
        <div className="flex flex-row justify-between">
          <p className="font-inter font-normal text-[15px]">{student}</p>
          <p className="bg-brightyellow px-2 text-center text-white font-inter font-normal text-[10px]">
            {date}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start mt-6">
        <h3 className="font-medium font-inter text-[18px] ">{certi}</h3>
        <p className="font-normal font-inter text-[15px] text-gray-400 leading-[24px]">
          {para}
        </p>
      </div>
    </div>
  );
};

export default EduWork;
