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
} from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
