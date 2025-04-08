import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header style={{
            height: '4rem',
            width: '100%',
            backgroundColor: '#000'
        }}>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/programs">Programs </Link>
            <Link to="/student-projects">Student Projects </Link>
            <Link to="/for-students">For Students </Link>
            <Link to="/for-professionals">For Professionals </Link>
            <Link to="/news">News </Link>
            <Link to="/events">Events </Link>
            <Link to="/contact">Contact</Link>
        </header>
    )
}