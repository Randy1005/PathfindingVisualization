import React, {Component} from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);  
    }

    render() {

        return (
            <svg width={this.props.rect.w} height={this.props.rect.h} ref={(svg) => this.svg = svg}>
                <rect
                    x="0"
                    y="0"
                    width={this.props.rect.w}
                    height={this.props.rect.h}
                    stroke="black"
                    fill="white"
                    strokeWidth='5'
                    ref={(e)=>this.svgRectEle = e}
                />
            </svg>
        );
    }

};

export default Cell;