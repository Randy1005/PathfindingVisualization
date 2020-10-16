import React, {Component} from 'react';
import './App.css';
import { Grid, AStarManager } from './components/Library';

class App extends Component {

    constructor() {
        super();
        this.manager = new AStarManager();

        this.state = {
            manager: this.manager
        }

        
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <g>
                        <Grid rows={20} cols={50}></Grid>
                    </g>
                    <div>
                        <button>RUN</button>
                        <button>RESET</button>
                    </div>
                </div>
            </React.Fragment>
            

        );
    }

};

export default App;