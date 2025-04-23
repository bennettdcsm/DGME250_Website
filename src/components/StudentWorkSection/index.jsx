import ShowWork from "../ShowWork/ShowWork";
import React from "react";





export default function StudentWorkSection( props ) {

    const {section} = props;
    console.log(section);
    return (

        <div className="work-section">
            {section.map((work)=>(
                <ShowWork
                people={work.people}
                title={work.title}
                link={work.link}
                img={work.img}
                date={work.date}
                description={work.description}
                />
            ))}
        </div>
    )
}


