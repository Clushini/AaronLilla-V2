import React, { Component } from 'react';
import './../App.css';
import githublogo from './../assets/img/githublogo.png';
import linkedin from './../assets/img/linicon2.png';
import quoteicon from '../assets/img/quoteicon.png';

class BottomBar extends Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(url) {
        window.open(url);
    }

    render() {
        return(
            <div id="frosthandle_bot" className={"bottombar bordertop_" + this.props.color}>
                <div className="botbar_left">
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://github.com/aaronjlilla")}><img src={githublogo} alt="" /></div>
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://github.com/aaronjlilla")}><img src={linkedin} alt="" /></div>
                </div>
                <div className="botbar_right">
                    <div><img src={quoteicon} alt=""/></div>
                    <div>Custom Quote</div>
                </div>
            </div>
        );
    }
}

export default BottomBar;