import React, { useState } from 'react';
import '../Styles/Programs.css';

const programs = {
  "web-design-associate": [
    { title: "DGME 167: Web and Mobile Design I", description: "This course teaches the fundamentals of website/mobile front-end development through a mixture of hands-on exercises, lecture, and demonstration. Topics include site principles, introduction to HTML, color and image preparation for the web and mobile, mobile and desktop browser compatibility, graphic user interface design, usability, internet ethics, and copyright issues. Students build a basic website following accepted design layout standards. Some familiarity with Adobe Photoshop is presumed. Software: Adobe Creative Cloud®" },
    { title: "DGME 168: Web and Mobile Design II", description: "Students learn advanced concepts and techniques to create elaborate and visually appealing content for a variety of devices. User-centered design, graphic user interface customization, Internet ethics, and copyright issues are taught as well as a review of basic color, layout and typography theory and practice. Some HTML, CSS, JavaScript, and CGI concepts are demonstrated to incorporate basic interactivity. Some familiarity with Adobe Photoshop is presumed. Software: Adobe Creative Cloud®" },
    { title: "DGME 169: Web and Mobile Design III", description: "Students utilize HTML & CSS skills to create mobile-first and responsive websites. Students will learn the fundamentals of responsive web design (RWD) that include media queries, fluid grids, and flexible images. Mobile-first design will be an essential theme of the course, as well as User Experience and Interactive Design strategies. Students will develop a functional prototype. Software: Adobe Creative Suite®" },
    { title: "DGME 164: UI/UX Design", description: "Covers the fundamentals of user-centered interface design concepts and practices for web, mobile devices, and other applications. Students gain an understanding of how users interact with an interface and be introduced to the concepts of usability, interface associations and aesthetics, and the user experience. Basic knowledge of Adobe Illustrator and Photoshop is required. Software: Adobe Creative Cloud®" },
    { title: "DGME 220: Typography", description: "This course covers the essentials of interaction and visual design principles and how they are applied. Students learn how to evaluate and analyze the uses of interactive media and understand how viewing interactive media on a variety of screen sizes and devices may impact the experience. They also learn how to apply the principles of design and usability when creating interactive content." }
  ],
  "broadcast-media": [
    { title: "DMGE 100: Media in Society", description: "Students will examine media's influence on culture and society while also analyzing their personal media habits. This course helps students evaluate the ways in which they receive and perceive news and entertainment. Students will be guided through the extraordinary history of mass communication. This course includes lessons in advertising, media effects, and the application of media theories." },
    { title: "DGME 102: Media, Law and Ethics", description: "Students will examine media's influence on culture and society while also analyzing their personal media habits. This course helps students evaluate the ways in which they receive and perceive news and entertainment. Students will be guided through the extraordinary history of mass communication. This course includes lessons in advertising, media effects, and the application of media theories." },
    { title: "DGME 113: Digital Video Production I", description: "Students will acquire the skills necessary to make professional level video productions, which may be used in documentaries, music videos, TV productions, commercials, news reports, and digital films. Covers video field production from planning and scripting, through shooting and editing. Students learn on-location production techniques and technologies, such as shooting to edit. Hands-on training allows students to develop skills in camera operation, audio, and lighting. Includes digital video editing using common software such as Adobe Premiere." },
    { title: "DGME 114: Digital Video Production II", description: "This course is intended as the next stage in enhancing the video production abilities developed in DGME 113 Digital Video Production. Students will shoot and edit more advanced projects that further expand their skills in location production, including scripting, lighting, sound recording, continuity editing, and working in small crews." },
    { title: "DGME 118: Digital Audio Production", description: "Students get hands-on experience in audio production and the basic operation of professional audio equipment. Covers basic microphone techniques, recording in the studio and field, and broadcast production. Students will gain a practical understanding of digital audio recording, mixing, and editing. Includes an introduction to digital audio editing software." }
  ],
  "graphic-design": [
    { title: "DGME 211: Introduction to Graphic Design", description: "An introduction to visual communications in the field of graphic design. The course includes concept development, the creative design process, production, and presentation techniques. Students develop technical abilities to amplify content through composition, symbolism, and experimentation. Emphasis is on the basic design principles, design history, and understanding of the designer's role in society." },
    { title: "DGME 215: History of Graphic Design", description: "Exploration of the history of graphic design with emphasis on late 19th Century to current contemporary styles in various media. Students develop a contextual awareness and background in graphic design in preparation for creating effective solutions to graphic design problems. This course is designed to connect the works of representative artists and the relevant styles with the appearance and development of new printing and displaying technologies and their social and historical impact." },
    { title: "DGME 216: Intermediate Graphic Design", description: "Students express content and meaning in visual terms while exploring and applying design principles to a variety of practical design projects. Emphasis on branding, corporate identity design and self-promotion. Covers production techniques, and a strategic approach to the design problem solving process, including the role of the designer and working with various types of clients. " },
    { title: "DGME 230: Production Design for Print and Screen", description: "Instruction in page layout software such as InDesign that focuses on the skills necessary to create professional quality typography and design. Emphasis on page layout, grid systems, interface design, and visual hierarchy. Students produce practical projects that include a wide variety of the software features." },
    { title: "ART 200: Portfolio Preparation", description: "This course is designed for students with experience in studio art, digital media, architecture or other fields requiring a portfolio for transfer, internships, jobs and exhibitions. Students learn to develop a cohesive body of work, prepare the work for presentation, and identify appropriate venues for submission. Students initiate, develop, and complete individual projects culminating in a digital and hard copy portfolio as well web presence." }
  ],
  "film-media": [
    { title: "DMGE 100: Media in Society", description: "Students will examine media's influence on culture and society while also analyzing their personal media habits. This course helps students evaluate the ways in which they receive and perceive news and entertainment. Students will be guided through the extraordinary history of mass communication. This course includes lessons in advertising, media effects, and the application of media theories." },
    { title: "FILM 100: Introduction to Film", description: "Introductory survey of fundamental film techniques and styles of expression. Emphasizes film appreciation, the language of film, and analysis for full film enjoyment. Lectures, screenings, discussions, quizzes and writing of critical papers." },
    { title: "DGME 101: Writing for Mass Media", description: "Students in this class will practice the basic skills needed to write for various forms of media, including print and broadcast, news writing, web, TV scripts, and press releases." },
    { title: "FILM 153 Screenwriting", description: "Study of the craft of writing screenplays, with emphasis on narrative film. Instruction and practice in devising film ideas, developing a film premise, structuring film stories, preparing character biographies, developing scenes, creating dialogue, and preparing a professional film script." },
    { title: "FILM 120: Film History I", description: "Chronological survey of important American and international films, from 1895 to World War II. Emphasis on the evolution of film as a distinct art form, and the intersection of film and society. Lectures, screenings, discussions, quizzes and writing of critical papers." }
  ],
  "ui-ux-design": [
    { title: "DGME 176: UX Research Methods", description: "This course introduces the core methods of user experience (UX) research and how they are used to design better products and experiences. Students will learn how to gather and analyze user feedback through techniques such as interviews, surveys, and usability testing. The course also explores how to interpret data to understand user needs, behaviors, and pain points. This course is ideal for students interested in enhancing their ability to design thoughtful, intuitive, and impactful user experiences." },
    { title: "DGME 177: UX Data Visualization Design", description: "This course focuses on the principles and techniques of designing effective data visualizations within the context of user experience (UX). Students will learn how to transform complex data into clear, engaging, and interactive visual content that enhances understanding and decision-making. The course covers topics such as chart selection, color theory, accessibility, and storytelling through data. By the end of the course, students will be equipped to design impactful visual content that aligns with user needs and UX best practices." },
    { title: "DGME 178: Content Strategy & UX Writing", description: "This course teaches the basics of information architecture, writing for user interfaces, and content management using industry-standard tools such as docs, spreadsheets, design software, and presentation slides. Practical application of skills learned to develop content for user interfaces are also covered." }
  ],
  "digital-design": [
    { title: "DGME 105: Introduction to Digital Media", description: "Introduction to the tools and techniques of Digital Media. Includes basic computer skills, digital image capture, image manipulation, illustration, layout, time based media, 3D, and emerging technologies." },
    { title: "DGME 107: Introduction to Social Media", description: "Students will explore the possibilities and limitations of social media and will have hands-on experience with several forms of social media technology, such as Facebook, Twitter, blogs and wikis. This course provides a framework for understanding and evaluating social media tools and platforms." },
    { title: "DGME 164: User Interface/ User Experience Design", description: "Covers the fundamentals of user-centered interface design concepts and practices for web, mobile devices, and other applications. Students gain an understanding of how users interact with an interface and be introduced to the concepts of usability, interface associations and aesthetics, and the user experience. Basic knowledge of Adobe Illustrator and Photoshop is required. Software: Adobe Creative Cloud®" },
    { title: "DGME 170: Introduction to Online Advertising", description: "This course provides digital designers the foundational principles and knowledge of digital advertising. Topics include social media, mobile, email, and native advertising. Students learn techniques, tools, and software used in the industry." },
  ]
};

const App = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramClick = (programKey) => {
    setSelectedProgram(programs[programKey]);
  };

  return (
    <div className="programs-page"> 
        <div className="main-container-programs">
            <div className="intro-information">
                <h1>Digital Media Program</h1>
                <p>
                CSM's Digital Media (DGME) program is training the next generation of media-makers in graphic design, web design, television broadcasting, audio and video production, and web programming. The DGME curriculum combines former college courses in Broadcast & Electronic Media, Graphic Design and Web/Multimedia. These curricular changes mirror changes in the media industry where the areas of broadcast, multimedia, and graphics are merging in a variety of ways.
                </p>
            </div>

            <div className="container">
                <div id="program-buttons">
                <button className="program-btn" onClick={() => handleProgramClick("web-design-associate")}>Mobile App and Web Design Associate</button>
                <button className="program-btn" onClick={() => handleProgramClick("broadcast-media")}>Broadcast and Electronic Media Associate</button>
                <button className="program-btn" onClick={() => handleProgramClick("graphic-design")}>Graphic Design Associate</button>
                <button className="program-btn" onClick={() => handleProgramClick("film-media")}>Film, Television, and Electronic Media Associate</button>
                <button className="program-btn" onClick={() => handleProgramClick("ui-ux-design")}>User Experience Design Certificate</button>
                <button className="program-btn" onClick={() => handleProgramClick("digital-design")}>Digital Design Certificate</button>
            </div>

            {selectedProgram ? (
            <div id="course-info">
                <h2>Courses</h2>
                <div id="courses-list">
                {selectedProgram.map((course, index) => (
                    <div key={index}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    </div>
                ))}
                </div>
            </div>
        ) : (
          <p id="placeholder-text">Select a program to see the courses here.</p>
        )}
        </div>
        </div>
    </div>
  );
};

export default App;
