import './App.css';
import './index.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout";
import Programs from "./Pages/Programs";
import StudentProjects from "./Pages/StudentProjects";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/programs" element={<Programs/>}/>
                    <Route path="/student-projects" element={<StudentProjects/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
