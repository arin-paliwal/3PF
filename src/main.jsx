// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";
// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );

// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import {
// //   BrowserRouter,
// //   Routes,
// //   Route,
// //   Link,
// //   useLocation,
// // } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";

// // function AppRoutes() {
// //   const location = useLocation();

// //   return (
// //     <>
// //       {location.pathname !== "/" && location.pathname !== "/about" && (
// //         <Preloader />
// //       )}
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <AppRoutes />
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );



// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import {
// //   BrowserRouter,
// //   Routes,
// //   Route,
// //   Link,
// //   useLocation,
// // } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";

// // function AppContainer() {
// //   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
// //   const [showModelPreloader, setShowModelPreloader] = useState(true);
// //   const location = useLocation();

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setShowRoutePreloader(false);
// //     }, 5000);

// //     // Simulate threejs model loading
// //     setTimeout(() => {
// //       setShowModelPreloader(false);
// //     }, 5000);
// //   }, []);

// //   useEffect(() => {
// //     // Reset the model preloader state when navigating to the "/about" route
// //     setShowModelPreloader(location.pathname === "/about");
// //   }, [location.pathname]);

// //   return (
// //     <div>
// //       {showRoutePreloader ? <Preloader /> : null}
// //       {location.pathname === "/about" && showModelPreloader ? (
// //         <Preloader />
// //       ) : null}
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <AppContainer />
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );


// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import LandingPage from "./FirstPage/LandingPage";
// import "./index.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Preloader from "./FirstPage/Preloader/preloader";

// function AppContainer() {
//   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setTimeout(() => {
//       setShowRoutePreloader(false);
//     }, 3500);
//   }, []);
//   return (
//     <div>
//       {showRoutePreloader ? <Preloader /> : null}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<App />} />
//       </Routes>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <AppContainer />
//     </React.StrictMode>
//   </BrowserRouter>
// );
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import LandingPage from "./FirstPage/LandingPage";
// import "./index.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Preloader from "./FirstPage/Preloader/preloader";

// function AppContainer() {
//   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
//   const [showModelPreloader, setShowModelPreloader] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setTimeout(() => {
//       setShowRoutePreloader(false);
//     }, 3500);

//     if (location.pathname === "/about") {
//       // Simulate model loading
//       setTimeout(() => {
//         setShowModelPreloader(false);
//       }, 5000);
//     }
//   }, [location.pathname]);

//   return (
//     <div>
//       {showRoutePreloader ? <Preloader /> : null}
//       {location.pathname === "/about" && showModelPreloader ? (
//         <Preloader />
//       ) : null}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<App />} />
//       </Routes>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LandingPage from "./FirstPage/LandingPage";
import "./index.css";

import './FirstPage/button.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Preloader from "./FirstPage/Preloader/preloader";
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
  AboutHero,
} from "./components";
function AppContainer() {
  
  
  const [showRoutePreloader, setShowRoutePreloader] = useState(true);
  const [showModelPreloader, setShowModelPreloader] = useState(true);
  const location = useLocation();
  const [showScroll, setShowScroll] = useState(false);
  // for scrolling to top
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 10) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
 
  useEffect(() => {
    setTimeout(() => {
      setShowRoutePreloader(false);
    }, 3500);

    if (location.pathname === "/about") {
      // Simulate model loading
      setTimeout(() => {
        setShowModelPreloader(false);
      }, 5000);
    }
  }, [location.pathname]);

  return (
    <div>
      {showRoutePreloader ? <Preloader /> : null}
      {location.pathname === "/about" && showModelPreloader ? (
        <Preloader />
      ) : null}
      <Navbar/>
      <div className="mt-[40px] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutHero />} />
          <Route path="/education" element={<Experience />} />
          <Route path="/technologies" element={<Tech />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/training&certificate" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);

