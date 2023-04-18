import React from "react";
import "./Icons.css";
const Icons = () => {
  return (
    <div>
      <section className="trial-block shadow3" id="ContactUs">
        <div className="height450">
          <div className="section-title text-center">
            <span className="section-title-line section-title-line"></span>
          </div>
          <div className="social-overlap process-scetion mt100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="social-bar">
                    <div className="social-icons mb-3 iconpad text-center">
                      <a className="slider-nav-item">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a className="slider-nav-item">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=_XiOcsj3oNI&t=50s"
                        target="_blank"
                        className="slider-nav-item"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="slider-nav-item">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Icons;
