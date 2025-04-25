import ShowWork from "../ShowWork/ShowWork";
import React, {useState, useEffect, useCallback} from "react";
import './StudentWorkSection.css'
// import data2 from "../../json/test.json";
// import carousel from "@coreui/coreui/js/src/carousel";

const studentWork = {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2%',

}

export default function StudentWorkSection(props) {

    const {section} = props;


    const [currentIndex, setCurrentIndex] = useState(0);
    const work = section[currentIndex];

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex(i => (i + 1) % section.length);
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [section.length])

    const forward = () => {
        console.log('clicked', currentIndex, section.length);
        if (currentIndex < section.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0)
        }
    }
    const back = () => {
        console.log('current', currentIndex, 'length', section.length);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(section.length - 1);
        }
    }


    return (
        <div style={studentWork}>
            <button onClick={back} className={'carousel-button prev'}>
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
            <button onClick={forward} className={'carousel-button next'}>
                {'>'}
            </button>
            <div className="page-counter-container">
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
                        className="page"
                        style={{
                            opacity: i === currentIndex ? 1 : 0.5,
                            transform: `scale(${scaleValue})`,
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'black',
                            transition: 'opacity 1s ease-in-out',
                        }}
                    />)

                })}
            </div>
        </div>
    )
}


