import data from "../json/newsEventsInfo.json";
import '../components/EventCard/EventCard.css'
import AsideContent from "../components/AsideContent";
import EventInfo from "../components/EventInfo";
import useSelectedEvent from "../components/Functions/useSelectedEvent"


export default function Events() {

    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();

    return (
        <div className="bg-gradient-to-l-f" style={{width: '100%', margin: 0}}>
            <h2 className=''>Upcoming Events</h2>
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
            <h2 className='text-7xl font-bold text-blue-300'>News</h2>
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