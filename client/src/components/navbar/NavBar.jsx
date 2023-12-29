import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo/Damajc.png";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky-nav">
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
        <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-links">
            <h3>Home</h3>
          </Link>
          <a className="nav-links">
            {" "}
            <h3>API's</h3>{" "}
          </a>
          <a className="nav-links">
            {" "}
            <h3>Stories</h3>{" "}
          </a>
          <Link to="/about" className="nav-links">
            <h3>About</h3>
          </Link>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
}

export default NavBar;
