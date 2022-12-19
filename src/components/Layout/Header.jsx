import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

import { headerData } from "../../data/headerData";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const menuList = () => {
    return (
      <div className="font-jost navigation lg:flex lg:space-x-10  font-normal space-y-5 lg:space-y-0 w-">
        <div
          className={
            "text-lg lg:text-base text-primary hover:border-b-[#F05A3B] w-fit cursor-pointer"
          }
        >
          <span className="flex items-center">
            <AiOutlineUser className="mr-2" />
            About
          </span>
        </div>
        <div
          className={
            "text-lg lg:text-base text-primary hover:text-gray-500 w-fit cursor-pointer"
          }
        >
          <span>Education</span>
        </div>
        <div
          className={
            "text-lg lg:text-base text-primary hover:text-gray-500 w-fit cursor-pointer"
          }
        >
          <span>Skills</span>
        </div>
        <div
          className={
            "text-lg lg:text-base text-primary hover:text-gray-500 w-fit cursor-pointer"
          }
        >
          <span>Contact</span>
        </div>
      </div>
    );
  };

  return (
    <div className="mainHeader mx-auto fixed top-0 z-40 bg-lightOrange w-full">
      <div className="flex items-center justify-between pt-5 sm:pt-8 px-5 sm:px-6 md:px-12 pb-4">
        <div className="flex justify-start lg:flex-1 space-x-3 lg:space-x-0 items-center">
          <h1 className="text-4xl font-qwigley font-semibold leading-none">
            {headerData.name}
          </h1>
        </div>
        <span className="lg:hidden" onClick={() => setIsSidebar(!isSidebar)}>
          <GiHamburgerMenu size={25} />
        </span>
        <div className="hidden lg:block">{menuList()}</div>
      </div>
    </div>
  );
};

export default Header;
