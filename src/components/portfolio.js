import React, { Component } from 'react';
import Pcatitem from './pcatitem';
import WebDesign from './webdesign';
import Graphics from './graphics';
import CgGraphics from './cggraphics';
import Other from './other';
import { Scrollbars } from 'react-custom-scrollbars';

class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "3D CG",
            activeitem: "",
            activelink: "",
            activetech: [],
            activedesc: "",
            activetitle: "",
            width: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handlePitem = this.handlePitem.bind(this);
        this.handleFullscreen = this.handleFullscreen.bind(this);
    }

    handleClick(page) {
        if (this.state.active !== page) {
            this.setState({
                active: page,
                activeitem: "",
                activelink: "",
                activetech: [],
                activedesc: ""
            });
        }
    }

    handleResize() {
        if(window.innerWidth <= 800) {
            this.setState({width: "97%"});
        }
        else {
            this.setState({width: "25%"});
        }
    }

    handlePitem(page, link, Tech, Desc, Title) {
       this.setState({activeitem: page, activelink: link, activetech: Tech, activedesc: Desc, activetitle: Title});
    }

    handleFullscreen(url) {
        window.open(url);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUpdate() {
        //console.log(this.state.activelink.split('.').pop() == "mp4" && window.innerWidth < 801);
        //console.log(window.innerWidth);
    }

    render() {
        const pcatitems = [
            "Web Dev",
            "Graphics",
            "3D CG",
            "Other"
        ]

        return(
            <div className="paddingfix">
                <div className="portfoliowrap">
                    <div className="pcat">
                        {
                            pcatitems.map(item => {
                                return <Pcatitem isactive={this.state.active} active={this.handleClick} item={item} key={item}/>
                            })
                        }
                    </div>
                        {(this.state.active === "Web Dev") && <WebDesign width={this.state.width} activeitem={this.handlePitem} current={this.state.activeitem} category={this.state.active}/>}
                        {(this.state.active === "Graphics") && <Graphics width={this.state.width} activeitem={this.handlePitem} current={this.state.activeitem} category={this.state.active}/>}
                        {(this.state.active === "3D CG") && <CgGraphics width={this.state.width} activeitem={this.handlePitem} current={this.state.activeitem} category={this.state.active}/>}
                        {(this.state.active === "Other") && <Other width={this.state.width} activeitem={this.handlePitem} current={this.state.activeitem} category={this.state.active}/>}
                    <div className="pitem">
                    <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: "100%", height: "100%" }}>
                        {
                            (this.state.activelink.split('.').pop() === "mp4") ? <video width="100%" height="auto" key={this.state.activelink} muted autoPlay loop><source src={this.state.activelink} type="video/mp4"/></video> : <img src={this.state.activelink} alt="" onClick={() => this.handleFullscreen(this.state.activelink)}/> 
                        }
                        <div className="pitem_tech">
                            {
                                this.state.activetech.map(item => {
                                    return <div className="pitem_tech_item" key={item}><span className="pitem_tech_item_circle"></span>{item}</div>
                                })
                            }
                        </div>
                        <div className="pitem_desc">
                            <strong className="pitem_title">{this.state.active} / {this.state.activetitle}</strong><br/>
                            {this.state.activedesc}
                        </div>
                    </Scrollbars>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;