import {Link} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap'
import Contact from "./Contact";
import img1 from '../img/aboutImg1.jpeg'
import img2 from '../img/videoPlaceHolder1.png'
import img3 from '../img/videoPlaceHolder2.png'
import {Switch} from "@mui/material";

export default function About() {
    return (
        <div className="about">

            <h2>About Us</h2>
            <p>
                Our mission is to empower students with the skills and knowledge
                necessary to succeed in the dynamic field of digital media.
                We strive to foster creativity, innovation, and critical
                thinking through hands-on learning experiences. By providing
                a comprehensive curriculum that blends technical expertise with
                artistic vision, we prepare our students for rewarding careers
                in the digital industry.
            </p>
            <div style={{
                position: "relative",
                width: "100%",
                height: 0,
                padding: "0 1.5 rem",
                margin: "auto",
                marginBottom: "1.5rem",
                paddingTop: "56.25%", // 16:9 ratio (9/16*100)
                boxSizing: "border-box",
            }}>
                <iframe
                    src="https://www.youtube.com/embed/IPs2ph-cQyA"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "0",
                    }}
                    allowFullScreen
                ></iframe>
            </div>

            <p>
                The College of San Mateo Digital Media program offers a variety
                of courses and specializations to cater to diverse interests
                within the field:
            </p>
            <ul>
                <li>
                    Graphic Design: Learn the principles of visual communication,
                    typography, color theory, and layout design.
                </li>
                <li>
                    Web Design and Development: Develop dynamic and responsive
                    websites using HTML, CSS, and JavaScript.
                </li>
                <li>
                    Radio and Podcast Production: Produce radio programming
                    with a community-interest focus that will air on CSM's
                    streaming radio station K-DOG in accordance with FCC standards.
                </li>
                <li>
                    Video Production: Master the art of storytelling through video,
                    from pre-production to post-production.
                </li>
            </ul>
            <p>
                By combining theoretical knowledge with hands-on experience, the
                program prepares students for successful careers in the digital media industry.
            </p>

            <img src={img1} alt='music instrument'/>

            <h3>Benefits of our Program</h3>
            <ul>
                <li>
                    Industry Connections: Forge strong relationships with industry
                    professionals through guest lectures, workshops, and mentorship programs.
                </li>
                <li>
                    Hands-On Experience: Gain practical skills through real-world projects and internships.
                </li>
                <li>
                    Cutting-Edge Technology: Access state-of-the-art software and equipment
                    to stay ahead of industry trends.
                </li>
                <li>
                    Creative Community: Collaborate with talented peers and foster a vibrant
                    creative community.
                </li>
                <li>
                    Supportive Faculty: Benefit from the guidance and expertise of dedicated faculty members.
                </li>
                <li>
                    Career Services: Receive personalized career counseling and job placement assistance
                </li>
            </ul>

            <h2>Student Testimonials From Our Alumni</h2>
            <img src={img2} alt='Video Interview'/>
            <h3>Nicolas Fernandez: A Second Chance</h3>
            <p>
                Nicolas Fernandez, a Colombian international student, found a new beginning at the College
                of San Mateo. Despite language and academic hurdles, he thrived with the help of supportive
                faculty and world-class facilities.<br/>
                As a student assistant, Nicolas gained practical experience in digital media, from tutoring
                to video production. He also actively engaged in campus life.<br/>
                The College of San Mateo's Digital Media program offers a wide range of courses, from graphic
                design to game development. Students collaborate on real-world projects and learn from
                industry-leading technology.<br/>
                Nicolas's story highlights the transformative power of education. The College of San Mateo's
                program empowers students to overcome challenges and achieve their goals in the digital world.
            </p>

            <img src={img3} alt='Video Interview'/>
            <h3>Dorota Sitnik: A Transformative Experience at College of San Mateo </h3>
            <p>Dorota Sitnik's case study exemplifies the transformative power of the CSM DGME program.
                The program equips students with the necessary skills to thrive in the dynamic world of
                digital media. By combining various media disciplines, fostering creativity, and providing
                workplace-ready skills, the DGME program empowers students like Dorota to launch successful
                careers in the digital media field.</p>

        </div>
    )
}