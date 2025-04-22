// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

export default function Carousel({ items, renderItem, interval = 3000 }) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    // advance slide on a timer
    useEffect(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent(prev => (prev + 1) % items.length);
        }, interval);
        return () => clearTimeout(timeoutRef.current);
    }, [current, items.length, interval]);

    const prevSlide = () => {
        clearTimeout(timeoutRef.current);
        setCurrent(prev => (prev - 1 + items.length) % items.length);
    };
    const nextSlide = () => {
        clearTimeout(timeoutRef.current);
        setCurrent(prev => (prev + 1) % items.length);
    };
    const goTo = idx => {
        clearTimeout(timeoutRef.current);
        setCurrent(idx);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {items.map((item, i) => (
                    <div className="carousel-item" key={i}>
                        {renderItem(item, i)}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button className="carousel-btn prev" onClick={prevSlide}>&lsaquo;</button>
            <button className="carousel-btn next" onClick={nextSlide}>&rsaquo;</button>

            {/* Dots */}
            <div className="carousel-dots">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`dot${i === current ? " active" : ""}`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </div>
    );
}
