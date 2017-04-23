import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import RestaurantCard from '../../molecules/RestaurantCard';

class Restaurants extends Component {
  renderRestaurantsList () {
    const { restaurants, onSelectMarker, user } = this.props;

    return restaurants.map((place, key) =>
      <div key={key}>
        <RestaurantCard onOver={onSelectMarker} restaurant={place} currentPosition={user.position} />
        <Divider />
      </div>
    );
  }

  render() {
    return (
      <div className="restaurant-list">
        {this.renderRestaurantsList()}
      </div>
    );
  }
}

Restaurants.propTypes = {
  onSelectMarker: PropTypes.func,
  restaurants: PropTypes.array,
  user: PropTypes.shape({})
};

export default Restaurants;
