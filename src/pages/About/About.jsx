import React from "react";
import "./about.scss";

import heroImg from "../../assets/img/hero-about.jpg";

import Hero from "../../components/Hero/Hero";
import Dropdown from "../../components/Dropdown/Dropdown";

import data from '../../about.json'

export default function About() {
    console.log( data.aboutList)
    return (
        <React.Fragment>

            <Hero imgLink={heroImg} imgAlt="Paysage"/>

            <ul id="categories">
                
                {data.aboutList.map((item, index) => {
                    return <Dropdown key={'dropdown-' + index} title={item.title} content={item.content} />
                })}
            </ul>
        </React.Fragment>
    );
}
