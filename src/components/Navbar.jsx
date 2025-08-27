import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const handleAboutClick = (e) => {
    // Only prevent default and scroll if we're already on the homepage
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection("about");
      }
    }
    // If on different page, let NavLink handle normal navigation
  };

  const handleHomeClick = (e) => {
    // Only prevent default and scroll if we're already on the homepage
    if (location.pathname === "/") {
      e.preventDefault();
      const homepageSection = document.getElementById("homepage");
      if (homepageSection) {
        homepageSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection("home");
      }
    }
    // If on different page, let NavLink handle normal navigation
  };

  const handleProjectClick = (e) => {
    // Only prevent default and scroll if we're already on the homepage
    if (location.pathname === "/") {
      e.preventDefault();
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveSection("project");
      }
    }
    // If on different page, let NavLink handle normal navigation
  };

  // Reset to home when navigating to homepage from other routes
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  // Track active section based on scroll position (only on homepage)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const homepageSection = document.getElementById("homepage");
      const aboutSection = document.getElementById("about");
      const projectSection = document.getElementById("project");

      if (!homepageSection || !aboutSection || !projectSection) return;

      const scrollPosition = window.scrollY + 150;
      const homepageTop = homepageSection.offsetTop;
      const aboutTop = aboutSection.offsetTop;
      const projectTop = projectSection.offsetTop;

      // Check sections from bottom to top to determine which is currently active
      if (scrollPosition >= projectTop) {
        setActiveSection("project");
      } else if (scrollPosition >= aboutTop) {
        setActiveSection("about");
      } else if (scrollPosition >= homepageTop) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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
