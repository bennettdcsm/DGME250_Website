import React, {useState} from "react";
import AsideContent from "../AsideContent";
import data from '../../json/newsEventsInfo.json';
import SeeMore from "../Button/SeeMore";
import EventInfo from "../EventInfo";
import useSelectedEvent from "../Functions/useSelectedEvent";
import {motion, AnimatePresence} from "motion/react"

export default function Aside(props) {

    const {setOpen, open} = props

    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the aside menu open/closed
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <motion.div initial={{x: -20,}} animate={{x: 0,}} exit={{x: -20,}}>
            {/* Hamburger icon: visible only on small screens */}

            <div
                className={`${open ? 'w-6 h-6 bg-black absolute' : "hidden"}`}
                onClick={() => setOpen(!open)}>
                <img src={'images/close.svg'} alt='menu'/>
            </div>

            <aside
                className='

                    max-w-[394px]
                    p-6
                    overflow-y-auto
                    bg-white
                    shadow-[0_10px_20px_rgba(0,0,0,0.3)]
                    rounded-lg
                    transition-transform
                    duration-300
                    ease-in-out
                    z-40'

            >

                <h2 className="text-left mb-6">News</h2>
                <div className="flex flex-col items-center space-y-6">
                    {data.news.slice(0, 2).map((news, i) => (
                        <AsideContent
                            key={i}
                            img={news.img}
                            title={news.title}
                            alt={news.alt}
                            onClick={() => handleCardClick(news)}
                        />
                    ))}
                    <SeeMore type="news"/>
                </div>
                {selectedEvent && (
                    <EventInfo
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}

                <h2 className="text-left mt-12 mb-6">Events</h2>
                <div className="flex flex-col items-center space-y-6">
                    {data.events.slice(0, 2).map((event, i) => (
                        <AsideContent
                            key={i}
                            img={event.img}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            alt={event.alt}
                            onClick={() => handleCardClick(event)}
                        />
                    ))}
                    <SeeMore type="event"/>
                </div>
                {selectedEvent && (
                    <EventInfo
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </aside>
        </motion.div>

    );
}
