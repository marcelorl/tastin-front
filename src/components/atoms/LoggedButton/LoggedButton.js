import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import get from 'lodash/get';
import AuthService from '../../../utils/AuthService';

const LoggedButton = () => {
  const userName = get(AuthService.getProfile(), 'name', 'John Doe');

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
      <MenuItem primaryText={userName} disabled />
      <Divider />
      <MenuItem primaryText="Sign out" onClick={AuthService.logout} />
    </IconMenu>
  );
};

export default LoggedButton;
