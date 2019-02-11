import React, { Component } from 'react';

let data = require('./data.json');

class Aboutsummary extends Component {
    
    render() {
        return(
            <div>
                {data.About.Summary}
            </div>
        );
    }
}

export default Aboutsummary;