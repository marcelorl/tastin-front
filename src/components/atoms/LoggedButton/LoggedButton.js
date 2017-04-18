import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const LoggedButton = (props) => (
  <IconMenu
    iconButtonElement={
      <FloatingActionButton mini secondary={true}>
        <MoreVertIcon />
      </FloatingActionButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Sign out" onClick={props.auth.getUserInfo} />
  </IconMenu>
);

export default LoggedButton;
