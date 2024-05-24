import React from "react";
import data from "../../data.json";

import "./home.scss";

import heroImage from "../../assets/img/hero-index.jpg";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";



export default function Home() {
    return (
        <React.Fragment>
            <div id="hero">
                <Hero imgLink={heroImage} imgAlt="Paysage" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div id="logements">
                {data.map(logement => {
                    return <Card key={logement.id} logement={logement} />
                })}
            </div>
        </React.Fragment>
    );
}