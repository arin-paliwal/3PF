import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=>window.open (source_code_link,"_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center cursor-pointer items-center'>
              <img src={github} alt={github} className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex max-w-[3xl]">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-[2xl] text-[17px] leading-[30px]"
        >
          As I showcase my projects, I am excited to share the culmination of my
          hard work and dedication to the field of technology. Through these
          projects, I have honed my skills in programming, design, and project
          management, and have pushed the boundaries of what is possible in this
          ever-evolving field. Each project represents a unique challenge and an
          opportunity to innovate, and I am proud of the solutions I have
          created to solve real-world problems. I am eager to demonstrate how my
          projects have improved user experience, increased efficiency, and
          provided valuable insights to businesses and organizations. As I
          present my projects, I hope to inspire others to pursue their own
          ideas and push the boundaries of what is possible with technology.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="portfolio-experiment flex justify-center mt-10">
        <a href="/trainings">
          <span className="text">My Certifications !</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </div>
    </>
  );
}

export default SectionWrapper(Works, "projects");