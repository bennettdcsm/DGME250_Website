import AsideContent from "../AsideContent";
import data from '../../json/newsEventsInfo.json'
import './aside.css';
import SeeMore from "../Button/SeeMore";

export default function Aside() {

    return (
        <aside>
            <h2>News</h2>
            <div className="side-content">
                {data.news.map((news, i) => (
                    <AsideContent key={i} img={news.img} title={news.title} location={news.description}/>
                ))}
                <SeeMore type="news"/>
            </div>

            <h2>Events</h2>
            <div className="side-content">
                {data.events.map((event, i) => (
                    <AsideContent key={i} img={event.img} title={event.title} location={event.location} date={event.date}/>
                ))}
                <SeeMore type="event"/>
            </div>

        </aside>
    )
}