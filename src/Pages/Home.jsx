import Aside from "../components/Aside/Aside";
import Main from "../components/Main";
import '../App.css';


export default function Home() {

    return (
        <div style={{display: "flex", flexDirection: "column", width: "65%"}}>
            <h1>New Student Work</h1>
            <Main/>
        </div>

    );
}