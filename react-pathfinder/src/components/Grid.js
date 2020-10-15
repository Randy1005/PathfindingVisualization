import React, {Component} from 'react'
import { uuid } from 'uuid';
import { isUuid } from 'uuidv4';
import Cell from './Cell';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.rowIndices = Array.from(Array(this.props.rows).keys());
        this.colIndices = Array.from(Array(this.props.cols).keys());

    }

    render() {
        return (
            <div className='grid'>
            {
                this.rowIndices.map((row)=>{
                    return (
                        <div key={row} className='gridRow'>
                        {
                            this.colIndices.map((col)=>{
                                return (<Cell key={`#cell${row}_${col}`} rect={{w: 50, h: 50}}></Cell>)
                            })
                        }
                        </div>
                    )
                })
            }
            </div>
        )
 
    }
};

export default Grid;