import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "Summary"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page) {
        this.setState({
            active: page
        });
    }
    
    render() {
        return(
            <div className="paddingfix">
                <div className="aboutwrap">
                    <div className="aboutwrap_left">
                        <div className="aboutbutton_wrap">
                            <div className={(this.state.active === "Summary") ? "aboutbutton_active" : "aboutbutton" } onClick={() => this.handleClick("Summary")}>Summary</div>
                            <div className={(this.state.active === "Skills") ? "aboutbutton_active" : "aboutbutton"} onClick={() => this.handleClick("Skills")}>Skills</div>
                        </div>
                        awdawd
                    </div>
                </div>
            </div>
        );
    }
}

export default About;