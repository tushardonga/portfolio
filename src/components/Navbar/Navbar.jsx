import React, { useContext } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GlobalContext } from "../../context/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
  const { setHandleDrawer } = useContext(GlobalContext);

  return (
    <div className="flex items-center w-full h-20 laptop:h-[6.5rem] absolute justify-center z-[99]">
      <div className="flex items-center justify-between w-full px-8 laptop:px-12 mt-4">
        <h1 className="text-primary md:text-secondary font-[BestermindRegular] text-3xl laptop:text-4xl select-none font-bold">
          Tushar Donga
        </h1>
        <IoMenuSharp
          className="text-[2rem] sm:text-[2.5rem] cursor-pointer text-tertiary hover:text-primary nav-hamburger-icon"
          onClick={setHandleDrawer}
          aria-label="Menu"
        />
      </div>
    </div>
  );
};

export default Navbar;
