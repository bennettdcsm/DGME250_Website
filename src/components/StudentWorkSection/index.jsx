import ShowWork from "../ShowWork/ShowWork";
import React, { useState, useEffect} from "react";
import './StudentWorkSection.css';

const studentWork = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2%',
};

export default function StudentWorkSection(props) {
    const { section } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const work = section[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(i => (i + 1) % section.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [section.length]);

    const forward = () => {
        if (currentIndex < section.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const back = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(section.length - 1);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center rounded'>

            <div style={studentWork} className="relative flex flex-col gap-4 mb-8">
                <button onClick={back} className="absolute top-1/2 left-6 transform -translate-y-1/2 w-12 h-12 bg-[rgba(25,25,25,0.4)] text-white flex items-center justify-center cursor-pointer z-10 text-3xl transition duration-500 hover:bg-[rgba(65,65,65,0.75)] hover:scale-110">
                    {'<'}
                </button>
                <ShowWork
                    people={work.people}
                    title={work.title}
                    link={work.link}
                    img={work.img}
                    date={work.date}
                    description={work.description}
                />
                <button onClick={forward} className="absolute top-1/2 right-6 transform -translate-y-1/2 w-12 h-12 rounded-[10%] bg-[rgba(25,25,25,0.4)] text-white flex items-center justify-center cursor-pointer z-10 text-3xl transition duration-500 hover:bg-[rgba(65,65,65,0.75)] hover:scale-110">
                    {'>'}
                </button>
                <div className="flex justify-center gap-1">
                    {section.map((_, i) => {
                        const prevIndex = (currentIndex - 1 + section.length) % section.length;
                        const nextIndex = (currentIndex + 1) % section.length;

                        const scaleValue =
                            i === currentIndex
                                ? 1
                                : (i === prevIndex || i === nextIndex)
                                    ? 0.75
                                    : 0.5;

                        return (
                            <div
                                key={i}
                                className="w-2.5 h-2.5 rounded-full bg-black transition-opacity duration-1000"
                                style={{
                                    opacity: i === currentIndex ? 1 : 0.5,
                                    transform: `scale(${scaleValue})`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>    
    );
}
