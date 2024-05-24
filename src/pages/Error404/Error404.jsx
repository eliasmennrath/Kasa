import { Link } from "react-router-dom";
import "./error404.scss";

export default function Error404() {
    return (
        <section>
            <h1>404</h1>
    
            <p>Oups! La page que vous demandez n'existe pas.</p>
    
            <Link to="/" className="homeLink">Retourner sur la page d'accueil</Link>
        </section>
    );
}