import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  About  from "./About";
import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import { StarsCanvas } from "../components";
import  particlesJS  from "./particlesConfig";
import particlesConfig from "./particles.json";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";


const Introduction = () => {
  const [particlesConfigState, setParticlesConfigState] = useState({});

  // load particles config from JSON file on component mount
  // useEffect(() => {
  //   const loadParticlesConfig = async () => {
  //     const response = await fetch(particlesConfig);
  //     const json = await response.json();
  //     setParticlesConfigState(json);
  //   };
  //   loadParticlesConfig();
  // }, []);
  const init=useCallback(async(engine)=>{
    await loadFull(engine)
  })

  return (
    <div>
      <Particles
        options={{
          particles: {
            number: {
              value: 217,
              density: {
                enable: true,
                value_area: 1102.796376526191,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "edge",
              stroke: {
                width: 5,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        init={init}
      />
      {/* <StarsCanvas /> */}
      <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
