import "./AsideContent.css";
import React from 'react';

export default function AsideContent(props) {

    const {img, title, description, date} = props;

    return (
        <div className="eventCard">
            <img src={img}/>
            <div className="newsCardInfo">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p className="cardParagraph">
                    {description}
                </p>
            </div>
        </div>
)
}