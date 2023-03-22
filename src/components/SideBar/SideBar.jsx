import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalContext";

const SideBar = () => {
  const { drawerOpen, setHandleDrawer } = useContext(GlobalContext);
  return (
    <div
      className={`${
        drawerOpen ? "w-48 sm:w-56" : "w-0"
      } rounded-tr-[40px] rounded-br-[40px] fixed h-screen z-[1300] top-0 left-0 bg-secondary overflow-hidden duration-500 ease-in-out text-base text-white font-[Poppins]`}
    >
      <div className="px-7">
        <MdClose
          onClick={setHandleDrawer}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              setHandleDrawer();
            }
          }}
          className="text-3xl font-bold text-primary hover:text-tertiary top-10 right-10 absolute select-none outline-none"
          role="button"
          tabIndex="0"
          aria-label="Close"
        />
      </div>
    </div>
  );
};

export default SideBar;
