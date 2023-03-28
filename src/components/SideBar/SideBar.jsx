import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Fade } from "react-reveal";
import { Element, Link } from "react-scroll";
import { GlobalContext } from "../../context/GlobalContext";
import { sideBarData } from "../../data";

const SideBar = () => {
  const { drawerOpen, setHandleDrawer } = useContext(GlobalContext);

  return (
    <div
      className={`${
        drawerOpen ? "overflow-y-auto translate-x-0" : "px-0 -translate-x-full"
      } rounded-tr-[40px] w-72 sm:w-80 rounded-br-[40px] fixed h-screen z-[1300] top-0 left-0 bg-secondary overflow-hidden transition  duration-500 ease-in-out text-white font-[Poppins] text-2xl`}
    >
      <div className="">
        <MdClose
          onClick={setHandleDrawer}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              setHandleDrawer();
            }
          }}
          className="text-4xl font-bold text-primary hover:text-tertiary top-10 right-10 absolute outline-none fill-current w-8 h-8 inline-block select-none"
          role="button"
          tabIndex="0"
          aria-label="Close"
        />
      </div>
      <div>
        <div className="mt-24 tab:mt-28">
          {sideBarData.map((item) => (
            <Link
              activeClass="active"
              to={item.label}
              spy={true}
              smooth={true}
              duration={500}
            >
              <Fade left>
                <Element
                  name={item.label}
                  className={`${item.label} cursor-pointer`}
                  onClick={setHandleDrawer}
                >
                  <div className="text-primary w-[85%] border-2 h-14 lg:h-[60px]  my-8 mx-auto flex items-center justify-evenly border-primary transition-colors duration-200 px-6 lg:px-[30px] rounded-[78px] bg-secondary hover:bg-primary hover:text-secondary">
                    {item.icon}
                    <span className="font-[Poppins] w-2/4 text-lg lg:text-xl font-semibold">
                      {item.label}
                    </span>
                  </div>
                </Element>
              </Fade>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
