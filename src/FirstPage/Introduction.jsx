import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import navLinks from './index'
import { useState } from 'react';
import { useEffect } from 'react';

const Introduction = () => {
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
  const navigate = useNavigate();
const handleClick = () => {
  navigate("/about");}
  return (
    <>
      <div className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#00b4d8]">Arin Paliwal</span>
          </h1>
        </div>
      </div>
      <button onClick={handleClick} className="p-5">
        Click Here
      </button>
    </>
  );
}

export default Introduction
{
  /* <button onClick={handleClick} className="p-5">
  Click Here
</button>;
const navigate = useNavigate();
const handleClick = () => {
  navigate("/about");
}; */
}