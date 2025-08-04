import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
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
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
        </li>
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
