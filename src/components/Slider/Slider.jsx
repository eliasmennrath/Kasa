import { useState } from "react";


import "./slider.scss";

function Slider({title, pictures}) {

    const [sliderIndex, setSliderIndex] = useState(0);

    function changeSlides(n) {
        // if(sliderIndex + n < 0) {
        //     setSliderIndex(pictures.length - 1);
        // } else if(sliderIndex + n > pictures.length - 1) {
        //     setSliderIndex(0);
        // } else {
        //     setSliderIndex(sliderIndex + n);
        // }

        setSliderIndex((sliderIndex + n + pictures.length) % pictures.length);
    }

    return (
        <div id="slider-container">

        {pictures.map((picture, index) => {
            return (

                    <div className={"slide fade" + (index === sliderIndex ? " show" : "")} key={"slide-" + index}>
                        <div className={"sliderCount" + (pictures.length === 1 ? " d-none" : "")}>{index + 1} / {pictures.length}</div>
                        <img src={picture} alt={title} className="logementPreview"/>
                    </div>

                );         
            })}

                <span className={"prev" + (pictures.length === 1 ? " d-none" : "")} onClick={() => changeSlides(-1)}>&#10094;</span>
                <span className={"next" + (pictures.length === 1 ? " d-none" : "")}  onClick={() => changeSlides(1)}>&#10095;</span>
        </div>
    );
}

export default Slider;