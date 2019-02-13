import React, { Component } from 'react';
import Aboutskills from './about_skills';
import Aboutsummary from './about_summary';
import Acrylic from 'react-acrylic';

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
                    <Acrylic
                    colorOverlay='#000'
                    opacity='0.1'
            
                    position='fixed'
                    top='0px'
                    left='0px'
                    width='100%'
                    height="100%"
            
                    blur={5}
                    borderRadius='16px'
                    borderRadius='16px'
                    >
                        <div className="aboutbutton_wrap">
                            <div className={(this.state.active === "Summary") ? "aboutbutton_active topleftradius" : "aboutbutton topleftradius" } onClick={() => this.handleClick("Summary")}>Summary</div>
                            <div className={(this.state.active === "Skills") ? "aboutbutton_active toprightradius" : "aboutbutton toprightradius"} onClick={() => this.handleClick("Skills")}>Skills</div>
                        </div>
                        <div className="aboutcontent">
                            {(this.state.active === "Summary") && <Aboutsummary />}
                            {(this.state.active === "Skills") && <Aboutskills />}
                        </div>
                        </Acrylic>    
                    </div>
                </div>
            </div>
        );
    }
}

export default About;