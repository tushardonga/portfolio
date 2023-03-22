import React from "react";
import { aboutData } from "../../data";
import aboutImg from "../../assets/svg/bwTheme-boy.svg";

const About = () => {
  return (
    <div id="about" className="bg-secondary min-h-screen relative">
      <div className="absolute top-[50px] left-2/4 -translate-x-1/2 h-[50px] w-[85%] flex justify-between items-center">
        <div className="bg-primary w-[10px] h-[10px] rounded-[50%]"> </div>
        <div className="bg-primary w-[10px] h-[10px] rounded-[50%]"> </div>
        <div className="bg-primary w-[95%] h-[5px] rounded-[10px]"> </div>
      </div>

      <div className="flex h-fit items-center justify-around pt-32">
        <div className="flex flex-col justify-evenly grow-[0.5] shrink basis-0 w-full h-fit">
          <h2 className="text-primary mb-10 text-[3.5rem] font-bold">
            {aboutData.title}
          </h2>
          <p className="text-tertiary80 text-xl m-0">
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="mt-10 pointer-events-none -scale-x-100">
          <img className="w-96 select-none" src={aboutImg} alt="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
