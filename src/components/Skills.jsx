import React from 'react'
import { styles } from '../styles';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
const Skills = () => {
  return (
    <div>
      <motion.div variants={fadeIn("left", "spring")}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.heroHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center mt-20 gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Skills, "technologies");
