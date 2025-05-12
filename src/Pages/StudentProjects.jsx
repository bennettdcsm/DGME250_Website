// import data from "../json/studentProjects.json"
import StudentWorkSection from "../components/StudentWorkSection";
import data2 from "../json/test.json"

export default function StudentProjects() {

    const project = data2.project[0]

    console.log(project)
    return (
        <div className='className="min-h-[1100px] max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6"'>
            {data2.project.slice(0,4).map((section) => (
                <div className="p-6">
                    <h2>{section.title}</h2>
                        <StudentWorkSection section={section.sections} />
                </div>
            ))}
        </div>
    )
}

