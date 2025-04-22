import React, { useState } from 'react';
import '../Styles/Programs.css';
import programs from '../json/programInfo.json'

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
