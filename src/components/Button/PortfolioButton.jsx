export default function PortfolioButton(props) {
    const { name, link } = props;
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
        >
            <button className="bg-[#e9ebee] border-none rounded-[0.8rem] px-8 py-4 text-base font-bold max-w-[20rem] cursor-pointer transition-opacity duration-300 hover:opacity-55">
                {name}'s Work
            </button>
        </a>
    );
}
