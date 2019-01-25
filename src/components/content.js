import React, { Component } from 'react';
import About from './about';
import Portfolio from './portfolio';
import Resume from './resume';
import Contact from './contact';
import './../App.css';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="paddingfix">
                {this.props.page === "About" && <About />}
                {this.props.page === "Portfolio" && <Portfolio />}
                {this.props.page === "Resume" && <Resume />}
                {this.props.page === "Contact" && <Contact />}
            </div>
        );
    }
}

export default Content;