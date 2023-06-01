import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
// import Typewriter from 'typewriter-effect/dist/core';
import { textVariant } from "../utils/motion";
const About = () => {
const [wordIndex, setWordIndex] = useState(0);
const [letterIndex, setLetterIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const words = [
  "Full Stack Development",
  "Data Structures",
  "UI/UX Designing",
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
        <p
          className={`font-bold text-[white] mt-[-60px] text-2xl lg:text-5xl text-center mb-4 ${styles.sectionHeadText}.`}
        >
            <span className="text-[#e37926]">I'm Arin Paliwal</span>
        </p>
        <div className="text-[#807d90] font-medium text-lg lg:text-2xl text-center mb-8 mt-[-20px]">
          I'm into
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center mb-8 h-[40px]  ">
          {displayText}
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
