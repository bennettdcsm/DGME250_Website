import useSelectedEvent from "../components/Functions/useSelectedEvent";
import data from "../json/newsEventsInfo.json";
import AsideContent from "../components/AsideContent";
import EventInfo from "../components/EventInfo";

export default function News() {
    const {selectedEvent, setSelectedEvent, handleCardClick} = useSelectedEvent();

    return (
        <div className="main-content">
            <h2>News</h2>
            <div className="eventCardContainer">
                {data.news.map((event, i) => (
                    <AsideContent
                        key={i}
                        img={event.img}
                        title={event.title}
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