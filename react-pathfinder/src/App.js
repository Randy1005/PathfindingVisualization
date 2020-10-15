import React, {Component} from 'react';
import './App.css';
import { Grid, AStarManager } from './components/Library';
import { ButtonGroup } from './components/UI';

class App extends Component {

    constructor() {
        super();
        this.grid = new Grid(20, 50);
        this.manager = new AStarManager();

        this.state = {
            grid: this.grid,
            manager: this.manager
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.grid.render()}
                <ButtonGroup/>
            </React.Fragment>

        );
    }

};

export default App;