import About from "./About";
import Particles from "react-tsparticles";
import Navbar from "./Navbar";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import "./button.css";
// import "tsparticles/dist/tsparticles.css";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import './socialButton.css'
// import Button from '@mui/material/Button'

const Introduction = () => {
  useEffect(() => {
    setParticlesConfigState({
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 1100,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 2,
            color: "#da5923",
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
          value: 2,
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
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
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
            distance: 70,
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
    });
  }, []);
  const [particlesConfigState, setParticlesConfigState] = useState({});
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <div>
      <Particles options={particlesConfigState} init={init} />
      <div className="relative z-[-1] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <About />
      </div>
      <div className="center">
        <div class="wrapper">
          <div class="icon facebook">
            <div class="tooltip">Facebook</div>
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
          </div>

          <div class="icon twitter">
            <div class="tooltip">Twitter</div>
            <span>
              <i class="fab fa-twitter"></i>
            </span>
          </div>
          <div class="icon github">
            <div class="tooltip">github</div>
            <span>
              <i class="fab fa-github"></i>
            </span>
          </div>
          <div class="icon youtube">
            <div class="tooltip">YouTube</div>
            <span>
              <i class="fab fa-youtube"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center xs:mt-10 md:mt-0">
        <button className="btn-43">
          <Link to="/about">
            <span className="old">Know More</span>
            <span className="new">About Me!</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Introduction;
