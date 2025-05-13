

export default function EventInfo(props) {

    const {event, onClose} = props;

    return (
        <div
            className="eventInfoOverlay"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000, // Ensure the overlay appears on top
            }}
        >
            <div
                className="eventInfoContent"
                style={{
                    margin: "1.5rem",
                    backgroundColor: "#fff",
                    padding: "1.5rem",
                    borderRadius: ".8rem",
                    maxWidth: "40rem",
                    width: "100%",
                    maxHeight: "50vw",
                    height: "85%",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    position: "relative",
                }}
            >
                {/* Close button to hide the overlay */}
                <div className="cardTitleContainer">
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: "2rem",
                            width:"1.6rem",
                            right: "1.5rem",
                            fontSize: "1rem",
                            outline: "none",
                            backgroundColor: "#DA5252",
                            borderRadius: ".2rem",
                            border: "black 1px solid",
                        }}
                    >
                        X
                    </button>

                    <h2 style={{maxWidth: "75%"}}>{event.title}</h2>
                </div>
                <img src={event.img} alt={event.title} style={{width: "100%"}}/>
                <h4>{event.date}</h4>
                <h4>{event.location}</h4>
                <h4>{event.duration}</h4>
                <h4>{event.host}</h4>
                <p>{event.description}</p>
                {/* Additional event details can go here */}
            </div>
        </div>
    );
}