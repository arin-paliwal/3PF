import React from 'react'
import "./Icons.css"
const Socialicons = () => {
  return (
    <div className="icons">
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
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
            <i className="fab fa-instagram"></i>
          </div>
          <span>Instagram</span>
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
    </div>
  );
}

export default Socialicons