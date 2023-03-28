import React from "react";
import { Fade } from "react-reveal";
import { FaPlay, FaCode } from "react-icons/fa";
import placeholder from "../../assets/png/placeholder.png";
import "./SingleProject.css";

const IconClassName =
  "cursor-pointer flex items-center justify-center w-10 h-10 rounded-[50%] border-2 border-secondary text-tertiary transition-all duration-700 hover:bg-secondary hover:text-primary hover:scale-110 hover:border-tertiary";

const SingleProject = ({ id, name, desc, tags, code, demo, image }) => {
  return (
    <Fade bottom>
      <div
        key={id}
        style={{ boxShadow: "4px 4px 8px rgba(36,3,3,.2)" }}
        className="singleProject text-primary400 flex flex-col items-center w-[304px] h-[360px] rounded-[10px] justify-center py-[1.4rem] px-8 relative cursor-pointer overflow-hidden"
      >
        <div className="flex flex-col items-center justify-between w-full h-full">
          <h2 className="text-tertiary font-semibold text-2xl leading-[110%] text-center font-[Poppins]">
            {name}
          </h2>
          <img
            className="w-full h-3/5 transition-opacity hover:opacity-30 select-none rounded-lg"
            src={image ? image : placeholder}
            alt={name}
          />
          <div className="project--showcaseBtn flex items-center justify-between w-full">
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={IconClassName}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className="text-lg transition-all duration-200"
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={IconClassName}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className="text-lg transition-all duration-200"
                aria-label="Code"
              />
            </a>
          </div>
        </div>
        <p className="project--desc bg-tertiary80 text-secondary absolute w-[95%] h-40 left-0 top-0 p-[15px] rounded-tr-[20px] rounded-br-[20px] leading-[110%] flex items-center justify-center -translate-x-[110%] translate-y-[40%] transform duration-700 ease-in-out font-[Poppins]">
          {desc}
        </p>
        <div className="project--lang bg-tertiary80 text-secondary absolute bottom-5 right-0 w-[140px] text-sm flex justify-center gap-2 flex-col rounded-tl-[10px] rounded-bl-[10px] p-3 translate-x-full transform duration-700 ease-in-out font-[Poppins]">
          {tags.map((tag, id) => (
            <span className="font-semibold break-words leading-[100%]" key={id}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default SingleProject;
