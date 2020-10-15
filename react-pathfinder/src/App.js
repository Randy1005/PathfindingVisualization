import React, {Component} from 'react';
import Cell from './components/Cell'
import './App.css';

class App extends Component {
    
    render() {
        return (
            <Cell rect={{x: 1, y: 1, w: 5, h: 5}}/>
        );
    }

};

export default App;