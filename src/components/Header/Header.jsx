import React from "react";
import {Link} from "react-router-dom";
import headerData from '../../json/headerData.json';

const Header = () => {
    return (
        <header className='inset-y-0'>
            <div className='relative w-full'>
                <img
                    src={headerData.header.headerBackground.src}
                    alt={headerData.header.headerBackground.alt}
                    className='block w-full h-full'
                />

                <img
                    src={headerData.header.logo.src}
                    alt={headerData.header.logo.alt}
                    className="absolute
                    -bottom-9
                    {/*left-1/2         */}
                    {/*-translate-x-1/2 */}
                    w-[25%]
                    max-w-2xl
                    z-10"
                />
            </div>

            <div
                className="flex flex-row justify-between items-center px-5 py-4 mt-10 relative bg-white mx-auto">
                <div className="flex gap-2 text-lg font-semibold">
                    {headerData.header.navigation.left.map((link, index) => (
                        <Link key={index} to={link.href} className="p-5">
                            {link.label}
                        </Link>))}
                </div>
            </div>
        </header>);
};

export default Header;