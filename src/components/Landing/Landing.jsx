import React, { useContext, useEffect } from "react";
import { Events, Link } from "react-scroll";
import { GlobalContext } from "../../context/GlobalContext";
import { headerData } from "../../data";
import SocialMediaLinks from "./SocialMediaLinks";

const MainHeader = () => {
  const { drawerOpen } = useContext(GlobalContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-full relative flex items-center justify-center">
        <div className="bg-primary grow shrink basis-[35%] h-full flex items-end">
          <SocialMediaLinks />
        </div>
        <img
          alt="profile"
          className={`${
            drawerOpen ? "opacity-0" : "opacity-100"
          } border border-secondary w-[400px] h-[400px] absolute left-[35%] object-cover rounded-[50%] shadow-sm -translate-x-2/4`}
          src="https://media.licdn.com/dms/image/C4D03AQHvYniObB6frw/profile-displayphoto-shrink_800_800/0/1620144141844?e=2147483647&v=beta&t=QVWbYZIsf2ehP5ehP8OYd3gKGeDa4JaP7KeDfYr5IHw"
        />
        <div className="bg-secondary basis-[65%] grow shrink h-full flex flex-col items-end justify-center">
          <div className="text-tertiary w-[45%] mr-28 font-[Poppins]">
            <h6 className="font-semibold text-xl opacity-70">
              {headerData.title}
            </h6>
            <h2 className="font-semibold text-[52px] leading-[110%] my-4">
              {headerData.name}
            </h2>
            <p className="mt-6 font-medium text-lg opacity-70">
              {headerData.desciption}
            </p>
            <div className="mt-8 w-[350px] flex items-center justify-between">
              <button className="text-primary rounded-[30px] w-[180px] sm:w-[150px] text-base font-medium h-[50px] border-[3px] border-primary hover:bg-tertiary hover:text-secondary hover:border-tertiary">
                Download CV
              </button>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="text-secondary rounded-[30px] w-[180px] sm:w-[150px] text-base font-medium h-[50px] bg-primary border-[3px] border-primary hover:bg-secondary hover:text-tertiary hover:border-tertiary">
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
