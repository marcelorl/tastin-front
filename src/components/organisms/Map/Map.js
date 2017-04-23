import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../molecules/MapMarker';

class Map extends Component {
  _onChange (center, zoom) {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
  }

  _onChildClick (key, childProps) {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  }

  _onChildMouseEnter (key) {
    this.props.onHoverKeyChange(key);
  }

  _onChildMouseLeave () {
    this.props.onHoverKeyChange(null);
  }

  render () {
    const { currentPosition, onSelectMaker, restaurants, zoom } = this.props;

    let places = restaurants
      .map(place => {
        const {place_id, location, selected} = place;

        return (
          <MapMarker
            key={place_id}
            {...location}
            placeId={place_id}
            onClick={onSelectMaker}
            selected={selected} />
        );
      });

    const myCurrentLocationMarker = (
      <MapMarker
        key='1'
        isSecondary
        {...currentPosition} />
    );

    places.unshift(myCurrentLocationMarker);

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBBvQLI7BPpXln_Jzl_tIUVH1f775C7GXM'
        }}
        center={currentPosition}
        defaultZoom={zoom}
        hoverDistance={40 / 2}
        /* onChange={this._onChange}
        onChildClick={this._onChildClick}
        onChildMouseEnter={this._onChildMouseEnter}
        onChildMouseLeave={this._onChildMouseLeave} */
       >
        {places}
      </GoogleMapReact>
    );
  }
}

Map.PropTypes = {
  zoom: PropTypes.number,
  hoverKey: PropTypes.string,
  clickKey: PropTypes.string,
  onHoverKeyChange: PropTypes.func,
  currentPosition: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string
  }),
  onSelectMaker: PropTypes.func,
  restaurants: PropTypes.array
};

Map.defaultProps = {
  zoom: 17,
  restaurants: []
};

export default Map;
