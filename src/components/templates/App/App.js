import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Map from '../../organisms/Map';
import Header from '../../organisms/Header';
import './App.css';

class App extends Component {
  render() {
    const { auth, logout, onSelectMaker, restaurants, user } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <div className="map-container">
            <Map currentPosition={user.position} restaurants={restaurants} onSelectMaker={onSelectMaker} />
          </div>
          <div className="App">
            <Header auth={auth} logout={logout} restaurants={restaurants} user={user} onOverMarker={onSelectMaker} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
