import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Map from '../../organisms/Map';
import Header from '../../organisms/Header';
import './App.css';

class App extends Component {
  render() {
    const { auth, children, logout, onSelectMarker, restaurants, user } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <div className="map-container">
            <Map currentPosition={user.position} restaurants={restaurants} onSelectMarker={onSelectMarker} />
          </div>
          <div className="App">
            <Header auth={auth} logout={logout} restaurants={restaurants} user={user} onOverMarker={onSelectMarker}>
              {children}
            </Header>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  auth: PropTypes.shape({}),
  children: PropTypes.node,
  logout: PropTypes.func,
  onSelectMarker: PropTypes.func,
  restaurants: PropTypes.array,
  user: PropTypes.shape({})
};

App.defaultProps = {
  user: {}
};

export default App;
