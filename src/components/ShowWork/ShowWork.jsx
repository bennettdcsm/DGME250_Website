export default function ShowWork(props) {
    const { people, title, link, img, date, description } = props;

    return (
        <div className="relative overflow-hidden cursor-pointer rounded-lg max-h-[1000px]">
            <a href={link} target="_blank">
                <img 
                    src={img} 
                    alt="thumbnail" 
                    className="block w-full h-auto transition-filter duration-300 ease-in-out hover:filter hover:brightness-50"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] text-white flex flex-col justify-center items-center text-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    <h3>{title}</h3>
                    <h4>{people}</h4>
                    <h5>{date}</h5>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}
