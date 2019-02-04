import React, { Component } from 'react';
import resume from '../assets/resume/resume.pdf'

class Resume extends Component {

    render() {
        return(
            <div className="resume"> 
                <embed src={resume + "#view=Fit"} width="100%" height="100%" type="application/pdf" />
            </div>
        );
    }
}

export default Resume;