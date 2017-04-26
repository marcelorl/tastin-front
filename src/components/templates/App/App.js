import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import Map from 'components/organisms/Map';
import Header from 'components/organisms/Header';

import Restaurants from 'components/pages/Restaurants';
import Reviews from 'components/pages/Reviews';

import './App.css';

class App extends Component {
  render() {
    const { auth, logout, onSelectMarker, restaurants, user } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <div className="map-container">
            <Map currentPosition={user.position} restaurants={restaurants} onSelectMarker={onSelectMarker} />
          </div>
          <div className="App">
            <Header
              auth={auth}
              logout={logout}
              restaurants={restaurants}
              user={user}
              onOverMarker={onSelectMarker}>
                <Route exact path="/" component={Restaurants} />
                <Route path="/:id/reviews" component={Reviews} />
            </Header>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  auth: PropTypes.shape({}),
  logout: PropTypes.func,
  onSelectMarker: PropTypes.func,
  restaurants: PropTypes.array,
  user: PropTypes.shape({})
};

App.defaultProps = {
  user: {}
};

export default App;
