import React from "react";
import "./AboutStyles.css";
import { AboutItems } from "./AboutItems";


function About(){
    return (
        <>
            <div className="content-box">

                <div className="title">
                    <h1>About me</h1>
                    <p>I'm just a dude</p>
                </div>

                <div className="about-container">
                    <h4>About</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

                <div className="links-container">
                    <h4>Connect</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ul className="three">
                            {AboutItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url} className={item.cName}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="work-container">
                    <h4>Work Exp</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>

            </div>
        </>
    )
}


export default About;