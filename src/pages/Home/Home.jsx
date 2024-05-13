import React from "react";
import "./home.scss";

import heroImage from "../../assets/img/hero-index.jpg";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

export default function Home() {
    return (
        <React.Fragment>
            <div id="hero">
                <Hero imgLink={heroImage} imgAlt="Paysage" />
                {/* <img src={hero} alt="Paysage"/> */}
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <ul id="locations">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>

        </React.Fragment>
    );
}
