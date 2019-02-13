import React, { Component } from 'react';
import './../App.scss';
import githublogo from './../assets/img/githublogo.png';
import linkedin from './../assets/img/linicon2.png';
import Acrylic from 'react-acrylic';

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
                <Acrylic
                colorOverlay='#111'
                opacity='0.9'
        
                position='fixed'
                top='0'
                left='0px'
                width='100%'
                height="40px"
        
                blur={70}
                borderRadius='2px'
                borderRadius='2px'
                >
                <div className="botbar_left">
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://github.com/aaronjlilla")}><img src={githublogo} alt="" /></div>
                    <div className={"bblbutton bbl" + this.props.color} onClick={() => this.handleButtonClick("https://www.linkedin.com/in/aaronlilla/")}><img src={linkedin} alt="" /></div>
                </div>
                <div className="botbar_right">
                </div>
                </Acrylic>
            </div>
        );
    }
}

export default BottomBar;