import React from 'react';
import PropTypes from 'prop-types';
import bemClassNames from 'bem-classnames';
import Place from 'material-ui/svg-icons/maps/place';
import MyLocation from 'material-ui/svg-icons/maps/my-location';

import './MapMarker.css';

const pointerColor = '#89849b';
const pointerSelectedColor = '#ff6347';

const markerClasses = {
  name: 'marker__pin',
  modifiers: ['selected']
};

const pointer = ({ isSecondary, onClick, name, placeId, selected }) => {
  if (isSecondary) {
    return <MyLocation />;
  }

  return (
    <div onClick={() => onClick(placeId)}>
      <div className="marker__restaurant-name">{name}</div>
      <Place className="marker__pin__pointer" color={selected ? pointerSelectedColor : pointerColor} />
      <div className='marker__pin__pulse' />
    </div>
  );
};

const Marker = props =>
  <div className='marker'>
    <div className={bemClassNames(markerClasses, { selected: props.selected })}>
      {pointer(props)}
    </div>
  </div>;

Marker.PropTypes = {
  isSecondary: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
  placeId: PropTypes.string,
  selected: PropTypes.bool
};

Marker.defaultProps = {
  isSecondary: false
};

export default Marker;
