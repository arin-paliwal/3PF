import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import HeroMobile from "./HeroMobile";
// import SkillsMobile from './skillsMobile';
const AboutHero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {isDesktop ? <Hero /> : <HeroMobile />}
      <About />
      {/* <SkillsMobile/> */}
    </div>
  );
};

export default AboutHero;
