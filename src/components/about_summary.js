import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

let data = require('./data.json');

class Aboutsummary extends Component {
    
    render() {
        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical-green"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: "100%", height: "calc(100% - 54px)" }}>
                <div className="summarywrap">
                <div className="summaryright">
                        <div className="summarypic"><img src={data.About.Summary.Face} alt=""/></div>
                        <div className="summaryrighttitle">
                            <div>Aaron Lilla</div>
                            <span>Web Design & Development</span>
                        </div>
                        <div className="summaryrightinfowrap">
                            <div className="summaryrightbigtitle">Design</div>
                            {
                                data.About.Summary.Descat.map(item => {
                                    return <div className="summaryrightsub" key={item}>{item}</div>
                                })
                            }
                            <div className="summaryrightbigtitle">Development</div>
                            {
                                data.About.Summary.Devcat.map(item => {
                                    return <div className="summaryrightsub" key={item}>{item}</div>
                                })
                            }
                            <div className="paddingfix2"></div>
                        </div>
                    </div>
                    <div className="summaryleft">
                        <div className="summaryhead">About Me</div>
                        I'm a web designer & full stack developer from Las Vegas, Nevada with over 6 years design experience and 2 years development experience. I excell and focus in front end user interfaces but also have a growing interest in backend technologies. 
                        Over the past few years I have had some incredible opportunities to work with some amazing brands and have always pushed out of my comfort zone to provide an above-and-beyond product while learning new skills.<br /><br />
                        As a Front-end developer, I believe it is important to understand both design and development to achieve a successful user-facing product. I can assist with producing clean and functional design where required.
                        I pride myself on having a large range of skills, and am able to design something in Photoshop and take it all the way to a fully functioning product completely by myself. <br /><br />
                        I'm someone who always has ideas for some new "million dollar web app" (hasn't happened... yet) and always have some interesting project to keep me busy in addition to client's work. I really do love designing, developing, and thinking of new web apps and I also love the journey to a completed project. I'm constantly learning something new and I'm certainly willing to learn.<br /><br />
                        If you'd like to find out more about me or about how I work, please visit my contact page or send me an <a href="mailto:aaronjlilla@gmail.com">e-mail</a>, call me, or even text me. I'm currently available for freelance work as well as contract hiring and am actively pursuing projects.
                    </div>
                </div>
            </Scrollbars>
        );
    }
}

export default Aboutsummary;