import React, { Component } from 'react';
import './../App.css';
import twittericon from '../assets/img/twicon.png';
import facebookicon from '../assets/img/fbicon.png';
import inicon from '../assets/img/inicon.png';
import linicon from '../assets/img/linicon.png';
import quoteicon from '../assets/img/quoteicon.png';

class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="frosthandle_bot" className="bottombar">
                <div className="botbar_left">
                    <a href="http://twitter.com"><img src={twittericon} /></a>
                    <a href="http://facebook.com"><img src={facebookicon} /></a>
                    <a href="http://instagram.com"><img src={inicon} /></a>
                    <a href="http://linkedin.com"><img src={linicon} /></a>
                </div>
                <div className="botbar_right">
                    <div><img src={quoteicon} /></div>
                    <div>Custom Quote</div>
                </div>
            </div>
        );
    }
}

export default BottomBar;