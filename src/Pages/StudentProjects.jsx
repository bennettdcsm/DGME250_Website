import data from "../json/studentProjects.json"
import ShowWork from "../components/ShowWork/ShowWork";


export default function StudentProjects() {

    return (
        <div className="main-content">
            <h1>Student Projects</h1>
            <h2>Web Design</h2>
            {data.webDesign.map((item, i) => (
                <ShowWork
                    people={ item.people }
                    title={ item.title }
                    link={ item.link }
                    img={ item.img }
                    date={ item.date }
                    description={ item.description }
                />
            ))}

        </div>
    )
}