import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../molecules/MapMarker';

class Map extends Component {
  constructor (props) {
    super(props);

    const self = this;

    this.state = {pos: {lat: 0, lng: 0}};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        self.setState({ pos });
      });
    }
  }

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
    const restaurants = this.props.restaurants
      .map(place => {
        const {id, ...coords} = place;

        return (
          <MapMarker
            key={id}
            {...coords}
            text={id}
            hover={this.props.hoverKey === id} />
        );
      });

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBBvQLI7BPpXln_Jzl_tIUVH1f775C7GXM'
        }}
        center={this.state.pos}
        defaultZoom={this.props.zoom}
        hoverDistance={40 / 2}
        /* onChange={this._onChange}
        onChildClick={this._onChildClick}
        onChildMouseEnter={this._onChildMouseEnter}
        onChildMouseLeave={this._onChildMouseLeave} */
      >
        {restaurants}
      </GoogleMapReact>
    );
  }
}

Map.PropTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  hoverKey: PropTypes.string,
  clickKey: PropTypes.string,
  onCenterChange: PropTypes.func,
  onZoomChange: PropTypes.func,
  onHoverKeyChange: PropTypes.func,

  restaurants: PropTypes.array
};

Map.defaultProps = {
  zoom: 15,
  restaurants: [
    {id: 'Restaurant tudo de bom', lat: -22.955661, lng: -46.544871},
    {id: 'Muito bom comer aqui', lat: -22.961405, lng: -46.544758}
  ]
};

export default Map;
