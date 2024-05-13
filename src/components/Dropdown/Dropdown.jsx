import "./dropdown.scss";

function Dropdown() {
    return (
        <li className="dropdown">
            <div className="dropdownTitle">
                <h2>fiabilité</h2>
                <i className="fa-solid fa-chevron-up fa-xl"></i>
            </div>
            <ul id="logementDescription">
                <li></li>
            </ul>
        </li>
    );
}

export default Dropdown