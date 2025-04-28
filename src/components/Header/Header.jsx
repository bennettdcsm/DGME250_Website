import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerData from '../../json/headerData.json';

const Header = () => {
  return (
    <div className="header-container">
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
              <Link key={index} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
