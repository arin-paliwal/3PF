import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "./constants/index.js";
import titlelogo from '../../titlelogo.png'
import { logo, menu, close } from "../assets";
import fplogo from "../FirstPage/fplogo.svg";
import SectionWrapper from "./SectionWrapper";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={titlelogo} className="h-20"></img>
          <p
            className={` ${styles.heroSubText}text-[18px] top-[150px] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-secondary`}
          >
            Hi there,<br></br>
            Welcome to my Portfolio
          </p>
          {/* <img src={fplogo} alt="logo" className="w-20 h-20 object-contain" /> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <p className="text-white text-[29px] font-bold cursor-pointer gap-15 flex">
            Welcome to my Portfolio &nbsp;
          </p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              Link
              to={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              }
              hover:text-white
              font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
