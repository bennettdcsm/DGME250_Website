import {useState} from "react";

export default function useSelectedEvent(initialValue = null) {
    const [selectedEvent, setSelectedEvent] = useState(initialValue);

    const handleCardClick = (eventData) => {
        setSelectedEvent(eventData);
        console.log("clicked", eventData.title);
    }

    return {selectedEvent, setSelectedEvent, handleCardClick};
}