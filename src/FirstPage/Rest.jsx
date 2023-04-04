import React from 'react'
import { useNavigate } from 'react-router-dom';

const Rest = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/about");
    };
  return (
    <div>
      {/* <div>Arin Paliwal | Web Developer</div>
      <img></img>
      <button onClick={handleClick}>Arin</button> */}
      <h1>Arin Rest Page</h1>
    </div>
  );
}

export default Rest