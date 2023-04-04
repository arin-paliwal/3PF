import React from 'react'
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();
const handleClick = () => {
  navigate("/about");}
  return (
    <>
      <div>Introduction</div>
      <button onClick={handleClick} className="p-5">
        Click Here
      </button>
    </>
  );
}

export default Introduction
{
  /* <button onClick={handleClick} className="p-5">
  Click Here
</button>;
const navigate = useNavigate();
const handleClick = () => {
  navigate("/about");
}; */
}