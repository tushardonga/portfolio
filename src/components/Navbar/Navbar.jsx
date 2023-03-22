import React, { useContext, useState } from "react";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { GlobalContext } from "../../context/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
  const { setHandleDrawer } = useContext(GlobalContext);

  return (
    <div className="flex items-center w-full h-[6.5rem] absolute justify-center z-[99]">
      <div className="flex items-center justify-between w-full px-12 mt-4">
        <h1 className="text-pfBlack font-[BestermindRegular] text-4xl select-none font-bold">
          Tushar Donga
        </h1>
        <IoMenuSharp
          className="text-4xl cursor-pointer text-tertiary hover:text-primary nav-hamburger-icon"
          onClick={setHandleDrawer}
          aria-label="Menu"
        />
      </div>
    </div>
  );
};

export default Navbar;
