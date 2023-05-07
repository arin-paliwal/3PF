import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ name, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring")}
        className="w-full p-[1px] rounded=[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >{name}
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const TM = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.heroHeadText}>Skills.</h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap gap-10">
        {technologies.map((technology) => (
          <div className="w-full h-28" key={technology.name}>
            <ServiceCard icon={technology.icon} />
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
};

export default TM;
