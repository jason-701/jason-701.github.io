import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigation } from "./useNavigation";
import "./navbar.css";

const Navbar = () => {
  const {
    activeSection,
    handleHomeClick,
    handleAboutClick,
    handleProjectClick,
    handleContactClick,
  } = useNavigation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive && activeSection === "home" ? "active" : undefined
            }
            onClick={handleHomeClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && activeSection === "about" ? "active" : undefined
            }
            onClick={handleAboutClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && activeSection === "project" ? "active" : undefined
            }
            onClick={handleProjectClick}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && activeSection === "contact" ? "active" : undefined
            }
            onClick={handleContactClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
