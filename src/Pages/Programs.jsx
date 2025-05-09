import React, { useState } from 'react';
import programs from '../json/programInfo.json';

const App = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramClick = (programKey) => {
    setSelectedProgram(programs[programKey]);
  };

  return (
  <div className="min-h-[1100px] max-w-[1512px] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] rounded-lg p-6">
    <div className="mb-12">
            <h2 className="mb-5">Digital Media Program</h2>
            <p>
              CSM's Digital Media (DGME) program is training the next generation of media-makers in graphic design, web design, television broadcasting, audio and video production, and web programming. The DGME curriculum combines former college courses in Broadcast & Electronic Media, Graphic Design and Web/Multimedia. These curricular changes mirror changes in the media industry where the areas of broadcast, multimedia, and graphics are merging in a variety of ways.
            </p>
            <p>The DGME program offers Associate Degrees in Broadcast & Electronic Media, Graphic Design, and Mobie App & Web Design. Also offers certificate of achievement in Broadcast & Electronic Media, Digital Media, Graphic Design, Mobie App & Web Design, and User Experience Design.</p>
          </div>

          <div className="grid grid-cols-[1fr_2fr] gap-6 items-start">
            <div className="flex flex-col gap-4">
              <h3>Associate Degrees</h3>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('broadcast-media')}
              >
                Broadcast and Electronic Media Associate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('film-media')}
              >
                Film, Television, and Electronic Media Associate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('graphic-design')}
              >
                Graphic Design Associate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline mb-4"
                onClick={() => handleProgramClick('web-design-associate')}
              >
                Mobile App and Web Design Associate
              </button>

              <h3>Certificates</h3>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('broadcast-media')}
              >
                Broadcast and Electronic Media Certificate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('digital-design')}
              >
                Digital Design Certificate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('graphic-design')}
              >
                Graphic Design Certificate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('web-design-associate')}
              >
                Mobile App and Web Design Certificate
              </button>
              <button
                className="bg-[#014991] text-white border-none py-7 px-4 cursor-pointer rounded-lg text-left text-base hover:bg-[#005bb5] hover:underline"
                onClick={() => handleProgramClick('ui-ux-design')}
              >
                User Experience Design Certificate
              </button>
            </div>

            {selectedProgram ? (
              <div className="p-6 shadow-lg rounded-lg bg-white">
                <h2 className="mb-2">Courses</h2>
                <div>
                  {selectedProgram.map((course, index) => (
                    <div key={index}>
                      <h3 className="text-black text-lg mt-5 mb-2">{course.title}</h3>
                      <p className="mb-8">{course.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 mt-12">Select a program to see the courses here.</p>
            )}
          </div>
        </div>
    
  );
};

export default App;
