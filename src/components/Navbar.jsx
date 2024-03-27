import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchForm } from "../components";
import { navItems } from "../constants";
import { Logo_1, Logo_2, Logo_3 } from "../assets";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "../style";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 120; // Adjust the value as needed

      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavLinkClick = (path) => {
    setToggleOpen(false);
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top after navigation
  };

  return (
    <nav
      className={`${styles.boxWidth} ${
        styles.paddingX
      } flex justify-between items-center fixed top-0 left-0 right-0 z-10 w-full  transition-all duration-500 ease-linear bg-[#fafafa]  ${
        isScrolled ? "py-3 shadow-lg" : "py-4"
      }`}
    >
      <div className="flex justify-start items-center gap-12">
        <a href="/" className="flex justify-start items-center gap-1">
          {[Logo_1, Logo_2, Logo_3].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-8 md:w-10 h-8 lg:h-10"
            />
          ))}
        </a>
        <div className="md:block hidden">
          <SearchForm styles="w-full min-w-[280px]" />
        </div>
      </div>
      {/* menu items */}
      <ul className="list-none md:flex hidden flex-1 justify-end items-center gap-12 text-lg capitalize">
        {navItems.map(({ path, icon, link }) => (
          <li key={link} className="font-semibold transition-all duration-300">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-gray"
              }
              onClick={() => handleNavLinkClick(path)}
            >
              <span>{link}</span>
              {icon && <img src={icon} alt="Fire" className="w-6 h-6 inline" />}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="md:hidden block ml-8">
        <button type="button" onClick={() => setToggleOpen((prev) => !prev)}>
          {toggleOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        <div
          className={`${
            toggleOpen ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded sidebar`}
        >
          <ul className="list-none flex flex-1 flex-col justify-end items-start gap-6 text-lg capitalize">
            {navItems.map(({ path, link }) => (
              <li
                key={link}
                className="font-semibold transition-all duration-300"
                onClick={() => handleNavLinkClick(path)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-gray"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
