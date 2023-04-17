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
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.heroHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center mt-20 gap-10 max-w-6xl">
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