import Aside from "../components/Aside/Aside";
import Main from "../components/Main";
import '../App.css';
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <div className="App">
            <div className="main-container">
                <Aside/>
                <Main/>
            </div>
        </div>
    );
}