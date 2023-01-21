import React, { Component } from "react";
import { motion, useScroll } from "framer-motion";
import { isMobile } from "react-device-detect";


const xpData = {
    CDD: {
        leftTop: "April 2022 - Now",
        leftBottom: "Entreprenuer",
        rightTop: "CDD Printing Shop",
        rightBottom: "CDD is a small printing service that we put up as our home-business. While studying front-end development, I researched and write a business plan. Evalutes materials and prices, and attended customers' requests and orders. Acquired some skills in maintaining computers, laptops, printers and network devices."
    },
    FLI: {
        leftTop: "Sep 2020 - Feb 2021",
        leftBottom: "SAP ABAP Programmer",
        rightTop: "Federal Land Incorporated",
        rightBottom: "Worked as an ABAP Programmer and at the same time in technical, answered request of users, maintained and tested programs, and conduct meetings for the on-going development. "
    },
    GAS: {
        leftTop: "July 2016 - Jan 2020",
        leftBottom: "SAP ABAP Programmer",
        rightTop: "Green AdvancedTech Solution Corp",
        rightBottom: "Joined the company in 2016 as a Junior Programmer, got a chance to work in Japan after 6 months of training. I worked as a SAP ABAP Programmer in main branch in Osaka. Trained to speak in Japanese while learning SAP ABAP, software development, documentation, and testing which was taught by my seniors."
    }
}

const educationalBG = {
    FCC: {
        leftTop: "Nov 2022",
        leftBottom: <a href="https://www.freecodecamp.org/fccCruzado" target="_blank" id="cert-link">Front End Development Certification</a>,//"Front End Development Certification",
        rightTop: "FreeCodeCamp",
        rightBottom: "freeCodeCamp is a free online platform that offers certification in many programming languages. It helps people to learn code through interactive coding, videos, articles, and interacting with other student. This portfolio was made possible by the help of this website."
    },
    PUP: {
        leftTop: "Apr 2016",
        leftBottom: "Bachelor of Science in Information Technology",
        rightTop: "Polytechnic University of the Philippines",
        rightBottom: "Graduated from one of the universities in the Philippines that has made name in the fields of business, information technology, science and engineering. Created a software using C# for a bowling center in Sta. Lucia Marikina as a capstone project with my team, which was consisted of two main sub-systems, reservation and billing."
    },
}

class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrollAnimation: useScroll
        }
        this.buildXP = this.buildXP.bind(this);
        this.buildEducBG = this.buildEducBG.bind(this);
        this.desktopVersion = this.desktopVersion.bind(this);
        this.mobileVersion = this.mobileVersion.bind(this);
    }

    buildXP(){
        let xpArr = [];
        if(isMobile){
            for(let i in xpData){
                xpArr.push(this.mobileVersion(xpData[i], i));
            }
        } else {
            for(let i in xpData){
                xpArr.push(this.desktopVersion(xpData[i], i));
            }
        }
        
        return xpArr;
    }

    buildEducBG(){
        let educArr = [];
        if(isMobile){
            for(let i in educationalBG){
                educArr.push(this.mobileVersion(educationalBG[i], i));
            }
        } else {
            for(let i in educationalBG){
                educArr.push(this.desktopVersion(educationalBG[i], i));
            }
        }
        
        return educArr;
    }

    desktopVersion(xp, i){
        return (
        <div className="item-container" key={i}>
            <motion.div className="left-side"
                initial={{x: -100,
                            opacity: 0}}
                whileInView={{ x: 0, 
                                opacity: 1}}
                transition={{duration: 0.5}}
                >
                <p className="top">{xp.leftTop}</p>
                <p className="bottom">{xp.leftBottom}</p>
            </motion.div>
            <motion.div className="seperator"
                initial={{opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.5}}
                >
                ●</motion.div>
            <motion.div className="right-side"
                initial={{x: 100,
                            opacity: 0}}
                whileInView={{ x: 0, 
                                opacity: 1}}
                transition={{duration: 0.5}}
                >
                <p className="top">{xp.rightTop}</p>
                <p className="bottom">{xp.rightBottom}</p>
            </motion.div>
        </div>
        );
    }

    mobileVersion(xp, i){
        return (
            <div className="item-container" key={i}>
                <div className="left-side">
                    <p className="top">{xp.leftTop}</p>
                    <p className="bottom">{xp.leftBottom}</p>
                </div>
                <div className="seperator">
                    ●</div>
                <div className="right-side">
                    <p className="top">{xp.rightTop}</p>
                    <p className="bottom">{xp.rightBottom}</p>
                </div>
            </div>
        );
    }
    
    
    render(){
        
        return(    
            <section id="resume">
                <h1 className="title">Hire me</h1>

                <div className="cv">
                    <h2 className="sub-title">Experience</h2>
                    {this.buildXP()}
                   
                </div> 
                
                <div className="cv">
                    <h2 className="sub-title">Education</h2>
                    
                    {this.buildEducBG()}
                    
                </div>


                <motion.div className="download"
                    whileHover={{backgroundColor: "rgba(38, 40, 42, 1)"}}
                    whileTap={{backgroundColor: "rgba(38, 40, 42, 1)",
                                scale: 1.1}}
                    >
                    <a href="Cruzado.pdf" download="Cruzado.pdf">Download My Resume</a>
                </motion.div>
            </section>
        )
    }
}

export default Resume;