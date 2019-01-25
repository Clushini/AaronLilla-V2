import React, { Component } from 'react';
import resume from '../assets/resume/resume.pdf'

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="resume"> 
                <embed src={`${resume}` + "#view=Fit"} width="100%" height="1200" type="application/pdf" />
            </div>
        );
    }
}

export default Resume;