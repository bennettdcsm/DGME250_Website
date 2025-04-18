import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import "./Header.css";
import headerData from '../../json/headerData.json';

const Header = () => {
  return (
    <div className="header-container"> {/* Wrapper for the header */}
      <header>
        <div className="header-background">
          <img
            src={headerData.header.headerBackground.src} 
            alt={headerData.header.headerBackground.alt} 
          />
        </div>

        <div className="logo-container">
          <img
            src={headerData.header.logo.src}
            alt={headerData.header.logo.alt} 
          />
        </div>

        <div className="navigation-menu">
          <div className="navigation-left">
            {headerData.header.navigation.left.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="navigation-right">
            {headerData.header.navigation.right.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="header-links">
        {/* Keep your original links if needed */}
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/programs">Programs </Link>
        <Link to="/student-projects">Student Projects </Link>
        <Link to="/for-students">For Students </Link>
        <Link to="/for-professionals">For Professionals </Link>
        <Link to="/events">Events </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;