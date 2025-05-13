import data from "../json/newsEventsInfo.json";
import '../components/EventCard/EventCard.css'
import AsideContent from "../components/AsideContent";
import EventInfo from "../components/EventInfo";
import useSelectedEvent from "../components/Functions/useSelectedEvent"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export default function Events() {

    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();

    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        // hash might be "#/details#features" — grab everything after the *last* "#"
        const fragment = hash.substring(hash.lastIndexOf('#') + 1);
        const el = document.getElementById(fragment);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className="max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6">
            <div className="bg-gradient-to-l-f" style={{width: '100%', margin: 0}}>
                <h2 className="mb-4" id={'events'}>Upcoming Events</h2>
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
                    {data.events.map((event, i) => (
                        <AsideContent
                            key={i}
                            img={event.img}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            onClick={() => handleCardClick(event)}/>
                    ))}
                </div>
                {selectedEvent && (
                    <EventInfo
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
                <h2 className='mt-8 mb-4' id={'news'}>News</h2>
                <div className="eventCardContainer">
                    {data.news.map((event, i) => (
                        <AsideContent
                            key={i}
                            img={event.img}
                            title={event.title}
                            date={event.date}
                            onClick={() => handleCardClick(event)}/>
                    ))}
                </div>
                {selectedEvent && (
                    <EventInfo
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </div>
        </div>

    )
}