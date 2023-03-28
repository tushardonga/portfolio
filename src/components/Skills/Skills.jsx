import React from "react";
import Marquee from "react-fast-marquee";
import { skillsImage } from "../../assets/svg/skills";
import { skillsData } from "../../data";

const Skills = () => {
  return (
    <div className="bg-secondary flex items-center flex-col min-h-full p-2 md:p-4 tab:px-4 tab:pt-8 tab:pb-4 xl:pt-10 xl:px-8 xl:pb-8">
      <div className="flex justify-center items-center">
        <h2 className="text-primary font-bold text-[2.5rem] sm-[3.2rem] tab:text-[3.5rem] text-center">
          Skills
        </h2>
      </div>
      <div className="flex items-center justify-center w-full my-4 tab:mt-14 tab:mb-0 p-2 md:p-4 tab:px-8 tab:py-0">
        <div className="w-full mx-0 md:mx-8">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)" }}
                className="bg-secondary rounded-[10px] w-[135px] sm:w-[150px] tab:w-40 h-[135px] sm:h-[150px] tab:h-40 m-5 tab:m-6 flex flex-col items-center justify-center py-8 px-4 duration-300 ease-in-out shadow-lg shadow-primary30 hover:scale-110"
              >
                <img
                  className="h-10 sm:h-11 tab:h-[50px] pointer-events-none select-none"
                  src={skillsImage(skill)}
                  alt={skill}
                />
                <h3 className="text-tertiary font-bigShoulders font-medium text-lg sm:text-xl tab:text-[22px] text-center mt-4">
                  {skill}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
