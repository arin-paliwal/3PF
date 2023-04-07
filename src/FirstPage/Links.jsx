import Lottie from "lottie-react";
import { useState } from "react";
import animation1 from "./Icons/github.json";
import animation2 from "./Icons/instagram.json";
import animation3 from "./Icons/linkedin.json";
import animation4 from "./Icons/twitter.json";

const animations = [
  {
    animationData: animation1,
    link: "https://example.com/1",
  },
  {
    animationData: animation2,
    link: "https://example.com/2",
  },
  {
    animationData: animation3,
    link: "https://example.com/3",
  },
  {
    animationData: animation4,
    link: "https://example.com/4",
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Animations = () => {
  return (
    <div className="flex justify-center">
      {animations.map((animation, index) => (
        <a href={animation.link} key={index}>
          <Lottie
            options={{
              ...defaultOptions,
              animationData: animation.animationData,
            }}
            height={100}
            width={100}
          />
        </a>
      ))}
    </div>
  );
};

export default Animations;