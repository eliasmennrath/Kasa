import { Link } from "react-router-dom";
import "./card.scss";

function Card({logement}) {
    return (
        <Link to={"/logement/" + logement.id} className="logement">
            <img src={logement.cover} alt={logement.title} className="logementPreview"/>
            <h2 className="logementTitle">{logement.title}</h2>
        </Link>
    );
}

export default Card;