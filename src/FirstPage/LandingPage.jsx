import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  About  from "./About";
import Navbar from "./Navbar";



const Introduction = () => {
  return (
    <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About/>
          </div>
          </div>
  );
};

export default Introduction;
