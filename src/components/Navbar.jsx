import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        Internova
      </Link>

      {/* Links + Login button */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Career">Career</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/form">Form</Link>
        <Link to="/login" className="navbar-login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
