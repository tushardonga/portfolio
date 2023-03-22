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
        className="bg-primary hover:bg-primary80 flex w-[90%] h-[140px] p-6 rounded-[20px] mb-6 transition-colors ease-in-out"
      >
        <div className="bg-secondary rounded-[50%] w-14 h-14 flex items-center justify-center shrink-0">
          <img className="w-10 h-10" src={featureImg} alt="exp-1" />
        </div>
        <div className="ml-[0.6rem]">
          <h6 className="text-secondary text-sm font-bold mb-2">
            {startYear}-{endYear}
          </h6>
          <h4 className="text-secondary font-semibold text-xl">{title}</h4>
          <h5 className="text-secondary70 font-semibold text-lg">{place}</h5>
        </div>
      </div>
    </Fade>
  );
};

export default ExperienceCard;
