import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-tilt";
import { drive, webd, dsapython, a3d } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
const FeedbackCard = ({ issuer, course, link, image }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <img src={image} className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
        <div
          onClick={() => window.open(link, "_blank")}
          className=" w-10 h-10 rounded-full flex justify-center cursor-pointer items-center fill-black black-gradient"
        >
          <img
            src={drive}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </div>
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{issuer}</h3>
      <p className="mt-2 text-secondary text-[14px]">{course}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {/* {tags.map((tag) => (
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))} */}
    </div>
  </Tilt>
);
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Knowledge</p>
          <h2 className={styles.sectionHeadText}>Trainings & Certificate.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((certificate, index) => (
          <FeedbackCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
      <div className="portfolio-experiment flex justify-center mt-8 p-6">
        <a href="/contact">
          <span className="text">Contact Me !</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "training&certificate");
