import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import RestaurantCard from '../../molecules/RestaurantCard';


class App extends Component {
  renderRestaurantsList () {
    const { restaurants, onSelectMaker, user } = this.props;

    return restaurants.map((place, key) => {
      return (
        <div key={key}>
          <RestaurantCard onOver={onSelectMaker} restaurant={place} currentPosition={user.position} />
          <Divider />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="restaurant-list">
        {this.renderRestaurantsList()}
      </div>
    );
  }
}

export default App;
