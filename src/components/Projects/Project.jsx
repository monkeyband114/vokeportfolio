import React from "react";

const Project = ({ from }) => {
  const value = from.state.from.name;
  console.log(value);
  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-between scale-in-top"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="font-semibold font-inter text-[32px]">
          {value} Projects
        </h2>
        <p className="font-normal font-inter text-gray-500 text-[15px] leading-[24px] max-w-[436px] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
    </section>
    // <div>
    //   <div>
    //     {" "}
    //     <h1 className="">{value} Projects</h1>{" "}
    //   </div>
    // </div>
  );
};

export default Project;
