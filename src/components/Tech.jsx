import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "./skillsMobile.css";

const Tech = () => {
  return (
    <>
      <motion.div variants={fadeIn("left", "spring")}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.heroHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center mt-20 gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* <div className="cardsSkills">
        <section class="main">
          <div class="wrap wrap--1">
            <div class="container container--1">
              <p>Java</p>
            </div>
          </div>

          <div class="wrap wrap--2">
            <div class="container container--2">
              <p>Python</p>
            </div>
          </div>

          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>React</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>Git</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>MongoDB</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>C / C++</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>JavaScript</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>Machine Learning</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>React</p>
            </div>
          </div>
          <div class="wrap wrap--3">
            <div class="container container--3">
              <p>Figma</p>
            </div>
          </div>
        </section>
      </div> */}
      <div className="portfolio-experiment flex justify-center mt-8 p-6">
        <a href="/projects">
          <span className="text">My Projects !</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
