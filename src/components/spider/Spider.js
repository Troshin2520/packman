import React, { Component } from 'react';
import './Spider.less';

class Spider extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (<div className={`spider spider-${this.props.color}
                                spider-direction-${this.props.dirX}
                                spider-direction-${this.props.dirY}`}>
                    <div className="spider-body">
                        <div className="spider-eyes">
                            <div className="spider-pupils"></div>
                        </div>
                        <div className="spider-eyes">
                            <div className="spider-pupils"></div>
                        </div>
                    </div>
                    <div className="spider-bottom">
                        <div className="spider-claws">
                            <div className="spider-claw"></div>
                            <div className="spider-claw"></div>
                            <div className="spider-claw"></div>
                            <div className="spider-claw"></div>
                        </div>
                    </div>
                </div>);
    }
}

export default Spider;