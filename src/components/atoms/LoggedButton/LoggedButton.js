import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import get from 'lodash/get';
import AuthService from 'utils/AuthService';

const LoggedButton = props => {
  const { logout } = props;
  const userName = get(AuthService.getProfile(), 'name', 'John Doe');
  const picture = get(AuthService.getProfile(), 'picture', '');

  return (
    <IconMenu
      iconButtonElement={
        <FloatingActionButton mini secondary={true}>
          <MoreVertIcon />
        </FloatingActionButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem style={{ display: 'flex', overflow: 'hidden' }} disabled>
        <Avatar style={{ margin: '9px 5px 0 0' }} src={picture} size={30} />
        {userName}
      </MenuItem>
      <Divider />
      <MenuItem primaryText="Sign out" onClick={logout} />
    </IconMenu>
  );
};

LoggedButton.propTypes = {
  logout: PropTypes.func
};

export default LoggedButton;
