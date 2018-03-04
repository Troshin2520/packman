import React, { Component } from 'react';
import './Pacman.css';

class Pacman extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (<div className="pacman">
                    <div className="pacman-top">&bull;</div>
                    <div className="pacman-bottom"></div>
                </div>);
    }
}

export default Pacman;
