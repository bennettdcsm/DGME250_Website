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
                    -bottom-8
                    {/*left-1/2         */}
                    {/*-translate-x-1/2 */}
                    w-[40%]
                    max-w-2xl
                    z-10"
                />
            </div>
            <div className='w-full overflow-hidden overflow-x-auto'>
                <div
                    className="mt-10 relative w-[575px]">
                    <div className="text-lg font-semibold w-full p-[2%]">
                        {headerData.header.navigation.left.map((link, index) => (
                            <Link
                                key={index}
                                to={link.href}
                                className="hover:opacity-55 cursor-pointer transition-opacity duration-300 pr-4"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </header>);
};

export default Header;