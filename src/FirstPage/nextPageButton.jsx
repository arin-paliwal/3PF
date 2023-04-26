import React from 'react';
import "./cssnextPageButton.scss";
const nextPageButton = () => {
  return (
      <div className="portfolio-experiment">
        <a href='/about'>
          <span className="text">Explore About Me !</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </div>
  );
}

export default nextPageButton;