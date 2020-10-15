import React, {Component} from 'react'
import { isUuid } from 'uuidv4';
import Cell from './Cell';

export class Grid extends Component {
    constructor(rows, cols) {
        super();
        this.rowIndices = Array.from(Array(rows).keys());
        this.colIndices = Array.from(Array(cols).keys());

        let numCells = rows * cols;
        this.cells = Array(numCells);
        for (var i = 0; i < numCells; i++) {
            this.cells[i] = new Cell();
        }
    }


    getCellIdx(property) {
        for (var i in this.cells) {
            if (this.cells[i].getProperty(property)) {
                return parseInt(i, 10);
            }
        }
    }

    removeFromCells(property) {
        for (var i in this.cells) {
            if (this.cells[i].props[property]) {
                this.cells[i].removeProperty([property]);
            }
        }
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
                                return (
                                <Cell 
                                    key={`#cell${row}_${col}`} 
                                    rect={{w: 30, h: 30}}>
                                </Cell>)
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

export class AStarManager {

};
