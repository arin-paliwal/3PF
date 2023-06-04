import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets'
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2] bg-black'
        } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow `}
      onClick={() => handleClick(id)}>
      <img
        src={image}
        alt={name}
        className="bg-black absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem] ">
          <h3
            className="text-primary  w-[200px] h-[30px] 
         sm:text-[27px] text-[15px]   
        absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20 bg-opacity-10">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 justify-start w-full 
            flex-col  rounded-b-[24px] z-20   bg-opacity-20 backdrop-filter backdrop-blur-lg  p-4 rounded-lg shadow-lg">
            <div className="absolute inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(repo, '_blank')}
                className=" sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] ">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="text-primary font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-primary sm:text-[14px] text-[16px] 
              max-w-3xl sm:leading-[24px] leading-[18px] 
              cking-[1px]">
              {description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    // Shuffle the projects array
    const shuffleProjects = () => {
      const shuffledArray = [...projects];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    setShuffledProjects(shuffleProjects());
  }, []);

  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex text-secondary">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          As I showcase my projects, I am excited to share the culmination of my
          hard work and dedication to the field of technology. Through these
          projects, I have honed my skills in programming, design, and project
          management, and have pushed the boundaries of what is possible in this
          ever-evolving field. Each project represents a unique challenge and an
          opportunity to innovate, and I am proud of the solutions I have
          created to solve real-world problems.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {shuffledProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
