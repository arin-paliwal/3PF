import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Router, useNavigate } from 'react-router-dom';
import App from '../App';
import fplogo from './fplogo.png'
import { styles } from '../styles';
import particles from './particles.css'

const Intro = () => {



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
  "DSA Programming",
  "UI/UX Desgining",
  "3D Models",
];




  return (
    <div className="particles">
      <div className={`${styles.paddingX}`}>
        <div className={`flex items-center justify-start py-5 gap-7`}>
          <img src={fplogo} className="object-contain w-20 h-20"></img>
          <span className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span className="text-[#986023]">&nbsp;Arin Paliwal</span>
          </span>
        </div>
        <div className="text-[20px] text-secondary">I'm working on :</div>
        <p className={`${styles.heroSubText}mt-2 text-white-100`}>
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
}

export default Intro