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
} from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
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
    </div>
  );
}

export default App;
