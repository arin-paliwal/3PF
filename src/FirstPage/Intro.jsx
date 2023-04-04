import React from 'react'
import { BrowserRouter, Link, Route, Router, useNavigate } from 'react-router-dom';
import App from '../App';

const Intro = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/about");
    };
  return (
    // <BrowserRouter>
    //   <Router>
    <div>
      <button onClick={handleClick}>Arin</button>
    </div>
    //   </Router>
    // </BrowserRouter>
  );
}

export default Intro