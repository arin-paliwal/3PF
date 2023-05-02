import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import './skillsMobile.css'
const skillsMobile = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center mt-20 gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div class="cards">
              <div class="card" active>
                <img src={technology.icon} alt="" class="card__image" />
                <div class="card__infos">
                  <h3 class="card__name">{technology.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(skillsMobile, "");