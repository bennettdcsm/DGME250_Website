import React from 'react';

export default function AsideContent(props) {
    const { img, title, location, date, alt, onClick } = props;

    return (
        <div
            className="bg-[#DFE3EE] p-6 rounded-lg mb-6 transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={onClick}
        >
            <img src={img} alt={alt} className="w-full mb-4" />
            <div className="sideCardInfo">
                <h3 className="mb-0">{title}</h3>
                <h4 className="m-0">{date}</h4>
                <p className="m-0">{location}</p>
            </div>
        </div>
    );
}
