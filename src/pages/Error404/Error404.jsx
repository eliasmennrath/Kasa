import { useRouteError } from "react-router-dom";
import "./error404.scss";

export default function Error404() {
    const error = useRouteError();
    return (
        <section>
            <h1>404</h1>
    
            <p>Oups! La page que vous demandez n'existe pas.</p>
    
            <a href="/index.html">Retourner sur la page d'accueil</a>
        </section>
    );
}