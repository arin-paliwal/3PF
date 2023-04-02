import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={fadeIn("left", "spring")}>
        <p className={styles.sectionSubText}>Currently</p>
        <h2 className={styles.heroHeadText}>Technologies I'm working on.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center mt-20 gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Tech, "technologies");