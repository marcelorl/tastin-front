import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MapMarker.css';

class Marker extends Component {
  render() {
    return (
      <div className="marker">
        <div className="marker__pin">
          <div className="marker__pin__pointer"></div>
          <div className="marker__pin__pulse"></div>
        </div>
      </div>
    );
  }
}

Marker.PropTypes = {
  hover: PropTypes.bool,
  text: PropTypes.string
};

export default Marker;
