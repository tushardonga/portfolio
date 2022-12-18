import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="bg-[#FEF8F2]">
      <Header />
      <div className="mx-auto mt-[71px] sm:mt-[83px] lg:mt-[102px]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;