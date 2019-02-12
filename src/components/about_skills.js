import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

let data = require('./data.json');

class Aboutskills extends Component {
    
    render() {
        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical-green"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: "100%", height: "calc(100% - 54px)" }}>
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
            </Scrollbars>
        );
    }
}

export default Aboutskills;