import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import tinygithub from '../assets/img/githublogo_tiny.png';

let data = require('./data.json');

class CgGraphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: Object.keys(data.Portfolio.DEV[0])[0]
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
            this.props.activeitem(Object.keys(data.Portfolio.DEV[1])[0], data.Portfolio.DEV[0]["USCRE.com Real Estate Search"], data.Portfolio.DEV[1].Tech, data.Portfolio.DEV[1].Desc, data.Portfolio.DEV[1].Title);
        }
    }

    render() {

        return(
            <Scrollbars renderThumbVertical={props => < div {...props} className="thumb-vertical"/>} renderTrackVertical={props => < div {...props} className="track-vertical"/>} style={{ width: this.props.width, height: "100%" }}>
            <div className="ppreview">
            {
                data.Portfolio.DEV.map(item => {
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