import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Particles from "react-tsparticles";
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

  

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(80);
  const period = 400;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(80);
    }
  };

  const toRotate = [
    "Web Development",
    "Data Structures & Algorithms",
    "Figma",
    "3D Models",
    "Machine Learning"
  ];

  return (
    <div>
      {/* <StarsCanvas/> */}
      <motion.div
        variants={textVariant()}
        className="relative w-full h-full flex-col"
      >
        <br />
        <p className={`${styles.heroSubText} top-[150px]`}>
          My name is Arin Paliwal
        </p>
        <p className={` ${styles.heroSubText}top-[50px] text-secondary`}>
          I'm into
        </p>
        <h2
          className={`${styles.heroHeadText} absolute inset-0 top-[120px]  mx-auto flex flex-row items-start`}
        >
          {text}
        </h2>
      </motion.div>
    </div>
  );
};

