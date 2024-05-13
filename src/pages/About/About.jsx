import React from "react";
import "./about.scss";

import heroImg from "../../assets/img/hero-about.jpg";

import Hero from "../../components/Hero/Hero";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function About() {
    return (
        <React.Fragment>

            <Hero imgLink={heroImg} imgAlt="Paysage"/>

        <ul id="categories">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
        </ul>
        </React.Fragment>
    );
}
