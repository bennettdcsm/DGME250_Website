// import cardStyles from './ShowWorkStyles';
import './ShowWork.css'

export default function ShowWork(props) {

    const {people, title, link, img, date, description} = props;

    return (
        <div className="studentWork">
            <a href={link} target={"_blank"}>
                <img src={img} alt='thumbnail'/>
                <div className={'projectInfo'}>
                    <h3>{title}</h3>
                    <h4>{people}</h4>
                    <h5>{date}</h5>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}

