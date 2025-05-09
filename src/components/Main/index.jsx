import data from '../../json/mainContent.json'
import AsideContent from "../AsideContent";
import './Main.css'
import MainContent from "../MainContent";



export default function Main() {


    return (
        <div className="min-h-[1100px] max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6">
             <h2 className="mb-4">Home</h2>
            <div className="student-work">
                {data.cards.map((card, i) => (
                    <MainContent
                        key={i}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        date={card.date}
                        name={card.people}
                        link={card.link}/>
                ))}
            </div>
        </div>
    )
}