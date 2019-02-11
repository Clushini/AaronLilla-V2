import React, { Component } from 'react';

let data = require('./data.json');

class Aboutskills extends Component {
    
    render() {
        return(
            <div>
                <div className="skillsdescriptor">
                    Below is an estimate of my proficiency in these skills
                </div>
                {data.About.Skills.Items.map(item => {
                    return <div className="skillsitemwrap">
                        <div className="skillsitempic"><img src={item.Image} alt=""/></div>
                        <div className="skillsitemright">
                            <div className="skillsitemrighttop">
                                <div className="skillsitemname">{item.Name}</div>
                                <div className="PCT">{String(item.PCT)}<span>/100</span></div>
                            </div>
                            <div className="skillsitemrightbottom">
                                <div className="skillsbar" style={{width: item.PCT + "%"}}></div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export default Aboutskills;