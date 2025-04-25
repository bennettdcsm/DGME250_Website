import './buttons.css'

export default function PortfolioButton(props) {
    const {name, link} = props;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="portfolio-button">
                {name}'s Work
            </button>
        </a>
    )
}