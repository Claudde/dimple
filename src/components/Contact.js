import { Component } from "react";
import { motion } from 'framer-motion';
import {BrowserView, MobileView} from 'react-device-detect';
import { isMobile } from "react-device-detect";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
        // this.sendEmail = this.sendEmail.bind(this);
        // this.openLinkedIn = this.openLinkedIn.bind(this);
        // this.openGitHub = this.openGitHub.bind(this);
        this.detectDevice = this.detectDevice.bind(this);
    }
    
    // sendEmail(e){
    //     e.preventDefault();
    //     window.location = 'mailto:dhanabellecruzado@gmail.com';
    // }
    
    // openLinkedIn(e){
    //     e.preventDefault();
    //     // window.location.href = 'https://www.linkedin.com/in/dhanabelle-cruzado/';
    //     window.open("https://www.linkedin.com/in/dhanabelle-cruzado/", "_blank");
    // }

    // openGitHub(e){
    //     e.preventDefault();
    //     window.open("https://github.com/Claudde", "_blank");
    // }
    detectDevice(){
        if(isMobile){
            return "tel:%2B639083142499"; 
        } else {
            return "viber://chat?number=%2B639083142499"; 
        }
    }

    render(){
        const hoverStyle = {
            boxShadow: `
                inset 0 0 60px #fff,
                inset 20px 0 80px rgb(0, 255, 255),
                inset -20px 0 80px rgb(116, 116, 116),
                inset 20px 0 300px rgb(0, 255, 255),
                inset -20px 0 300px rgb(116, 116, 116),
                0 0 50px #fff,
                -10px 0 80px rgb(0, 255, 255),
                10px 0 80px rgb(116, 116, 116)`,
            color: '#333'
        };

        const clickStyle = {
            ...hoverStyle,
            scale: 1.2
        }

        return(
            <section id="contact">
                <h1 className="title">Get in touch</h1>
                <div className="btn-container">
                    {/* email */}
                    <motion.a className="btn"
                        // href={(e) => this.sendEmail(e)}
                        href='mailto:dhanabellecruzado@gmail.com'>
                            <motion.div className="icon-btn"
                                initial="false"
                                whileHover={hoverStyle}
                                whileTap={ clickStyle } 
                                transition={{ duration: 0.2 }}
                                  >
                                    <i className="fa fa-envelope"></i>
                            </motion.div>
                            <p className="contact-info">cruzadodhanabelle@gmail.com</p>
                    </motion.a>

                    {/* phone */}
                    <motion.a className="btn"
                        href={this.detectDevice()}
                        >
                            <motion.div className="icon-btn"
                                initial="false"
                                whileHover={hoverStyle}
                                whileTap={ clickStyle } 
                                transition={{ duration: 0.2 }}
                                >
                                    <i className="fa fa-phone"></i>
                            </motion.div>
                            <p className="contact-info">+63 908 314 2499</p>
                    </motion.a>

                    {/* linkedIn */}
                    <motion.a className="btn"
                        href="https://www.linkedin.com/in/dhanabelle-cruzado/"
                        target="_blank">
                            <motion.div className="icon-btn"
                                initial="false"
                                whileHover={hoverStyle}
                                whileTap={ clickStyle } 
                                transition={{ duration: 0.2 }}
                                >
                                <i className="fa fa-linkedin"></i>
                            </motion.div>
                            <p>linkedin.com/in/dhanabelle-cruzado</p>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a className="btn"
                        href="https://github.com/Claudde"
                        target="_blank"
                        >
                            <motion.div className="icon-btn"
                                initial="false"
                                whileHover={hoverStyle}
                                whileTap={ clickStyle } 
                                transition={{ duration: 0.2 }}
                                >
                                <i className="fa fa-github"></i>
                            </motion.div>
                            <p>github.com/Claudde</p>
                    </motion.a>
                </div>
            </section>
        );
        
    }
}

export default Contact;