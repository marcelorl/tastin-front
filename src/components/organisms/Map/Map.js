import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from 'components/molecules/MapMarker';

class Map extends Component {
  render () {
    const { currentPosition, onSelectMarker, restaurants, zoom } = this.props;

    let places = restaurants
      .map(place => {
        const {place_id, name, location, selected} = place;

        return (
          <MapMarker
            key={place_id}
            {...location}
            placeId={place_id}
            name={name}
            onClick={onSelectMarker}
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
       >
        {places}
      </GoogleMapReact>
    );
  }
}

Map.PropTypes = {
  zoom: PropTypes.number,
  currentPosition: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string
  }),
  onSelectMarker: PropTypes.func,
  restaurants: PropTypes.array
};

Map.defaultProps = {
  zoom: 17,
  restaurants: []
};

export default Map;
