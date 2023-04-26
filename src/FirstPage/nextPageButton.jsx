import React from 'react';
import "./cssnextPageButton.scss";
const nextPageButton = () => {
  return (
      <div className="portfolio-experiment">
        <a>
          <span className="text">Hover me</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </div>
  );
}

export default nextPageButton;