import React, { Component } from 'react';
import Evergreen from '../assets/img/dev/evergreen.png';
import Synthesis from '../assets/img/dev/synthesis.png';
import RockandStone from '../assets/img/dev/rockandstone.png';
import V1 from '../assets/img/dev/v1.png';
import V2 from '../assets/img/dev/v2.png';
import WiiPlay from '../assets/img/dev/wiiplaygames.png';
import { Scrollbars } from 'react-custom-scrollbars';
import tinygithub from '../assets/img/githublogo_tiny.png';

let items = [
    {"Evergreen Organix": Evergreen, "Tech" : ["Wordpress", "Jquery", "Photoshop CC"], "Desc" : "This is a company I personally worked for as a Laboratory Technician and was responsible for our online presence as well. Backend uses Wordpress for content management as well as a semi-custom theme. Mainly a static content site with some API integration with stores in the Las Vegas area for stock and prices.", "Title" : "Evergreen Organix", "Repo": "", "Demo": "http://www.evergreenorganix.com"},
    {"Synthesis": Synthesis, "Tech" : ["ReactJS + Redux", "Node", "Express", "MongoDB", "Socket.io", "Photoshop CC"], "Desc" : "Synthesis is a unique way to watch your favorite live game streamers who are playing in the same game instance, at the same time, together. This project uses a Node.js backend with Express and MongoDB providing a RESTful API to the front end, and the front-end is completely in React. This is also https enabled (using certbot) and cloudfare. This could could not be developed properly with mobile in mind due to its nature. All design and development from start to finish was done by myself.", "Title" : "Synthesis", "Repo": "https://github.com/aaronjlilla/Synthesis", "Demo": ""},
    {"Rock and Stone": RockandStone, "Tech" : ["Socket.io", "Jquery", "Steam API", "Photoshop CC", "MongoDB"], "Desc" : "Rock and Stone is a websocket (socket.io) based online matchmaking system for the game Deep Rock Galactic. It uses Steam OAuth and the Steam API allowing users to que up in a traditional matchmaking system based on certain criteria. This was developed heavily with websockets to provide a seamless and fast matchmaking experience. DOM manipulation was done entirely in jQuery, although React was an option and I regret not opting for that option for obvious reasons. All design and development from start to finish was done by myself.", "Title" : "Rock and Stone", "Repo": "", "Demo": ""},
    {"Wii Play Games": WiiPlay, "Tech" : ["PHP", "JQuery", "Ruby on Rails", "Photoshop CC"], "Desc" : "Wii Play Games is a retail video game & trading card store that I previously worked for and did nearly all of their graphics and development. The front end of this project was done mostly in jquery and php, integrating with the backend API programmed in Ruby on Rails from a 3rd party Point-of-Sales system called Crystal Commerce in which they use both in the store and online. This was primarily a front-end project integrated with systems they currently use. I was also responsible for nearly all graphics development both online and in-store.", "Title" : "Wii Play Games", "Repo": "", "Demo": "http://www.wiiplaygameslv.com"},
    {"V1": V1, "Tech" : ["ReactJS", "Node", "Express", "Photoshop CC"], "Desc" : "My personal site I threw together with React and Node.js. Graphics were done in both Photoshop and Cinema4D. I thought it would give an interesting feel to have each page give a different color scheme which is achieved entirely in CSS3 filter (hue) effects. All design and development from start to finish was done by myself.", "Title" : "Personal Site V1", "Repo": "https://github.com/aaronjlilla/personal", "Demo": "http://www.aaronlilla.com/v1"},
    {"V2": V2, "Tech" : ["ReactJS", "Node", "Express", "Photoshop CC"], "Desc" : "Second version of my site featuring a much needed UI upgrade, more intuitive layout, and much better mobile responsiveness. Front end was done entirely in React and backend is a node server with express and nodemailer for the contact form functionality. All design and development from start to finish was done by myself.", "Title" : "Personal Site V2", "Repo": "https://github.com/aaronjlilla/v2", "Demo": "http://www.aaronlilla.com/"}
];

class CgGraphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "Synthesis"
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
            this.props.activeitem("Synthesis", Synthesis, items[0].Tech, items[0].Desc, items[0].Title);
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
                                        {(item.Repo) ? <div className="dembutton_active" onClick={() => this.handleButtonClick(item.Repo)}><img src={tinygithub} /></div> : <div className="dembutton_inactive"><img src={tinygithub} /></div>}
                                        {(item.Demo) ? <div className="dembutton_active" onClick={() => this.handleButtonClick(item.Demo)}>Demo</div> : <div className="dembutton_inactive">Demo</div>}
                                    </div>
                                    <div className="ppreviewitem_descript">
                                        <strong>Web Dev // </strong>{String(x)}
                                        
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