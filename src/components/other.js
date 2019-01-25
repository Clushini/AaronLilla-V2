import React, { Component } from 'react';
import CircleBanner from '../assets/video/Loading.mp4.mp4';
import LogoTree from '../assets/video/LogoTree_src.mp4.mp4';
import SiteBar from '../assets/video/SiteBarAnimation_src.mp4.mp4';
import PlayLogo from '../assets/img/playbutton.png';
import { Scrollbars } from 'react-custom-scrollbars';

let items = [
    {"CircleBanner": CircleBanner, "Tech" : ["Photoshop CC 2015", "Adobe After Effects", "Adobe Media Encoder"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and the high res landscape created in WorldCreator2 with Forester plugin being responsibile for the tree and grass. This project was moreso just a test with new technologies and plugins.", "Title" : "Loading Loop"},
    {"LogoTree": LogoTree, "Tech" : ["Photoshop CC 2015", "Adobe After Effects", "Adobe Media Encoder"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and the high res landscape created in WorldCreator2 with Forester plugin being responsibile for the tree and grass. This project was moreso just a test with new technologies and plugins.", "Title" : "Tree Particles"},
    {"SiteBanner": SiteBar, "Tech" : ["Photoshop CC 2015", "Adobe After Effects", "Adobe Media Encoder"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and the high res landscape created in WorldCreator2 with Forester plugin being responsibile for the tree and grass. This project was moreso just a test with new technologies and plugins.", "Title" : "Logo Loop"}
];

class CgGraphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: ""
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item, link, Tech, Desc, Title) {
        this.setState({active: item});
        this.props.activeitem(item, link, Tech, Desc, Title);
        
    }

    componentWillMount() {
        if (!this.props.current) {
            this.props.activeitem("CircleBanner", CircleBanner, items[0].Tech, items[0].Desc, items[0].Title);
        }
    }

    render() {

        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: this.props.width, height: "100%" }} autohide>
            <div className="ppreview">
            {
                items.map(item => {
                    for (var x in item) {
                        return <a>
                               <div className={(x == this.state.active) ? "ppreviewitem_active" : "ppreviewitem"} style={(item[x].split('.').pop() == "mp4") ? {backgroundImage: 'url(' + PlayLogo + ')', backgroundSize: 'auto 60%', backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: .7} : {backgroundImage: 'url(' + item[x] + ')', backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center"}} onClick={() => this.handleClick(x, item[x], item.Tech, item.Desc, item.Title)}>
                                    <div className="ppreviewitem_descript">
                                        <strong>3D CG // </strong>{String(x)}
                                        
                                    </div>
                               </div>
                                {(x == this.state.active) ? <div className="ppreviewitem_mobilebox">
                                    <div className="pitem_tech">
                                        {
                                            item.Tech.map(item => {
                                                return <div className="pitem_tech_item"><span className="pitem_tech_item_circle"></span>{item}</div>
                                            })
                                        }
                                    </div>
                                    <div className="pitem_desc">
                                        {
                                            <video width="98%" height="auto" key={item[x]} muted autoPlay loop><source src={item[x]} type="video/mp4"/></video>
                                        }
                                        <strong className="pitem_title">{this.props.category} // {item.Title}</strong><br/>
                                        {item.Desc}
                                    </div>
                                </div> : <div className="ppreviewitem_mobilebox_zero">&nbsp;&nbsp;&nbsp;</div>}
                               </a>
                               
                    }
                })
            }

            </div>
            </Scrollbars>
        );
    }
}

export default CgGraphics;