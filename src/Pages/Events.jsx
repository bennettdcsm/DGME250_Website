import data from "../json/newsEventsInfo.json";
import '../components/EventCard/EventCard.css'
import AsideContent from "../components/AsideContent";
import EventInfo from "../components/EventInfo";
import useSelectedEvent from "../components/Functions/useSelectedEvent"


export default function Events() {

    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();

    return (
        <div className="main-content" style={{width: '100%'}}>
            <h2>Upcoming Events</h2>
            <div className="eventCardContainer">
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
                <h2>News</h2>
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

    )
}