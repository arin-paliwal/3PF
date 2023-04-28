import React from 'react'
import { styles } from '../styles';

const temp = () => {
  return (
    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#e37926]">Arin Paliwal</span>
        <br />
      </h1>
    </div>
  );
};

export default temp;