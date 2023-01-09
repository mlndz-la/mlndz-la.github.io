import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a className="navbar_logo">Erick Melendez</a>
        <div className="navbar_links_container">
          <a className="navbar_link">Work</a>
          <a className="navbar_link">Resume</a>
          <a className="navbar_link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;