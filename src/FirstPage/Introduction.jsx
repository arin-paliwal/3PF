import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Intro from "./Intro";
import Rest from "./Rest";
const Introduction = () => {
  return (
    // <BrowserRouter>
    <div>
      <div>
        <Intro />
        {/* <Rest /> */}
      </div>
      </div>
    // </BrowserRouter>
  );
};

export default Introduction;
