// import React from 'react'
// import { styles } from '../styles';
// import { SectionWrapper } from '../hoc';

// const HeroMobile = () => {
//   return (
//     <div className='mt-0'>
//       <div
//         className={`${styles.paddingX} text-center justify-center inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start`}
//       >
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#e37926]">Arin Paliwal</span>
//             <br />
//             <h2>text</h2>
//           </h1>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default SectionWrapper(HeroMobile,"");


import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "./typo.css"

const HeroMobile = () => {
  const [index, setIndex] = useState(0);
  const texts = ["Bonjour", "Hello", "Namaste", "Hola", "Salve", "Konnichiwa"]; // an array of texts to display 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 3000); // set the interval time for 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [index, texts.length]);

  return (
    <div className="mt-0">
      <div
        className={`${styles.paddingX} text-center justify-center inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#e37926]">Arin Paliwal</span>
            <br />
            <div className="flex">
              <div className="text-[#6b6a69] mt-10 mb-10">
                {texts.map((text, i) => (
                  <span
                    key={i}
                    className={i === index ? "fade-in" : "fade-out"}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(HeroMobile, "");







