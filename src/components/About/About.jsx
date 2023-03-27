import React from "react";
import { aboutData } from "../../data";
import aboutImg from "../../assets/svg/bwTheme-boy.svg";

const About = () => {
  return (
    <div id="about" className="bg-secondary min-h-screen relative">
      <div className="absolute top-5 tab:top-[50px] left-2/4 -translate-x-1/2 h-[50px] w-[85%] flex justify-between items-center">
        <div className="bg-primary w-1 h-1 sm:w-2 tab:w-[10px] sm:h-2 tab:h-[10px] rounded-[50%]"></div>
        <div className="bg-primary w-1 h-1 sm:w-2 tab:w-[10px] sm:h-2 tab:h-[10px] rounded-[50%]"></div>
        <div className="bg-primary w-[93%] sm:w-[95%] h-[3px] sm:h-[5px] rounded-[10px]"></div>
      </div>

      <div className="flex max-tab:flex-col-reverse h-fit items-center justify-evenly tab:justify-around pt-8 tab:pt-32">
        <div className="flex flex-col justify-evenly grow-[0.6] tab:grow-[0.5] shrink basis-0 w-full h-fit p-5 tab:p-0">
          <h2 className="text-primary mb-10 text-4xl sm:text-[3.5rem] font-bold max-md:self-center max-tab-mb-5">
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
