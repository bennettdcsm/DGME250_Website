import data from "../json/newsEventsInfo.json";
import '../components/EventCard/EventCard.css'
import AsideContent from "../components/AsideContent";
import EventInfo from "../components/EventInfo";
import useSelectedEvent from "../components/Functions/useSelectedEvent"


export default function Events() {

    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();

    return (
        <div className="max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6"> 
            <div className="bg-gradient-to-l-f" style={{width: '100%', margin: 0}}>
                <h2 className="mb-4">Upcoming Events</h2>
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
                <h2 className='mt-8 mb-4'>News</h2>
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