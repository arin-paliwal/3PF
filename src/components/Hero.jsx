import React from "react";
import { styles } from "../styles";
const Hero = () => {
  return (
    <div className="relative w-full h-[10rem]">
      <div
        className={`${styles.paddingX} absolute top-[40px]  mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#e37926]">Arin Paliwal</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
