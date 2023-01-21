import { Component } from "react";
import {motion} from "framer-motion";

class About extends Component{
    render(){
        return(
            <section id="about">
                <h1 className="title">Hi! I am Dimple</h1>
                <div className="about-container">
                    <p className="about-me">I am a self-taught front-end developer with experience in creating and maintaining code written in SAP ABAP Language in my previous jobs. I am currently running a small business, a printing service, located in Gen. Emilio Aguinaldo, Cavite while studying front-end development. I used ReactJS on my projects, with CSS and Bootstrap or Material UI, or mixed with both. Feel free to have a look in the next section.</p>
                    {/* <div className="background"></div> */}
                    <div className="skills-div">
                        <h2>Skill Card</h2>
                        <div className="skills-item">
                            <p>CSS</p>
                            <div className="slider-container">
                                <div className="slider" id="slider-css"></div>
                                <div className="slider-btn"></div>
                                <p className="tooltip-text" id="tooltip-css">8</p>
                            </div>
                            <div className="digits">
                                <span className="zero">0</span>
                                <span className="ten">10</span>
                            </div>
                        </div>
                        <div className="skills-item">
                            <p>JQuery</p>
                            <div className="slider-container">
                                <div className="slider" id="slider-jquery"></div>
                                <div className="slider-btn"></div>
                                <p className="tooltip-text" id="tooltip-jquery">5</p>
                            </div>
                            <div className="digits">
                                <span className="zero">0</span>
                                <span className="ten">10</span>
                            </div>
                            
                        </div>
                        <div className="skills-item">
                            <p>React</p>
                            <div className="slider-container">
                                <div className="slider" id="slider-react"></div>
                                <div className="slider-btn"></div>
                                <p className="tooltip-text" id="tooltip-react">7</p>
                            </div>
                            <div className="digits">
                                <span className="zero">0</span>
                                <span className="ten">10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;