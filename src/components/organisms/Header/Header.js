import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
import LoginButton from '../../atoms/LoginButton';
import LoggedButton from '../../atoms/LoggedButton';
import AuthService from '../../../utils/AuthService';

import './Header.css';

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
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

  render () {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          iconElementRight={this.renderAuthenticationDialog()}
        />
        <Drawer open={this.state.open}>
          <div className='logo'>
            <div style={{ display: 'flex' }}>
              <div className='logo__pacman' />
              <div className='logo__text'>Tastin</div>
            </div>
            <FloatingActionButton mini className='logo__close-sidebar' onClick={this.onLogoClick}>
              <KeyboardBackspace />
            </FloatingActionButton>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
