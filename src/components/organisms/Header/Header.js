import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import Divider from 'material-ui/Divider';
import LoginButton from '../../atoms/LoginButton';
import LoggedButton from '../../atoms/LoggedButton';
import RestaurantCard from '../../molecules/RestaurantCard';
import AuthService from '../../../utils/AuthService';

import './Header.css';

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: true
    };

    this.onLogout = this.onLogout.bind(this);
    this.onLogoClick = this.onLogoClick.bind(this);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
  }

  onLeftIconButtonTouchTap () {
    this.setState({ open: true });
  }

  onLogoClick () {
    this.setState({ open: false });
  }

  onLogout () {
    AuthService.logout();
    this.props.logout();

    this.forceUpdate();
  }

  renderAuthenticationDialog () {
    const { auth, user } = this.props;

    if (user.logged || auth.loggedIn()) {
      return <LoggedButton logout={this.onLogout} />;
    }

    return <LoginButton auth={auth} />;
  }

  renderRestaurantsList () {
    const { restaurants, onOverMarker, user } = this.props;

    return restaurants.map((place, key) => {
      return (
        <div key={key}>
          <RestaurantCard onOver={onOverMarker} restaurant={place} currentPosition={user.position} />
          <Divider />
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          iconElementRight={this.renderAuthenticationDialog()}
        />
        <Drawer className="menu-drawer" open={this.state.open}>
          <div className='logo'>
            <div style={{ display: 'flex' }}>
              <div className='logo__pacman' />
              <div className='logo__text'>Tastin</div>
            </div>
            <FloatingActionButton mini className='logo__close-sidebar' onClick={this.onLogoClick}>
              <KeyboardBackspace />
            </FloatingActionButton>
          </div>
          <div className="restaurant-list">
            {this.renderRestaurantsList()}
          </div>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.shape({}),
  onOverMarker: PropTypes.func,
  user: PropTypes.shape({})
};

export default Header;
