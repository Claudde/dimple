import { Component } from "react";

class Navigation extends Component{
    constructor(props){
        super(props);
        this.toggleOffMenu = this.toggleOffMenu.bind(this);
    }

    toggleOffMenu(e){
        // e.preventDefault();
        document.getElementById("menu-toggle").checked = false;
    }


    render(){
        return(
            <nav>
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-btn">
                    <i className="fa fa-bars"></i>
                </label>
                <label className="logo">Dimple</label>
                <ul className="nav-ul">
                    <li><a href="#hero" onClick={(e) => this.toggleOffMenu(e)}>Home</a></li>
                    <li><a href="#about" onClick={(e) => this.toggleOffMenu(e)}>About</a></li>
                    <li><a href="#project" onClick={(e) => this.toggleOffMenu(e)}>Project</a></li>
                    <li><a href="#resume" onClick={(e) => this.toggleOffMenu(e)}>Resume</a></li>
                    <li><a href="#contact" onClick={(e) => this.toggleOffMenu(e)}>Contact</a></li>
                </ul>
                
            </nav>
        );
    }
}

export default Navigation;