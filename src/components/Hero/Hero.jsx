import "./hero.scss";

function Hero({imgLink, imgAlt}) {
    return (
        <div id="hero">
            <img src={imgLink} alt={imgAlt}/>
        </div>
    );
}

export default Hero;