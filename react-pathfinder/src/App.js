import React, { Component } from 'react';
import { Sprite, Stage } from "react-pixi-fiber";
import './App.css';


const SceneWidth = 1000;
const SceneHeight = 600;
const SCENE_CONFIG = {
    backgroundColor: 0x1099bb,
    width: SceneWidth,
    height: SceneHeight
};


class App extends Component {
    render() {
        return ( 
            <Stage options = { SCENE_CONFIG } >

            </Stage>
        );
    }
}

export default App;