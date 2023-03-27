import React from "react";
import { educationData } from "../../data";
import ExperienceCard from "../ExperienceCard";
import eduBlack from "../../assets/svg/eduBlack.svg";

const Education = () => {
  return (
    <div id="resume" className="bg-secondary min-h-full tab:min-h-screen">
      <div className="flex justify-center w-full items-center">
        <div className="p-4 tab:py-8 tab:pl-8 flex flex-col mx-auto tab:ml-[7%] justify-center w-full">
          <h2 className="text-[2.5rem] max-tab:self-center sm-[3.2rem] tab:text-[3.5rem] text-primary mb-8 font-bold">
            Education
          </h2>
          {educationData.map((edu) => (
            <ExperienceCard
              key={edu.id}
              id={edu.id}
              place={edu.institution}
              title={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
              cardName="education"
            />
          ))}
        </div>
        <div className="p-4 mt-2 pointer-events-none grow-[0.35] shrink max-tab:hidden">
          <img className="w-full" src={eduBlack} alt="edu-img-2" />
        </div>
      </div>
    </div>
  );
};

export default Education;
