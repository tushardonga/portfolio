import React from "react";
import expBlack from "../../assets/svg/expBlack.svg";
import { experienceData } from "../../data";
import ExperienceCard from "../ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="bg-secondary min-h-full tab:min-h-screen">
      <div className="flex justify-center w-full items-center">
        <div className="p-1 ml-[7%] mt-4 pointer-events-none grow-[0.35] shrink max-tab:hidden">
          <img
            className="w-full pointer-events-none"
            src={expBlack}
            alt="experince"
          />
        </div>
        <div className="grow-1 tab:grow-[0.65] shrink p-4 md:p-8 flex justify-center w-full flex-col items-end mx-auto tab:mr-8">
          <h2 className="text-primary font-bold text-[2.5rem] sm-[3.2rem] tab:text-[3.5rem] text-center mb-8 max-tab:self-center">
            Experience
          </h2>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              place={exp.company}
              title={exp.jobtitle}
              startYear={exp.startYear}
              endYear={exp.endYear}
              cardName="experince"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
