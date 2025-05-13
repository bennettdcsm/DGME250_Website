import {Outlet, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import './index.css'
import React, {useCallback, useState} from "react";
import {useMediaQuery} from 'react-responsive'
import {motion} from "motion/react";


export default function Layout() {
    const {pathname} = useLocation();

    const hideAsideOn = ["/news", "/events"];
    const showAside = !hideAsideOn.includes(pathname);
    const [open, setOpen] = useState(false);
    const mdScreen = useMediaQuery({maxWidth: 1024})

    const handleClick = useCallback(() => {
        setOpen(!open);
    }, [])

    return (
        <>
            <Header open={open} setOpen={setOpen}/>
            <div className=" container mx-auto max-w-7xl">

                <main className="flex gap-x-[2%] px-[2%] pb-6">
                    {showAside && <div className='lg:w-[30%]'>

                        {mdScreen ?
                            open ?
                                <div className='absolute z-50  h-[71%] overflow-y-auto rounded shadow-lg'>
                                    <Aside setOpen={setOpen} open={open}/>
                                </div>
                                :
                                <div className='  z-50'>
                                    <div
                                        className={' w-6 h-6 bg-black '}
                                        onClick={handleClick}>
                                        <img src={'images/menu.svg'} alt='menu'/>
                                    </div>
                                </div>
                            :
                            <Aside/>
                        }
                    </div>}
                    <div className={`lg:w-[${showAside ? '66%' : 'full'}]`}>
                        <Outlet/>
                    </div>
                </main>

            </div>
            <Footer/>
        </>
    );
}
