import React, { Component } from 'react';
import Castle from '../assets/img/3dcg/castle.png';
import Concrete from '../assets/img/3dcg/concrete.png';
import Cube from '../assets/img/3dcg/cube.png';
import Fleur from '../assets/img/3dcg/fleur.png';
import Gold from '../assets/img/3dcg/gold.png';
import Pyramid from '../assets/img/3dcg/pyramid.png';
import Street from '../assets/img/3dcg/street.png';
import Tree1 from '../assets/img/3dcg/tree1.png';
import Tree2 from '../assets/img/3dcg/tree2.png';
import Spacebois from '../assets/img/3dcg/spacebois.jpg';
import { Scrollbars } from 'react-custom-scrollbars';

let items = [
    {"Castle": Castle, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A commissioned piece. Used Cinema 4D, Octane Renderer with ivy grower and forester plugins. Most models used in this scene are from Megascans and some Kitbash. Post processing done in Photoshop and Adobe lightroom (Filters)", "Title" : "Overgrown Castle"},
    {"Concrete": Concrete, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. Used Cinema 4D, Octane Renderer, and used displacement mapping for a highly realistic displaced concrete texture (from a megascan). Post processing done almost entirely in Octane alone, with a filter added in Lightroom for dramatic effect.", "Title" : "Broken Concrete"},
    {"Cube": Cube, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Person piece. Used Cinema 4D, Octane Renderer, entirely done through displacement mapping using a circuit-board style displacement map and heavy fog volumetrics for the godrays and atmosphere. Color correction and some minor detail cleanup in Photoshop and grain filter added with Lightroom", "Title" : "Circuit Cube"},
    {"Fleur": Fleur, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A commissioned piece. Used Cinema 4D with Octane Renderer. Pretty simple render, went for a highly photorealistic quality. Very little post processing other than a generic film-quality noise filter and some minor color correction. Logo was designed in Photoshop and imported into Cinema4D with Illustrator paths.", "Title" : "Fleur Logo"},
    {"Gold": Gold, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A commissioned piece. Used Cinema 4D with Octane Renderer with some interesting camera effects (DoF, Bokeh, etc..) and pretty heavy post processing and color correction as it was hard to capture a really nice gold color. ", "Title" : "Gold Paper"},
    {"Pyramid": Pyramid, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. One of my first creations using Octane Render and heavy displacement mapping, before I had other plugins like forester or ivy grower. Basically all parts of this scene are displacement mapping, even the foliage. The boats and pyramid are not displaced. Moderate post processing work done exclusively in Photoshop. I would do a lot of things very different if I were to remake this scene or a scene similar.", "Title" : "Fantasy Pyramid"},
    {"Street": Street, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. Used several different types of models and techniques for this. Several different sets, heavy cloud volumetrics for fog effects, depth of field, bloom, and glare all done with Octane. Street and concrete are displacement maps, and lightning in the windows and lamp posts are in Octane. ", "Title" : "Fantasy Streets"},
    {"Tree1": Tree1, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and the high res landscape created in WorldCreator2 with Forester plugin being responsibile for the tree and grass. This project was moreso just a test with new technologies and plugins.", "Title" : "Tree Test"},
    {"Tree2": Tree2, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and the high res landscape created in WorldCreator2 with Forester plugin being responsibile for the tree and grass. This project was moreso just a test with new technologies and plugins.", "Title" : "Tree Test #2"},
    {"Slums": Spacebois, "Tech" : ["C4D + Octane", "Photoshop CC 2015", "Lightroom"], "Desc" : "A Personal piece. Made with Cinema 4D + Octane and prodecural buildings with some sci-fi models. Went for a full cinematic look with liberal use of filters, post processing, and general cinematic effects. Heat wave coming from the space props was done entirely in photoshop.", "Title" : "Future Ghetto"}
];

class CgGraphics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "Castle"
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item, link, Tech, Desc, Title) {
        this.setState({active: item});
        this.props.activeitem(item, link, Tech, Desc, Title);
    }

    componentWillMount() {
        if (!this.props.current) {
            this.props.activeitem("Castle", Castle, items[0].Tech, items[0].Desc, items[0].Title);
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
                                    <div className="ppreviewitem_descript">
                                        <strong>3D CG // </strong>{String(x)}
                                        
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