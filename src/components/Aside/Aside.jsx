import React, {useState} from "react";
import AsideContent from "../AsideContent";
import data from '../../json/newsEventsInfo.json';
import './aside.css';
import SeeMore from "../Button/SeeMore";
import EventInfo from "../EventInfo";
import useSelectedEvent from "../Functions/useSelectedEvent";

export default function Aside() {
    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the aside menu open/closed
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Hamburger icon: visible only on small screens */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`line ${menuOpen ? "open" : ""}`}></div>
                    <div className={`line ${menuOpen ? "open" : ""}`}></div>
                    <div className={`line ${menuOpen ? "open" : ""}`}></div>
                </div>
            <aside className={menuOpen ? "open" : ""} className="main-content">
                <h2>News</h2>
                <div className="side-content">
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

                <h2>Events</h2>
                <div className="side-content">
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
        </>
    );
}
