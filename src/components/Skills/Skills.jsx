import React from "react";
import Marquee from "react-fast-marquee";
import { skillsImage } from "../../assets/svg/skills";
import { skillsData } from "../../data";

const Skills = () => {
  return (
    <div className="bg-secondary flex items-center flex-col min-h-[60vh] pt-10 px-8 pb-8">
      <div className="flex justify-center items-center">
        <h2 className="text-primary font-bold text-[3.5rem] text-center">
          Skills
        </h2>
      </div>
      <div className="flex items-center justify-center w-full mt-14 px-8">
        <div className="w-full mx-8">
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
                className="bg-secondary rounded-[10px] w-40 h-40 m-6 flex flex-col items-center justify-center py-8 px-4 duration-300 ease-in-out shadow-lg shadow-primary30 hover:scale-110"
              >
                <img
                  className="h-[50px] pointer-events-none select-none"
                  src={skillsImage(skill)}
                  alt={skill}
                />
                <h3 className="text-tertiary font-bigShoulders font-medium text-[22px] text-center mt-4">
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
