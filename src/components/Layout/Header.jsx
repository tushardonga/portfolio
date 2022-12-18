import React, { useState } from "react";

const MyLogo = () => {
  return (
    <img
      className="w-full h-auto"
      //   style={{
      //     "-webkitUserSelect": "none",
      //     transition: "background-color 300ms",
      //   }}
      alt="my-logo"
      src="https://see.fontimg.com/api/renderfont4/JRzK7/eyJyIjoiZnMiLCJoIjo3MSwidyI6MTI1MCwiZnMiOjU3LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VHVzaGFyIERvbmdh/signamaestro.png"
    ></img>
  );
};

const Header = () => {
  //   const router = useRouter();
  const [isSidebar, setIsSidebar] = useState(false);

  //   useEffect(() => {
  //     if (router.asPath === "/") {
  //       window.addEventListener("scroll", isSticky);
  //       return () => {
  //         window.removeEventListener("scroll", isSticky);
  //       };
  //     }
  //   });

  //   const isSticky = (e) => {
  //     const header = document.querySelector(".mainHeader");
  //     const scrollTop = window.scrollY;
  //     if (scrollTop >= 290) {
  //       header?.classList.add("bg-white", "lg:pb-20", "xl:pb-0");
  //       header?.classList.remove("bg-[#FEF8F2]");
  //     } else {
  //       header?.classList.add("bg-[#FEF8F2]");
  //       header?.classList.remove("bg-white", "lg:pb-20", "xl:pb-0");
  //     }
  //   };

  const menuList = () => {
    return (
      <div className="navigation lg:flex lg:space-x-10  font-normal space-y-5 lg:space-y-0 w-">
        <div
          className={
            "text-lg lg:text-base text-primary hover:border-b-[#F05A3B] w-fit cursor-pointer"
          }
        >
          <span>About</span>
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
    <div className="mainHeader mx-auto fixed top-0 z-40 bg-[#FEF8F2] w-full">
      <div className="flex items-center justify-between pt-5 sm:pt-8 px-5 sm:px-6 md:px-12 pb-4">
        <div className="flex justify-start lg:flex-1 space-x-3 lg:space-x-0 items-center">
          <span className="lg:hidden" onClick={() => setIsSidebar(!isSidebar)}>
            hamburger{" "}
          </span>
          {/* TODO :Add logo */}
          Logo here
        </div>
        <div className="hidden lg:block">{menuList()}</div>
        <div
          className={`sideBarClass lg:hidden absolute top-0 left-0 bg-white ml-0 p-3 h-screen ${
            isSidebar ? "show" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <a href="/" className="block">
              <img
                className="py-3"
                src="https://dev.app.splitero.com/static/media/logo.f8179e3064fe42537ac351eb6e3e58ff.svg"
                alt="splitero"
              />
            </a>
            <button
              onClick={() => setIsSidebar(!isSidebar)}
              type="button"
              className="mr-5 border border-primary rounded-2xl p-1"
            >
              <span className="sr-only">Close menu</span>
              {MyLogo}
            </button>
          </div>
          <div className="mt-6">{menuList()}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
