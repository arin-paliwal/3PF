import React from 'react'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const HeroMobile = () => {
  return (
    <div className='mt-0'>
      <div
        className={`${styles.paddingX} text-center justify-center inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#e37926]">Arin Paliwal</span>
            <br />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(HeroMobile,"");