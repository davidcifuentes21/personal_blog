import React from "react";
import "./HomeStyles.css"
import luffy from "./luffy.jpeg"
import { HomeItems } from "./HomeItems";

function Home(){
    return (
        <>
            <div className="home-container">
                <h2 className="home-greeting">Hi there!</h2>
                <h1 className="home-title">I'm <span>Deivoth</span></h1>

                <div className="home-profile">
                    <img src={luffy} alt="avatar" className="home-avatar" />

                    <ul className="home-links">
                    {HomeItems.map((item, index) => (
                        <li key={index}>
                        <a href={item.url} className={item.cName}>
                            <i className={item.icon}></i> {item.title}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>

                <p className="home-description">
                    I am an Electronics Engineer from the University of Santo Tomas, a quick
                    learner capable of working independently and within teams. I thrive under
                    pressure and embrace new challenges, demonstrating adaptability and a strong
                    sense of responsibility.
                </p>
            </div>
        </>
    )
}


export default Home;