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

import fplogo from "./fplogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { github } from "./github-2.gif";
import github from "./Icons/github.json";
import LinkedIn from "./Icons/linkedin.json";
import Twitter from "./Icons/twitter.json";
import Instagram from "./Icons/instagram.json";
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
  const animations = [
    {
      animationData: github,
    },
    {
      animationData: LinkedIn,
    },
    {
      animationData: Twitter,
    },
    {
      animationData: Instagram,
    },
  ];
  
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
      <motion.div variants={textVariant()} className="relative w-full">
        <br />
        {/* <p className={`${styles.heroSubText} top-[150px]`}>
          My name is Arin Paliwal */}
        {/* </p> */}
        <p
          className={
            " text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[40px] lg:leading-[98px] mt-2 text-center mb-2"
          }
        >
          I'm Arin Paliwal
          <br />
          <div className={`${styles.heroSubText} mt-[-9px]`}>I'm into</div>
        </p>
        <h2
          className={
            " lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[40px] lg:leading-[98px] mt-2 text-secondary text-center h-[50px]"
          }
        >
          {text}
        </h2>
      </motion.div>
      <div className="mt-10 flex justify-center items-center w-[400px]">
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-full">
            <Lottie animationData={Twitter} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="object-contain h-full">
            <Lottie animationData={LinkedIn} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie animationData={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie animationData={Instagram} />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
