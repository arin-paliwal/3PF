import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Lottie from "lottie-react";
import Particles from "react-tsparticles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import animation1 from "./Icons/github.json";
import animation2 from "./Icons/instagram.json";
import animation3 from "./Icons/linkedin.json";
import animation4 from "./Icons/twitter.json";
import githubgif from "./Icons/github.gif";

import fplogo from "./fplogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { github } from "./github-2.gif";
import Github from "./Icons/github.png";
import LinkedIn from "./Icons/linkedin.png";
import Twitter from "./Icons/twitter.png";
import Instagram from "./Icons/instagram.png";
import Facebook from './Icons/facebook.png'
const animations = [
  {
    animationData: animation1,
    link: "https://example.com/1",
  },
  {
    animationData: animation2,
    link: "https://example.com/2",
  },
  {
    animationData: animation3,
    link: "https://example.com/3",
  },
  {
    animationData: animation4,
    link: "https://example.com/4",
  },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
import AnimatedLinks from "./Links";
import { git } from "../assets";
import { Link } from "react-router-dom";
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

  
  const options = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };
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
    "Machine Learning",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <br></br>
      <motion.div
        className="relative w-full max-w-screen-lg mx-auto px-4"
        variants={textVariant()}
      >
        <br />
        <p className="text-white mt-10 text-2xl lg:text-5xl text-center mb-4">
          I'm Arin Paliwal
        </p>
        <div className="text-secondary font-medium text-lg lg:text-2xl text-center mb-8">
          I'm into
        </div>
        <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl text-center mb-8 h-[40px]  ">
          {text}
        </h2> 
        {/* <h3 className={`text-center ${styles.heroSubText}`}>Connect With Me</h3> */}
      </motion.div>
      <br></br>
      <div className="mt-10 flex justify-center gap-6 items-center">
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="Github"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt="Facebook"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Twitter}
            alt="Twitter"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
