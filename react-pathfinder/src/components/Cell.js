import React, {Component} from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg viewBox="0 0 100 100" ref={(svg) => this.svg = svg}>
                <rect
                    x={this.props.rect.x}
                    y={this.props.rect.y}
                    width={this.props.rect.w}
                    height={this.props.rect.h}
                    stroke="black"
                    fill="white"
                    stroke-width='0.1'
                    ref={(e)=>this.svgRectEle = e}
                />
            </svg>
        );
    }

};

export default Cell;