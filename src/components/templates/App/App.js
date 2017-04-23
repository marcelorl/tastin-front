import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Map from '../../organisms/Map';
import Header from '../../organisms/Header';
import './App.css';

class App extends Component {
  render() {
    const { auth, logout, restaurants, user } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <div className="map-container">
            <Map currentPosition={user.position} restaurants={restaurants} />
          </div>
          <div className="App">
            <Header auth={auth} logout={logout} restaurants={restaurants} user={user} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
