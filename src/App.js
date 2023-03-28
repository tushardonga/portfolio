import { useContext } from "react";
import { createPortal } from "react-dom";
import { Element } from "react-scroll";
import "./App.css";
import {
  About,
  Landing,
  Navbar,
  SideBar,
  Education,
  Skills,
  Experience,
  Projects,
  Contacts,
  Footer,
  BackToTop,
} from "./components";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { drawerOpen } = useContext(GlobalContext);
  return (
    <div className="app">
      <Navbar />
      {drawerOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 blur-md bg-black bg-opacity-5 backdrop-blur-lg"></div>,
          document.body
        )}
      <SideBar />
      <Element name="Home" className="Home">
        <Landing />
      </Element>
      <Element name="About" className="About">
        <About />
      </Element>
      <Element name="Education" className="Education">
        <Education />
      </Element>
      <Element name="Skills" className="Skills">
        <Skills />
      </Element>
      <Experience />
      <Projects />
      <Element name="Contact" className="Contact">
        <Contacts />
      </Element>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
