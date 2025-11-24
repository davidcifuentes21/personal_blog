import React from "react";
import { MenuData } from "./MenuData";
import "./NavBarStyles.css"
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <>
            <nav className="NavbarItems">
                <Link to="/" className="home">
                    <i className="fab fa-react"></i>
                </Link>
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>)
                    })}
                    </ul>
                <i className="fab fa-react"></i>
            </nav>
        </>
    )
}


export default NavBar;