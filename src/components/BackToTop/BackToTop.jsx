import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{ display: visible ? "inline" : "none" }}
      className="fixed right-[10px] bottom-[60px] h-[30px] text-5xl z-[999]"
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="outline-none border-none cursor-pointer bg-none p-5"
      >
        <IoIosArrowDropupCircle className="text-5xl color-tertiary" />
      </button>
    </div>
  );
};

export default BackToTop;
