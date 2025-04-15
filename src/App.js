import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout";
import Programs from "./Pages/Programs";
import StudentProjects from "./Pages/StudentProjects";
import ForStudents from "./Pages/ForStudents";
import ForProfessionals from "./Pages/ForProfessionals";
import News from "./Pages/News";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";

function App() {
    return (
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/programs" element={<Programs/>}/>
                        <Route path="/student-projects" element={<StudentProjects/>}/>
                        <Route path="/for-students" element={<ForStudents/>}/>
                        <Route path="/for-professionals" element={<ForProfessionals/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/events" element={<Events/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </Router>
    )
}

export default App;
