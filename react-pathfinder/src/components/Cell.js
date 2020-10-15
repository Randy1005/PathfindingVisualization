import React, {Component} from 'react';

class Cell extends Component {
    constructor(props={}) {
        super(props);
        
    }

    setProperties(props = {}) {
        Object.assign(this.props, props);
    }

    getProperty(propKey) {
        return this.props[propKey];
    }

    removeProperty(props = []) {
        for (var property of props) {
            delete this.props[property];
        }
    }

    render() {
        return (
            <svg style={{display: "inline"}, {verticalAlign: "top"}} width={this.props.rect.w} height={this.props.rect.h} ref={(svg) => this.svg = svg}>
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