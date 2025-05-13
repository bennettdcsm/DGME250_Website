import React from "react";
import img1 from '../img/aboutImg1.jpeg'

export default function About() {
    return (
        <div className="min-h-[1100px] max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6">

            <h2 className="text-2xl mb-4">About Us</h2>
            <p className="mb-4">
                Our mission is to empower students with the skills and knowledge
                necessary to succeed in the dynamic field of digital media.
                We strive to foster creativity, innovation, and critical
                thinking through hands-on learning experiences. By providing
                a comprehensive curriculum that blends technical expertise with
                artistic vision, we prepare our students for rewarding careers
                in the digital industry.
            </p>
            <div className="flex justify-center my-10">
                <div className="relative w-[75%]" style={{paddingTop: "56.25%"}}>
                    <iframe
                        src="https://www.youtube.com/embed/IPs2ph-cQyA"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


            <p className="mb-4">
                The College of San Mateo Digital Media program offers a variety
                of courses and specializations to cater to diverse interests
                within the field:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Graphic Design: Learn the principles of visual communication, typography, color theory, and layout
                    design.
                </li>
                <li>Web Design and Development: Develop dynamic and responsive websites using HTML, CSS, and
                    JavaScript.
                </li>
                <li>Radio and Podcast Production: Produce radio programming with a community-interest focus that will
                    air on CSM's streaming radio station K-DOG in accordance with FCC standards.
                </li>
                <li>Video Production: Master the art of storytelling through video, from pre-production to
                    post-production.
                </li>
            </ul>
            <p className="mb-4">
                By combining theoretical knowledge with hands-on experience, the
                program prepares students for successful careers in the digital media industry.
            </p>

            <div className="relative w-[75%] mx-auto my-10">
                <img src={img1} alt="music instrument" className="w-full h-auto rounded-lg"/>
            </div>


            <h3 className="text-xl font-semibold mb-4">Benefits of our Program</h3>
            <ul className="list-disc pl-6 mb-4">
                <li>Industry Connections: Forge strong relationships with industry professionals through guest lectures,
                    workshops, and mentorship programs.
                </li>
                <li>Hands-On Experience: Gain practical skills through real-world projects and internships.</li>
                <li>Cutting-Edge Technology: Access state-of-the-art software and equipment to stay ahead of industry
                    trends.
                </li>
                <li>Creative Community: Collaborate with talented peers and foster a vibrant creative community.</li>
                <li>Supportive Faculty: Benefit from the guidance and expertise of dedicated faculty members.</li>
                <li>Career Services: Receive personalized career counseling and job placement assistance.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Student Testimonials From Our Alumni</h2>

            <h3 className="text-xl font-semibold mt-6 mb-4">Nicolas Fernandez: A Second Chance</h3>
            <div className="flex justify-center my-10">
                <div className="relative w-[75%]" style={{paddingTop: "56.25%"}}>
                    <iframe
                        src="https://www.youtube.com/embed/VlQc344EEf4"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <p className="mb-4">
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

            <h3 className="text-xl font-semibold mt-10 mb-4">Dorota Sitnik: A Transformative Experience at College of
                San Mateo</h3>
            <div className="flex justify-center my-10">
                <div className="relative w-[75%]" style={{paddingTop: "56.25%"}}>
                    <iframe
                        src="https://www.youtube.com/embed/jFRdBCjiZW8"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <p>
                Dorota Sitnik's case study exemplifies the transformative power of the CSM DGME program.
                The program equips students with the necessary skills to thrive in the dynamic world of
                digital media. By combining various media disciplines, fostering creativity, and providing
                workplace-ready skills, the DGME program empowers students like Dorota to launch successful
                careers in the digital media field.
            </p>
        </div>
    );
}