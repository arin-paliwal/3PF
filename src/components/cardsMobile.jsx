import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "./skillsMobile.css"
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
const cardsMobile = () => {
  return (
    <>
      <motion.div variants={fadeIn("left", "spring")}>
        <p className={styles    .sectionSubText}>Technologies</p>
        <h2 className={styles.heroHeadText}>Skills.</h2>
      </motion.div>
      <div className="cardsSkills">
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
      </div>
    </>
  );
}

export default SectionWrapper(cardsMobile, "");
