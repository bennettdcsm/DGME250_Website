import './buttons.css'
import {Link} from "react-router-dom";
import data from '../../json/newsEventsInfo.json'

export default function SeeMore( {type} ) {


    function findDest(){
        if(type === "news"){
            return '/news'
        }
        return '/events'
    }

    return (
        <button className="seeMore">
            <Link to={findDest()}>See More </Link>
        </button>
    )
}