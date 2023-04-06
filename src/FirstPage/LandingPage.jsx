import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  About  from "./About";
import Navbar from "./Navbar";
import { StarsCanvas } from "../components";
import { particlesJS } from "./particles";



const Introduction = () => {
  function componentDidMount() {
  particlesJS("particles-js", {
    // Particle configuration options here
  });
}

  return (
    <>
      {/* <StarsCanvas /> */}
      <div id='particles-js'>
        <div className="relative z-0">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <About />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
