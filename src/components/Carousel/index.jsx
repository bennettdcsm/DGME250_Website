import React, { useState, useEffect, useRef } from "react";

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
        <div className="relative overflow-hidden">
            <div
                className="carousel-inner flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {items.map((item, i) => (
                    <div className="carousel-item flex-shrink-0 w-full" key={i}>
                        {renderItem(item, i)}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                className="carousel-btn absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-2xl px-2 cursor-pointer z-10 left-4"
                onClick={prevSlide}
            >
                &lsaquo;
            </button>
            <button
                className="carousel-btn absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-2xl px-2 cursor-pointer z-10 right-4"
                onClick={nextSlide}
            >
                &rsaquo;
            </button>

            {/* Dots */}
            <div className="carousel-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`dot w-3 h-3 bg-white bg-opacity-50 border-none rounded-full mx-1 cursor-pointer ${
                            i === current ? "bg-white" : "bg-opacity-50"
                        }`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </div>
    );
}
