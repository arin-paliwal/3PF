import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index)}
        className="w-full p-[1px] rounded=[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
      {/* {title} */}
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio! My name is Arin Paliwal, and I am a passionate
        web developer, UI/UX developer, coder, and data structures and
        algorithms enthusiast. I am also a current engineering student pursuing
        a degree in Machine Learning & Artificial Intelligence from Pranveer
        Singh Institute of Technology. Throughout my journey as a web developer
        and engineer, I have developed a keen eye for detail and a deep
        understanding of how to create engaging and intuitive user interfaces. I
        am always looking for new ways to improve my skills and stay up-to-date
        with the latest trends and technologies in the industry. This portfolio
        showcases my expertise in web development, UI/UX design, coding, and
        data structures and algorithms. You will find a range of projects I have
        worked on, demonstrating my ability to develop dynamic, responsive, and
        aesthetically pleasing websites that meet the needs of my clients. Thank
        you for taking the time to explore my portfolio, and please feel free to
        reach out to me if you have any questions or would like to work together
        on your next project.
      </motion.p>
      {/* <br></br> */}
      <br></br>
      <div className="mt-30">
        <p className={styles.heroHeadText}>I'm into...</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
