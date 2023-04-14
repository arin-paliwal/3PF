import React from "react";
import "./styles.css"; // Import the stylesheet
import github from '../Icons/github.json'
// import LinkedIn from "./Icons/linkedin.png";
// import linkedin from '../Icons/github.png'
// import Twitter from "./Icons/twitter.png";
// import Instagram from "./Icons/instagram.png";
// import Facebook from "./Icons/facebook.png";
function AnimatedButtons() {
  return (
    <div>
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <img src={github}/>
          </div>
          <span>Facebook</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
          <span>Twitter</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-dribbble"></i>
          </div>
          <span>dribbble</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-github"></i>
          </div>
          <span>Github</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <span>YouTube</span>
        </div>
      </div>
      <p>Deerbucks</p>
    </div>
  );
}

export default AnimatedButtons;
