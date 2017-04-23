import React from 'react';
import PropTypes from 'prop-types';
import Place from 'material-ui/svg-icons/maps/place';

import './MapMarker.css';

const pointerColor = '#89849b';

const Marker = () =>
  <div className='marker'>
    <div className='marker__pin'>
      <Place className="marker__pin__pointer" color={pointerColor} />
      <div className='marker__pin__pulse' />
    </div>
  </div>;

Marker.PropTypes = {
  hover: PropTypes.bool,
  text: PropTypes.string
};

export default Marker;
