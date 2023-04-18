import React, { useState, useEffect } from "react";

const Typewriter = () => {
  

  return (
    <h1>
      {displayText}
      <span id="cursor" />
    </h1>
  );
};

export default Typewriter;
