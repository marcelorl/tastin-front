import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import LoginButton from '../../atoms/LoginButton';
import LoggedButton from '../../atoms/LoggedButton';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.onLogoClick = this.onLogoClick.bind(this);
    this.onLeftIconButtonTouchTap = this.onLeftIconButtonTouchTap.bind(this);
  }

  onLeftIconButtonTouchTap() {
    this.setState({ open: true });
  }

  onLogoClick() {
    this.setState({ open: false });
  }

  render() {
    const { auth } = this.props;

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          iconElementRight={auth.loggedIn() ? <LoggedButton auth={auth} /> : <LoginButton auth={auth} />}
        />
        <Drawer
          open={this.state.open}
        >
          <div className="logo" onClick={this.onLogoClick}>
            <div className="logo__pacman"></div>
            <div className="logo__text">Tastin</div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
