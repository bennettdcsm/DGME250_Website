// import data from "../json/studentProjects.json"
import StudentWorkSection from "../components/StudentWorkSection";
import data2 from "../json/test.json"

export default function StudentProjects() {

    const project = data2.project[0]

    console.log(project)
    return (
        <div className='main-content'>
            {data2.project.slice(0,4).map((section) => (
                <div className="projects">
                    <h2>{section.title}</h2>
                        <StudentWorkSection section={section.sections} />
                </div>
            ))}
        </div>
    )
}

