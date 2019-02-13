import React, { Component } from 'react';
import './../App.scss';
import githublogo from './../assets/img/githublogo.png';
import linkedin from './../assets/img/linicon2.png';
import quoteicon from '../assets/img/quoteicon.png';

class BottomBar extends Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleQuote = this.handleQuote.bind(this);
    }

    handleButtonClick(url) {
        window.open(url);
    }

    handleQuote() {
        this.props.quoteClicked();
    }

    render() {
        return(
            <div id="frosthandle_bot" className={"bottombar bordertop_" + this.props.color}>
                <div className="botbar_left">
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://github.com/aaronjlilla")}><img src={githublogo} alt="" /></div>
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://www.linkedin.com/in/aaronlilla/")}><img src={linkedin} alt="" /></div>
                </div>
                <div className="botbar_right">
                    <div className={"bblbutton bbl" + this.props.color} onClick={this.handleQuote}>Free Quote</div>
                </div>
            </div>
        );
    }
}

export default BottomBar;