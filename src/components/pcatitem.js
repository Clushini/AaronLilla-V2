import React, { Component } from 'react';

class Pcatitem extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        this.props.active(item);
    }

    render() {
        return(
            <div className={(this.props.isactive === this.props.item) ? "pcatitem_active" : "pcatitem"} onClick={() => this.handleClick(this.props.item)}>
                {this.props.item}
            </div>
        );
    }
}

export default Pcatitem;