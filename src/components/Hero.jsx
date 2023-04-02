import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas'
import {useState,useEffect} from 'react';
const Hero = () => {
  const [loopNum,setLoopNum]=useState(0);
  const [isDeleting,setIsDeleting]=useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(80);
  const period=400;

  useEffect(()=>{
    let ticker=setInterval(()=>{
      tick();
    },delta)
    return ()=>{clearInterval(ticker)};
  },[text])

  const tick=()=>{
    let i=loopNum%toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
    setText(updatedText);
    if(isDeleting){
      setDelta(prevDelta=>prevDelta/2);
    }
    if(!isDeleting && updatedText===fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if(isDeleting && updatedText===''){
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(80);
    }
  }

  const toRotate=["Web Development","DSA Programming","UI/UX Desgining","3D Models"];
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* for rounded ball */}
          {/* <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#7149C6]">Arin Paliwal</span>
            <br />
          </h1>
          <div className="text-[20px] text-[#7149C6]">I'm working on :</div>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>
            <span>{text}</span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* for scrolling animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w=[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero