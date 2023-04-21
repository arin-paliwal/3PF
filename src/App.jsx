// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";
// const App = () => {
//   return (
//     <>
//       <div className=" overflow-x-hidden relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);
  // for scrolling to top 
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/works" element={<Works />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

      {/* <div className=" overflow-x-hidden relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <button
            className={`fixed bottom-4 right-4 z-10 ${
              showScroll ? "block" : "hidden"
            }`}
            onClick={scrollTop}
          >
            {/* <i className="fas fa-arrow-up text-[#e37926] text-3xl"></i> */}
            {/* <i className="fa-solid fa-arrow-turn-up text-[#e37926] text-4xl"></i>
          </button>
        </div>
      // </div> */} 
    </>
  );
};

export default App;
