import React from "react";
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
    </div>
  );
};

export default Header;