import data from '../../json/mainContent.json'
import AsideContent from "../AsideContent";
import './Main.css'
import MainContent from "../MainContent";



export default function Main() {


    return (
        <div className="student-work">
            {data.cards.map((card, i) => (
                <MainContent
                    key={i}
                    img={card.img}
                    title={card.title}
                    description={card.description}
                    date={card.date}
                    name={card.name}
                    alt={card.alt}/>
            ))}
        </div>
    )
}