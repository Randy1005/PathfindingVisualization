import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {

    render() {
        return (
            <Grid rows={10} cols={20}></Grid>
        );
    }

};

export default App;