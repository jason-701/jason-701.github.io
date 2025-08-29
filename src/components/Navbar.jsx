import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const homepageSection = document.getElementById("homepage");
      if (homepageSection) {
        homepageSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("home");
      }
    }
  };

  const handleAboutClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("about");
      }
    }
  };

  const handleProjectClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("project");
      }
    }
  };

  const handleContactClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("contact");
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const homepageSection = document.getElementById("homepage");
      const aboutSection = document.getElementById("about");
      const projectSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");

      if (
        !homepageSection ||
        !aboutSection ||
        !projectSection ||
        !contactSection
      )
        return;

      const scrollPosition = window.scrollY + 150;
      const homepageTop = homepageSection.offsetTop;
      const aboutTop = aboutSection.offsetTop;
      const projectTop = projectSection.offsetTop;
      const contactTop = contactSection.offsetTop;

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (isNearBottom || scrollPosition >= contactTop) {
        setActiveSection("contact");
      } else if (scrollPosition >= projectTop) {
        setActiveSection("project");
      } else if (scrollPosition >= aboutTop) {
        setActiveSection("about");
      } else if (scrollPosition >= homepageTop) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
