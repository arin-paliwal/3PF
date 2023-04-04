import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Router, useNavigate } from 'react-router-dom';
import App from '../App';
import fplogo from './fplogo.png'
import { styles } from '../styles';

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
    <div className='flex items-center py-5 gap-7'>
      <img src={fplogo} className='object-contain w-20 h-20'></img>
      <span>Hi I,m Arin Paliwal</span>
      <div>{text}</div>
    </div>
  );
}

export default Intro