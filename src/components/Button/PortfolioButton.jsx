import './buttons.css'

export default function PortfolioButton(props) {
    const {name} = props;
    return (
        <button className="portfolio-button">
            {name}'s Portfolio
        </button>
    )
}