import React from "react";
import { MenuData } from "./MenuData";
import "./NavBarStyles.css"

function NavBar(){
    return (
        <>
            <nav className="NavbarItems">
                <a href="/" className="home">
                    <i className="fab fa-react"></i>
                </a>
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>)
                    })}
                    </ul>
                <i className="fab fa-react"></i>
            </nav>
        </>
    )
}


export default NavBar;