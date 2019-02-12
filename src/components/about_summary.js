import React, { Component } from 'react';

let data = require('./data.json');

class Aboutsummary extends Component {
    
    render() {
        return(
            <div className="summarywrap">
                <div className="summaryleft">{data.About.Summary.Data}</div>
                <div className="summaryright">
                    <div className="summarypic"><img src={data.About.Summary.Face} /></div>
                    <div className="summaryrighttitle">
                    <div>Aaron Lilla</div>
                    <span>Web Design & Development</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutsummary;