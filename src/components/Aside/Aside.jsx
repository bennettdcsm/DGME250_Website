import React, { useState } from "react";
import AsideContent from "../AsideContent";
import data from '../../json/newsEventsInfo.json';
import SeeMore from "../Button/SeeMore";
import EventInfo from "../EventInfo";
import useSelectedEvent from "../Functions/useSelectedEvent";

export default function Aside() {
    const { selectedEvent, setSelectedEvent, handleCardClick } = useSelectedEvent();
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the aside menu open/closed
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Hamburger icon: visible only on small screens */}
            <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col justify-around w-8 h-8 cursor-pointer fixed top-22 left-2 z-50`}
                onClick={toggleMenu}
            >
                <div
                    className={`${
                        menuOpen ? "rotate-45 translate-x-3 translate-y-2" : ""
                    } w-8 h-1 bg-black transition-all duration-300 ease-in-out`}
                ></div>
                <div
                    className={`${
                        menuOpen ? "opacity-0" : ""
                    } w-8 h-1 bg-black transition-all duration-300 ease-in-out`}
                ></div>
                <div
                    className={`${
                        menuOpen ? "rotate--45 translate-x-1 translate-y--1" : ""
                    } w-8 h-1 bg-black transition-all duration-300 ease-in-out`}
                ></div>
            </div>

            <aside
                className={`${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } fixed top-16 left-0 w-80 max-w-[394px] h-full p-4 overflow-y-auto bg-white transition-transform duration-300 ease-in-out z-40`}
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
                    <SeeMore type="news" />
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
                    <SeeMore type="event" />
                </div>
                {selectedEvent && (
                    <EventInfo
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </aside>
        </>
    );
}
