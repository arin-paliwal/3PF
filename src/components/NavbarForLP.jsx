import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import fplogo from "../FirstPage/fplogo.svg";

const NavbarForLP = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClick = (event) => {
      const toggleMenu = document.getElementById("toggle-menu");
      if (toggleMenu && !toggleMenu.contains(event.target)) {
        setToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [toggle]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto my-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={fplogo} alt="logo" className="w-28 h-25 object-contain" />
        </Link>
        {/* <div className="items-center">
          <h2>
            Hello
          </h2>
        </div> */}
        <ul className="list-none hidden as:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#e37926]" : "text-secondary"
              }
              hover:text-[#e37926] text-[18px]
              font-medium text-red cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* for mobile navigation bar */}
        <div
          id="toggle-menu"
          className={`${
            scrolled ? "bg-primary" : "bg-transparent"
          } as:hidden  flex flex-1 justify-end items-center `}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[35px] h-[35px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-20 absolute top-20 right-0 mx-3 my-2 min-w-[140px] z-10 rounded-3xl bg-primary`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  }
                  font-poppins font-medium cursor-pointer text-[24px]
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForLP;
