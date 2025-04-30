import React from "react";
import { Link } from "react-router-dom";
import headerData from '../../json/headerData.json';

const Header = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="relative w-full">
        <div className="relative">
          <img
            src={headerData.header.headerBackground.src} 
            alt={headerData.header.headerBackground.alt} 
            className="w-full h-auto block"
          />
        </div>

        <div className="absolute top-[63%] left-[50%] transform -translate-x-1/2 z-10 w-[40%] max-w-[700px] min-w-[150px]">
          <img
            src={headerData.header.logo.src}
            alt={headerData.header.logo.alt}
            className="w-full h-auto"
          />
        </div>


        <div className="flex flex-row justify-between items-center max-w-[1512px] px-5 py-4 mt-10 relative bg-white mx-auto">
          <div className="flex gap-8 text-lg font-semibold">
            {headerData.header.navigation.left.map((link, index) => (
              <Link key={index} to={link.href} className="text-black hover:text-gray-700 hover:underline">
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