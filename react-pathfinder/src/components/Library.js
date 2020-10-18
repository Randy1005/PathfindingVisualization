import React, {Component} from 'react'
import { isUuid } from 'uuidv4';
import Cell from './Cell';

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.rowIndices = Array.from(Array(this.props.rows).keys());
        this.colIndices = Array.from(Array(this.props.cols).keys());

        let numCells = this.props.rows * this.props.cols;
        this.cells = Array(numCells);
        for (var i = 0; i < numCells; i++) {
            this.cells[i] = new Cell();
        }

        this.mouseAction = null;
        this.state = {
            cells: this.cells
        };


        // assign start position and destination
        this.cells[0].setProperties({'startPosition': true});
        this.cells[945].setProperties({'destination': true});
    }


    getCellIdx(property) {
        for (var i in this.cells) {
            if (this.cells[i].getProperty(property)) {
                return parseInt(i, 10);
            }
        }
    }

    removeFromCells(property) {
        for (let i in this.cells) {
            if (this.cells[i].props[property]) {
                this.cells[i].removeProperty([property]);
            } 
        }
    }

    mouseEvent(cellIdx, event) {
        if (event.type === 'mouseup') {
            this.mouseAction = null;
            this.cells[cellIdx].removeProperty(['active']);
  
            return;
        }
        
        // not holding down, ignore mouse over for this case
        if (event.buttons !== 1 && event.type !== 'click') {
            this.mouseAction = null;
            return;
        }


        if (this.mouseAction == null) {
            if (this.cells[cellIdx].getProperty('startPosition')) {
                this.mouseAction = (cellIdx) =>  {
                    this.removeFromCells('startPosition');
                    this.cells[cellIdx].setProperties({'startPosition': true});   
                }
            } else if (this.cells[cellIdx].getProperty('destination')) {
                this.mouseAction = (cellIdx) => {
                    this.removeFromCells('destination');
                    this.cells[cellIdx].setProperties({'destination': true});
                }
            } else if (this.cells[cellIdx].getProperty('wall')) {
                this.mouseAction = (cellIdx) => {
                    this.cells[cellIdx].removeProperty(['wall']);
                }
            } else {
                this.mouseAction = (cellIdx) => {
                    this.cells[cellIdx].setProperties({'wall': true});
                }
            }
        }

        

        
        
        this.setState({
            cells: this.cells
        });

        this.cells[cellIdx].setProperties({ 'active': true });
        this.mouseAction(cellIdx);
   
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
                                let cellIndex = row * this.colIndices.length + col;

                                let cellColorFill = 
                                this.cells[cellIndex].getProperty('startPosition') ? "blue" :
                                this.cells[cellIndex].getProperty('destination') ? "red" : 
                                this.cells[cellIndex].getProperty('wall') ? "grey" :
                                "none";

                                return (
                                <Cell
                                    cellColorFill={cellColorFill}
                                    onMouseDown={this.mouseEvent.bind(this, cellIndex)}
                                    onMouseOver={this.mouseEvent.bind(this, cellIndex)}
                                    onMouseUp={this.mouseEvent.bind(this, cellIndex)}
                                    key={`#cellIdx${cellIndex}`}
                                    cellidx={row * this.colIndices.length + col}
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
