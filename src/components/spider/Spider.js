import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Spider.less';

class Spider extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (<div className={`spider spider-${this.state.color}
                                spider-direction-${this.state.dirX}
                                spider-direction-${this.state.dirY}`}>
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

Spider.propTypes = {
  color: PropTypes.oneOf(['red', 'green', 'blue', 'orange', 'drugged']),
  dirX: PropTypes.oneOf(['left', 'right', 'center']),
  dirY: PropTypes.oneOf(['top', 'bottom', 'middle']),
};

export default Spider;