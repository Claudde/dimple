import { Component } from "react";

class Project extends Component{
    constructor(props){
        super(props);
        
        this.triggerAccordion = this.triggerAccordion.bind(this);
    }

    triggerAccordion(checkboxId){
        var checkbox = document.getElementById(checkboxId);
        if(checkbox.checked){
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
        
    }
    


    render(){
        return(
            <section id="project">
                <h1 className="title">My Web Projects</h1>
                
                <div className="projects">
                    {/* Calculator */}
                    {/* <div className="project-item">
                        <a href="https://claudde.github.io/fcc-calculator/" target="_blank" className="project-name">Calculator</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\calculator.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* Qoute Generator */}
                    {/* <div className="project-item">
                        <a href="https://claudde.github.io/random-quote-generator/" target="_blank" className="project-name">Quote Generator</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\quote_generator.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* 25 5 o clock */}
                    {/* <div className="project-item">
                        <a href="https://Claudde.github.io/fcc-25-5-clock" target="_blank" className="project-name">25+5 Clock</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\25_5_o_clock.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* Drum Machine */}
                    {/* <div className="project-item">
                        <a href="https://claudde.github.io/fcc-drum-machine/" target="_blank" className="project-name">Drum Machine</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\drum_machine.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* Markdown Previewer */}
                    {/* <div className="project-item">
                        <a href="https://claudde.github.io/fcc-markdown-previewer/" target="_blank" className="project-name">Markdown Previewer</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\mardown_previewer.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* Comment Section */}
                    {/* <div className="project-item">
                        <a href="https://claudde.github.io/comment-section/" target="_blank" className="project-name">Comment Section</a>
                        <div className="project-img-container">
                            <img className="project-img" src=".\img\screenshot\comment_section.jpeg"/>
                        </div>
                        <p className="project-decs-breif">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="project-decs-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    {/* Calculator */}
                    <div className="card">
                        <input type="checkbox" id="chck1"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck1")}>
                            <div className="content">
                                <i className="fa fa-calculator"></i>
                                <h3>Calculator</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>A responsive simple javascript calculator following the rule of PEMDAS with retro design.</p>
                                <div className="content-btn">
                                    <a href="https://claudde.github.io/fcc-calculator/" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/fcc-calculator" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Qoute Generator */}
                    <div className="card">
                        <input type="checkbox" id="chck2"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck2")}>
                            <div className="content">
                                <i className="fa fa-quote-left"></i>
                                <h3>Quote Generator</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>A desktop app that generates random shareable qoute in Twitter or in Tumblr for everyday motivation. </p>
                                <div className="content-btn">
                                    <a href="https://claudde.github.io/random-quote-generator/" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/random-quote-generator" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 25 5 o clock */}
                    <div className="card">
                        <input type="checkbox" id="chck3"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck3")}>
                            <div className="content">
                                <i className="fa fa-clock-o"></i>
                                <h3>25+5 Clock</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>Usable timer on loop with alarm that beeps when time is up. Break time between sessions can also be set. </p>
                                <div className="content-btn">
                                    <a href="https://Claudde.github.io/fcc-25-5-clock" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/fcc-25-5-clock" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Drum Machine */}
                    <div className="card">
                        <input type="checkbox" id="chck4"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck4")}>
                            <div className="content">
                                <i className="fa fa-music"></i>
                                <h3>Drum Machine</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>A fun virtual drum kit app that produces precussion lines, it fetaures real drum sounds and vintage percussions.</p>
                                <div className="content-btn">
                                    <a href="https://claudde.github.io/fcc-drum-machine/" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/fcc-drum-machine" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Markdown Previewer */}
                    <div className="card">
                        <input type="checkbox" id="chck5"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck5")}>
                            <div className="content">
                                <i className="fa fa-code"></i>
                                <h3>Markdown Previewer</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>Writing markdown for your github repo was made easy with this desktop app that lets you preview markdown code before saving.</p>
                                <div className="content-btn">
                                    <a href="https://claudde.github.io/fcc-markdown-previewer/" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/fcc-markdown-previewer/" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div className="card">
                        <input type="checkbox" id="chck6"/>
                        <div className="face face1" onClick={() => this.triggerAccordion("chck6")}>
                            <div className="content">
                                <i className="fa fa-comment"></i>
                                <h3>Comment Section</h3>
                            </div>
                        </div>

                        <div className="face face2">
                            <div className="content">
                                <p>A simple interactive comment section that allows you to post, update, delete, upvote, downvote comments.</p>
                                <div className="content-btn">
                                    <a href="https://claudde.github.io/comment-section/" target="_blank">Go Live!</a>
                                    <a href="https://github.com/Claudde/comment-section/" target="_blank">View Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                
            </section>
        );
    }
}

export default Project;