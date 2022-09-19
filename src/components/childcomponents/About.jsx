import styles, { layout } from "../../style";
import React from "react";
import { mike } from "../../assets";
import {
  instagram,
  facebook,
  twitter,
  linkedin,
  youtube,
  link,
  downloadiconb,
} from "../../assets/icons";

export const Level = ({ text, percent }) => (
  <div>
    <div className="flex flex-row w-full justify-between mt-2">
      <p className="font-inter font-normal text-slate-500">{text}</p>
      <p className="font-inter font-normal text-slate-500">{percent}</p>
    </div>
    <div className={`border border-brightyellow w-[100%] mt-2 rounded-[2px]`}>
      <div className={`w-[${percent}] h-[3px] bg-brightyellow`} />
    </div>
  </div>
);

const About = () => (
  <div
    className={`${layout.section} hidden md:flex bg-white dark:bg-darken justify-center px-6`}
  >
    <div className="flex flex-col items-center">
      <img
        src={mike}
        alt="icon"
        className="w-[150px] h-[150px] border items-center rounded-full bg-primary"
      />
    </div>
    <div className="flex flex-col items-center">
      <h4 className="font-semibold font-inter">Michael Adawaren</h4>
      <p className="text-slate-500 mt-1">Full Stack Web Developer</p>
    </div>
    <div className="flex flex-row items-center justify-between mt-2">
      <div className="bg-brightyellow rounded-full w-[24px] h-[24px] p-1.5 mr-2">
        <img src={instagram} alt="instagram" />
      </div>
      <div className="bg-brightyellow rounded-full w-[24px] h-[24px] p-1.5 mr-2">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="bg-brightyellow rounded-full w-[24px] h-[24px] p-1.5 mr-2">
        <img src={twitter} alt="twitter" />
      </div>
      <div className="bg-brightyellow rounded-full w-[24px] h-[24px] p-1.5 mr-2">
        <img src={linkedin} alt="linkedin" />
      </div>
      <div className="bg-brightyellow rounded-full w-[24px] h-[24px] p-1.5 mr-2">
        <img src={youtube} alt="youtube" />
      </div>
    </div>
    <div className="bg-primary w-full  h-[1px] mt-4" />
    <div className="flex flex-col justify-between mt-6">
      <div className="flex flex-row justify-between mb-3">
        <h4 className="bg-brightyellow font-inter font-normal">Age:</h4>
        <p className="font-inter font-normal">23</p>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <h4 className="bg-brightyellow font-inter font-normal">Residence:</h4>
        <p className="font-inter font-normal"> BD</p>
      </div>
      <div className="flex flex-row justify-between mb-3">
        <h4 className="bg-brightyellow font-inter font-normal">Freelance:</h4>
        <p className="font-inter font-normal text-green-500">Avaliable</p>
      </div>
      <div className="flex flex-row justify-between">
        <h4 className="bg-brightyellow font-inter font-normal mr-2">
          Address:
        </h4>
        <p className="font-inter font-normal">Nigeria, Lagos</p>
      </div>
    </div>
    <div className="bg-primary w-full  h-[1px] mt-4" />
    {/* languages */}
    <div className="flex flex-col justify-between mt-6">
      <div className="flex flex-row text-left">
        <h3 className="font-inter font-semibold">Languages</h3>
      </div>
      <Level text="English" percent="90%" />
    </div>
    <div className="bg-primary w-full  h-[1px] mt-4" />
    {/* skill */}
    <div className="flex flex-col justify-between mt-6">
      <div className="flex flex-row text-left">
        <h3 className="font-inter font-semibold">Skill</h3>
      </div>
      <Level text="Html" percent="85%" />
      <Level text="CSS" percent="80%" />
      <Level text="Javascript" percent="85%" />
      <Level text="Python" percent="80%" />
    </div>
    <div className="bg-primary w-full  h-[1px] mt-4" />
    {/* Extra skills */}
    <div className="flex flex-col justify-between mt-6">
      <div className="flex flex-row text-left mb-3">
        <h3 className="font-inter font-semibold">Extra Skill</h3>
      </div>
      <div>
        <div className="flex flex-row w-full justify-start">
          <img src={link} alt="link" className="mr-4" />
          <p className="font-inter font-normal text-slate-500">
            Tailwind, Material UI
          </p>
        </div>
        <div className="flex flex-row w-full">
          <img src={link} alt="link" className="mr-4" />
          <p className="font-inter font-normal text-slate-500">
            React, Vite, Redux
          </p>
        </div>
        <div className="flex flex-row w-full">
          <img src={link} alt="link" className="mr-4" />
          <p className="font-inter font-normal text-slate-500">Django</p>
        </div>
        <div className="flex flex-row w-full">
          <img src={link} alt="link" className="mr-4" />
          <p className="font-inter font-normal text-slate-500">GIT Knowledge</p>
        </div>
      </div>
    </div>
    <div className="bg-primary w-full  h-[1px] mt-4" />
    {/* download cv */}
    <div className="cv">
      <a href="https://drive.google.com/file/d/1OZW2VAdJqh8ALxezebMgh8FzL9My2Yuo/view?usp=sharing">
        <button className="bg-brightyellow flex mt-6 w-[220px] h-[40px] flex-row justify-center">
          <p className="font-inter font-semibold p-2">Download</p>
          <div className="p-1.5 pt-3">
            <img src={downloadiconb} alt="get" className="justify-center" />
          </div>
        </button>
      </a>
    </div>
  </div>
);

export default About;
