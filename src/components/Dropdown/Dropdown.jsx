import { useState } from "react";

import "./dropdown.scss";



function Dropdown({title, content}) {

    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }


    return (
        <li className="dropdown">
            <div className="dropdownTitle" onClick={() => handleClick()}>
                <h2>{title}</h2>
                <i className={"fa-solid fa-chevron-up fa-xl" + (open ? " rotate" : "")}></i>
            </div>
            <ul id="logementDescription" className={"dropdownContent" + (open ? " show" : "")}>
                { typeof content === 'string' ? <li>{content}</li>
                : content.map((item, index) => {
                        return <li key={'dropdown-' + index}>{item}</li>
                    })
                }
            </ul>
        </li>
    );
}

export default Dropdown