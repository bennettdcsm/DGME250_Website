import React from 'react';
import "./MainContent.css";
import PortfolioButton from "../Button/PortfolioButton";

export default function MainContent(props) {

    const {img, title, date, description, name, alt} = props

    return (
        <div className="post">
            <div className="postInfo">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p className="postDescription">{description}</p>
            </div>
            <img src={img} alt={alt}/>
            <div className='portfolioLink'>
                <h3>Check Out Full Portfolio Here!</h3>
                <PortfolioButton name={name}/>
            </div>

        </div>
    )
}