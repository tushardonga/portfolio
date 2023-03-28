import React, { useContext } from "react";
import { Link } from "react-scroll";
import { GlobalContext } from "../../context/GlobalContext";
import { headerData } from "../../data";
import SocialMediaLinks from "./SocialMediaLinks";

const MainHeader = () => {
  const { drawerOpen } = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-full w-full relative flex flex-col md:flex-row items-center justify-between md:justify-center">
        <div className="bg-primary grow shrink basis-[35%] h-[30%] md:h-full flex-initial md:flex items-end">
          <SocialMediaLinks />
        </div>
        <img
          alt="profile"
          className={`${
            drawerOpen ? "opacity-0" : "opacity-100"
          } border-8 md:border border-[#eaeaea] md:border-secondary w-[200px] md:w-[300px] tab:w-[350px] laptop:w-[400px] h-[200px] md:h-[300px] tab:h-[350px] laptop:h-[400px] absolute top-[25%]  md:top-auto left-2/4 md:left-[35%] object-cover rounded-[50%] shadow-md -translate-x-1/2 md:-translate-x-2/4 -translate-y-1/2 md:translate-y-0`}
          src="https://media.licdn.com/dms/image/C4D03AQHvYniObB6frw/profile-displayphoto-shrink_800_800/0/1620144141844?e=2147483647&v=beta&t=QVWbYZIsf2ehP5ehP8OYd3gKGeDa4JaP7KeDfYr5IHw"
        />
        <div className="bg-secondary basis-full md:basis-[65%] overflow-y-auto sm:overflow-y-hidden md:grow md:shrink h-[78%] xsm:h-[70%] md:h-full w-full md:w-auto flex flex-initial md:flex-col items-center md:items-end justify-center py-0 px-8 md:px-0">
          <div className="text-tertiary w-full tab:w-7/12 md:w-[45%] mt-[121px] xsm:mt-[42%] sm:mt-[20%] tab:mt-[10%] md:mt-0 mr-0 tab:mr-[4%] md:mr-28 font-[Poppins]">
            <h6 className="font-semibold text-base md:text-lg laptop:text-xl opacity-70 text-center md:text-left">
              {headerData.title}
            </h6>
            <h2 className="font-semibold text-[2.5rem] md:text-5xl laptop:text-[52px] leading-[110%] my-4 text-center md:text-left">
              {headerData.name}
            </h2>
            <p className="mt-0 mx-auto md:mt-1 mb-0 md:mb-4 laptop:mb-0 laptop:mt-6 font-medium text-[0.95rem] laptop:text-lg opacity-70 text-center md:text-left w-11/12 md:w-auto">
              {headerData.desciption}
            </p>
            <div className="mt-8 w-full laptop:w-fit font-[Poppins] flex flex-col laptop:flex-row flex-wrap items-center">
              <button
                onClick={() =>
                  window.open(
                    headerData.resumePdf,
                    "_blank",
                    "noopener, noreferrer"
                  )
                }
                className="text-primary rounded-[30px] w-full laptop:w-[180px] text-base font-medium h-[50px] border-[3px] border-primary hover:bg-tertiary hover:text-secondary hover:border-tertiary"
              >
                Download CV
              </button>

              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="w-full laptop:w-[180px]"
              >
                <button className="text-secondary rounded-[30px] w-full mt-6 ml-0 laptop:ml-6 laptop:mt-0 text-base font-medium h-[50px] bg-primary border-[3px] border-primary hover:bg-secondary hover:text-tertiary hover:border-tertiary">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
