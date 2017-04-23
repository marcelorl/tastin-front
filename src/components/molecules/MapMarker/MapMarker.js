import React from 'react';
import PropTypes from 'prop-types';
import Place from 'material-ui/svg-icons/maps/place';
import MyLocation from 'material-ui/svg-icons/maps/my-location';

import './MapMarker.css';

const pointerColor = '#89849b';

const secondaryPointer = isSecondary => {
  if (isSecondary) {
    return <MyLocation />;
  }

  return (
    <div>
      <Place className="marker__pin__pointer" color={pointerColor} />
      <div className='marker__pin__pulse' />
    </div>
  );
};

const Marker = props =>
  <div className='marker'>
    <div className='marker__pin'>
      {secondaryPointer(props.isSecondary)}
    </div>
  </div>;

Marker.PropTypes = {
  hover: PropTypes.bool,
  text: PropTypes.string
};

Marker.defaultProps = {
  isSecondary: false
};

export default Marker;
