import React from "react";

const Section = ({ left }) => {
  return (
    <div className="absolute top-5 tab:top-[50px] left-2/4 -translate-x-1/2 h-[50px] w-[85%] flex justify-between items-center">
      {!left && (
        <div className="bg-primary w-[93%] sm:w-[95%] h-[3px] sm:h-[5px] rounded-[10px]"></div>
      )}
      <div className="bg-primary w-1 h-1 sm:w-2 tab:w-[10px] sm:h-2 tab:h-[10px] rounded-[50%]"></div>
      <div className="bg-primary w-1 h-1 sm:w-2 tab:w-[10px] sm:h-2 tab:h-[10px] rounded-[50%]"></div>
      {left && (
        <div className="bg-primary w-[93%] sm:w-[95%] h-[3px] sm:h-[5px] rounded-[10px]"></div>
      )}
    </div>
  );
};

export default Section;
