import React, { Component } from 'react';
import './../App.css';
import logo from '../assets/img/logo.png';
import Button from './button';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            about: false,
            portfolio: true,
            resume: false,
            contact: false,
            button_line: "button_line_red",
            button_line_active: "button_line_red_active"
        }

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked(page) {
        this.setState({
            about: false,
            portfolio: false,
            resume: false,
            contact: false
        });

        switch(page) {
            case 'About':
                this.setState({about: true, button_line: "button_line_green", button_line_active: "button_line_green_active"});
            break;

            case 'Portfolio':
                this.setState({portfolio: true, button_line: "button_line_red", button_line_active: "button_line_red_active"});
            break;

            case 'Resume':
                this.setState({resume: true, button_line: "button_line_purple", button_line_active: "button_line_purple_active"});
            break;
            
            case "Contact":
                this.setState({contact: true, button_line: "button_line_blue", button_line_active: "button_line_blue_active"});
            break;
        }

        this.props.activepage(page);
    }

    render() {
        return(
            <div className="topbar_content">
                <div className="topbar_logo">
                </div>
                <div className="topbar_right">
                    <Button name="About" buttonline={this.state.button_line} buttonlineactive={this.state.button_line_active} active={this.state.about} clicked={this.handleClicked}/>
                    <Button name="Portfolio" buttonline={this.state.button_line} buttonlineactive={this.state.button_line_active} activepage={this.state.active} active={this.state.portfolio} clicked={this.handleClicked}/>
                    <Button name="Resume" buttonline={this.state.button_line} buttonlineactive={this.state.button_line_active} activepage={this.state.active} active={this.state.resume} clicked={this.handleClicked}/>
                    <Button name="Contact" buttonline={this.state.button_line} buttonlineactive={this.state.button_line_active} activepage={this.state.active} active={this.state.contact} clicked={this.handleClicked}/>
                </div>
            </div>
        );
    }
}

export default TopBar;