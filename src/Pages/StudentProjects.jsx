import data from "../json/studentProjects.json"
import React from 'react'
import StudentWorkSection from "../components/StudentWorkSection";
import data2 from "../json/test.json"


export default function StudentProjects() {

    const project = data2.project[0]

    console.log(project)
    return (
        <div className='main-content'>
            {data2.project.map((section, i) => (
                <div className="main-content">
                    <h2>{section.title}</h2>
                    <StudentWorkSection section={project.sections}/>
                </div>
            ))}
        </div>
    )
}

