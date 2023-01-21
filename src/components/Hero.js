import { Component } from "react";

class Hero extends Component{
    render(){
        return(
            <section id="hero">
                {/* <img src="./img/HeroBG.jpg" alt="hero"/> */}
                <div className="circle"></div>
                <h1>Dimpl<span>e</span></h1>
                
                <div className="img-container">
                    <img src=".\img\Hero_pic_2.png" alt="picture"/>
                </div>
            </section>
        );
        
    }
}

export default Hero;