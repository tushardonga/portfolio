import React from "react";
import { aboutData } from "../../data";
import aboutImg from "../../assets/svg/bwTheme-boy.svg";
import Section from "../Section";

const About = () => {
  return (
    <div id="about" className="bg-secondary py-8 px-0 relative">
      <Section left="true" />
      <div className="flex max-tab:flex-col-reverse h-fit items-center justify-evenly tab:justify-around pt-8 tab:pt-32">
        <div className="flex flex-col justify-evenly grow-[0.6] tab:grow-[0.5] shrink basis-0 w-full h-fit px-8 py-5 tab:p-0">
          <h2 className="text-primary mb-10 text-[2.5rem] sm-[3.2rem] tab:text-[3.5rem] font-bold max-md:self-center max-tab-mb-5">
            {aboutData.title}
          </h2>
          <p className="text-tertiary80 text-sm sm:text-lg tab:text-xl m-0 font-medium font-[Poppins]">
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="mt-10 pointer-events-none -scale-x-100">
          <img
            className="w-48 sm:w-60 tab:w-96 select-none"
            src={aboutImg}
            alt="about-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
