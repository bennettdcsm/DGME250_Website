import EventCard from "../components/EventCard";
import data from "../json/newsEventsInfo.json";
import '../components/EventCard/EventCard.css'
import MainContent from "../components/MainContent";
import AsideContent from "../components/AsideContent";
import {useState} from "react";
import EventInfo from "../components/EventInfo";


export default function Events() {


    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCardClick = (eventData) => {
        setSelectedEvent(eventData);
        console.log("clicked", eventData.title);
    }

    return (
        <div className="main-content">
            <h2>Upcoming Events</h2>
            <div className="eventCardContainer">
                {data.events.map((event, i) => (
                        <AsideContent
                            key={i}
                            img={event.img}
                            title={event.title}
                            location={event.location}
                            date={event.date}
                            onClick={ ()=>handleCardClick(event) } />
                ))}
            </div>
            {selectedEvent && (
                <EventInfo
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}

        </div>
    )
}