import React from "react";
import "./HomeStyles.css"
import luffy from "./luffy.jpeg"

function Home(){
    return (
        <>
            <div className="info-box">
                <br/>
                <div className="presentation">
                    <img src={luffy} alt="avatar" className="round-avatar one" />
                    <h1 className="two">Deivoth</h1>
                    <p className="three">I am an Electronics Engineer from the University of Santo Tomas. 
                        I pride myself on being a quick learner, capable of efficiently working both independently and within a team setting. 
                        I thrive under pressure and readily embrace new challenges, demonstrating adaptability as a core strength. 
                        My work ethic is characterized by a strong sense of responsibility and honesty.</p>
                </div>
                {/* <div>
                    <h1>Deivoth</h1>
                    <p>I am an Electronics Engineer from the University of Santo Tomas. 
                        I pride myself on being a quick learner, capable of efficiently working both independently and within a team setting. 
                        I thrive under pressure and readily embrace new challenges, demonstrating adaptability as a core strength. 
                        My work ethic is characterized by a strong sense of responsibility and honesty.</p>
                </div> */}
            </div>
        </>
    )
}


export default Home;