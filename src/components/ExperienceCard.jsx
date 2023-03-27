import React from "react";
import eduImgBlack from "../assets/svg/eduImgBlack.svg";
import expImgBlack from "../assets/svg/expImgBlack.svg";
import { Fade } from "react-reveal";

const ExperienceCard = ({ id, place, title, startYear, endYear, cardName }) => {
  const featureImg = cardName === "education" ? eduImgBlack : expImgBlack;
  return (
    <Fade bottom>
      <div
        key={id}
        className="bg-primary hover:bg-primary80 flex w-full tab:w-[90%] h-auto md:h-[140px] p-4 md:p-5 tab:p-6 rounded-[20px] mb-6 tab:mb-6 transition-colors ease-in-out"
      >
        <div className="bg-secondary rounded-[50%] w-11 md:w-14 h-11 md:h-14 flex items-center justify-center shrink-0">
          <img className="w-7 md:w-10 h-10" src={featureImg} alt="exp-1" />
        </div>
        <div className="ml-[0.6rem]">
          <h6 className="text-secondary text-xs md:text-sm font-bold mb-[0.4px] md:mb-2">
            {startYear}-{endYear}
          </h6>
          <h4 className="text-secondary font-semibold text-lg md:text-xl">
            {title}
          </h4>
          <h5 className="text-secondary70 font-semibold text-base md:text-lg">
            {place}
          </h5>
        </div>
      </div>
    </Fade>
  );
};

export default ExperienceCard;
