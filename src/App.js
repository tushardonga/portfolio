import { useContext } from "react";
import "./App.css";
import { Navbar } from "./components";
import Landing from "./components/Landing/Landing";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <Landing />
    </div>
  );
}

export default App;
