import React, { Component } from 'react';
import './../App.css';


class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            button_line: "button_line_red",
            button_line_active: "button_line_red_active"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        this.props.clicked(name);
    }

    render() {
        return(
            <div className={(!this.props.active) ? "button" : "button_active"} onClick={() => this.handleClick(this.props.name)}>
                <div className="button_text">{this.props.name}</div>
                <div className={(!this.props.active) ? this.props.buttonline : this.props.buttonlineactive}></div>
            </div>
        );
    }
}

export default Button;