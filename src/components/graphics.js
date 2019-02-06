import React, { Component } from 'react';
import EvergreenOrganix from '../assets/img/gfx/evergreenorganix.png';
import Fleur from '../assets/img/gfx/fleur.png';
import RockandStone from '../assets/img/gfx/rockandstone.png';
import SynthesisLogo from '../assets/img/gfx/synthlogo.png';
import Wii from '../assets/img/gfx/wii.png';
import { Scrollbars } from 'react-custom-scrollbars';

let items = [
    {"Wii Play Games": Wii, "Tech" : ["Photoshop CC 2015"], "Desc" : "Logo for retail store Wii Play Games in Las Vegas, NV as well as nearly all graphic design work online and in-store.", "Title" : "Wii Play Games"},
    {"Synthesis": SynthesisLogo, "Tech" : ["Photoshop CC 2015"], "Desc" : "Logo design for my personal project Synthesis. Designed the entire site and all graphics from the ground up.", "Title" : "Synthesis"},
    {"Evergreen Organix": EvergreenOrganix, "Tech" : ["Photoshop CC 2015"], "Desc" : "Logo for a medical marijuana company here in Las Vegas, NV. Did several logos and packaging designs for this company.", "Title" : "Evergreen Organix"},
    {"Fleur": Fleur, "Tech" : ["Photoshop CC 2015"], "Desc" : "Fleur is a medical marijuana grow here in Las Vegas, NV I did some graphics design for and am currently developing a website for in React.", "Title" : "Fleur"},
    {"Rock and Stone": RockandStone, "Tech" : ["Photoshop CC 2015"], "Desc" : "Rock and Stone was a personal website idea I created for the game Deep Rock Galactic as a matchmaking system. Did all graphics and development from the ground up.", "Title" : "Rock and Stone"}
];

class CgGraphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "EvergreenOrganix"
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleClick(item, link, Tech, Desc, Title) {
        this.setState({active: item});
        this.props.activeitem(item, link, Tech, Desc, Title);
    }

    handleButtonClick(url) {
        window.open(url);
    }

    componentWillMount() {
        if (!this.props.current) {
            this.props.activeitem("EvergreenOrganix", EvergreenOrganix, items[0].Tech, items[0].Desc, items[0].Title);
        }
    }

    render() {
        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: this.props.width, height: "100%" }}>
            <div className="ppreview">
            {
                items.map(item => {
                    for (var x in item) {
                        return <span key={x}>
                               <div className={(x === this.state.active) ? "ppreviewitem_active" : "ppreviewitem"} style={{backgroundImage: 'url(' + item[x] + ')', backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center"}} onClick={() => this.handleClick(x, item[x], item.Tech, item.Desc, item.Title)}>
                                    <div className="demowrap">
                                        <div className="dembutton_active" onClick={() => this.handleButtonClick(item[x])}>Fullscreen</div>
                                    </div>
                                    <div className="ppreviewitem_descript">
                                        <strong>GFX // </strong>{String(x)}
                                    </div>
                               </div>
                                {(x === this.state.active) ? <div className="ppreviewitem_mobilebox">
                                    <div className="pitem_tech">
                                        {
                                            item.Tech.map(item => {
                                                return <div className="pitem_tech_item" key={item}><span className="pitem_tech_item_circle"></span>{item}</div>
                                            })
                                        }
                                    </div>
                                    <div className="pitem_desc">
                                        <strong className="pitem_title">{this.props.category} / {item.Title}</strong><br/>
                                        {item.Desc}
                                    </div>
                                </div> : <div className="ppreviewitem_mobilebox_zero">&nbsp;&nbsp;&nbsp;</div>}
                               </span>
                               
                    }
                    return true;
                })
            }
            </div>
            </Scrollbars>
        );
    }
}

export default CgGraphics;