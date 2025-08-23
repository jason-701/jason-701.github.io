import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleAboutClick = (e) => {
    e.preventDefault();
    const educationSection = document.getElementById("education");
    if (educationSection) {
      educationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <a href="#education" onClick={handleAboutClick} className="nav-link">
            About
          </a>
        </li>{" "}
        {/* This closing tag was missing */}
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
