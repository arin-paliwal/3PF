import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
// import Typewriter from 'typewriter-effect/dist/core';
import { textVariant } from "../utils/motion";
import Github from "./Icons/github.png";
import LinkedIn from "./Icons/linkedin.png";
import Twitter from "./Icons/twitter.png";
import Instagram from "./Icons/instagram.png";
import Facebook from "./Icons/facebook.png";
const About = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(80);
  // const period = 400;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);
  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);
  //   setText(updatedText);
  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }
  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setDelta(80);
  //   }
  //  };

  // const toRotate = [
  //   "Web Development",
  //   "Data Structures & Algorithms",
  //   "Graphics Designing",
  //   "3D Models",
  //   "Machine Learning",
  // ];


{/* <Typewriter
  textStyle={{
    fontFamily: "Red Hat Display",
    color: "#3F3D56",
    fontWeight: 500,
    fontSize: "1.5em",
  }}
  startDelay={2000}
  cursorColor="#3F3D56"
  multiText={[
    "Hey there, This is a type writer animation package",
    "it consist of two types...",
    "Single text display and multi text display",
    "Fonts can be customized.",
    "The type speed can be customized as well",
  ]}
  loop={true}
  nextTextDelay={1000}
  typeSpeed={30}
/>; */}
const [wordIndex, setWordIndex] = useState(0);
const [letterIndex, setLetterIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const words = [
  "Web Development",
  "Data Structures & Algorithms",
  "UI/UX Designing",
  "3D Models",
  "Machine Learning",
];
const typingSpeed = 100;
const deletingSpeed = 70 ;
const pauseTime = 1000;

useEffect(() => {
  const timeout = setTimeout(
    () => {
      handleTyping();
    },
    isDeleting ? deletingSpeed : typingSpeed
  );
  return () => clearTimeout(timeout);
}, [letterIndex, isDeleting]);

const handleTyping = () => {
  const currentWord = words[wordIndex];
  const currentLetter = currentWord[letterIndex];

  if (isDeleting) {
    if (letterIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      setLetterIndex((prevIndex) => prevIndex - 1);
    }
  } else {
    if (letterIndex === currentWord.length - 1) {
      setIsDeleting(true);
    }
    setLetterIndex((prevIndex) => prevIndex + 1);
  }
};

const currentWord = words[wordIndex];
const displayText = currentWord.substring(0, letterIndex);
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <br></br>
      <motion.div
        className="relative w-full max-w-screen-lg mx-auto px-4"
        variants={textVariant()}
      >
        <br />
        <p className={`font-bold text-[white] mt-10 text-2xl lg:text-5xl text-center mb-4 ${styles.sectionHeadText}.`}>
          I'm <span className="text-[#e37926]">Arin Paliwal</span>
        </p>
        <div className="text-[#807d90] font-medium text-lg lg:text-2xl text-center mb-8 mt-[-20px]">
          I'm into
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center mb-8 h-[40px]  ">
          {/* {displayText} */}
        </h2>
      </motion.div>
      <br></br>
      {/* <div className="mt-10 flex justify-center gap-6 items-center">
        <a href="https://github.com/arin-paliwal">
          <img
            src={Github}
            alt="Github"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/paliwal.arin"
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
          href="https://twitter.com/arin_paliwal"
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
          href="https://www.linkedin.com/in/arinpaliwal/"
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
          href="https://www.instagram.com/arin.paliwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="w-8 h-8 sm:w-10 sm:h-10"
          ></img>
        </a>
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
