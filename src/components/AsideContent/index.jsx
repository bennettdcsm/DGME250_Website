import "./AsideContent.css";
import React from 'react';

export default function AsideContent(props) {

    const {img, title, location, date, alt, onClick} = props;

    return (
        <div className="sideCard" onClick={onClick}>
            <img src={img} alt={alt}/>
            <div className="sideCardInfo">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p className="sideCardParagraph">
                    {location}
                </p>
            </div>
        </div>
)
}