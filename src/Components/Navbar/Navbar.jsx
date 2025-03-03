import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import React, { useState } from "react";
import "./navbar.css";
import 'boxicons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to navigate to home and scroll to section
  const navigateToSection = (sectionId) => {
    navigate("/"); // Navigate to home first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 50); // Small delay to ensure navigation completes
    closeMenu(); // Close the dropdown menu after navigation
  };

  return (
    <div className="navParent">
      <nav className="nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="./images/logo.png" alt="Medha Logo" />
        </Link>
        <span className="logo-text">Shree Devi Institute of Technology</span>

        <div className="menu">
          <Link to="/" className="nav-link">HOME</Link>
          <button onClick={() => navigateToSection("about-section")} className="nav-link">ABOUT</button>
          <button onClick={() => navigateToSection("event-section")} className="nav-link">EVENTS</button>
          <button onClick={() => navigateToSection("contact-section")} className="nav-link">CONTACT</button>
          <Link to="/register" className="reg">Register</Link>
        </div>

        <div className="mobile">
          <i className="bx bx-menu" onClick={toggleMenu}></i>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <button onClick={() => navigateToSection("about-section")} className="nav-link">About</button>
          <button onClick={() => navigateToSection("event-section")} className="nav-link">Events</button>
          <button onClick={() => navigateToSection("contact-section")} className="nav-link">Contact</button>
          <Link to="/register" onClick={closeMenu}>Register</Link>
        </div>
      )}
    </div>
  );
};
