import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import get from 'lodash/get';

const LoggedButton = (props) => {
  const userName = get(props.auth.getProfile(), 'name', 'John Doe');

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
      <MenuItem primaryText="Sign out" onClick={props.auth.logout} />
    </IconMenu>
  );
}

LoggedButton.propTypes = {
  auth: PropTypes.shape({
    getProfile: PropTypes.func,
    logout: PropTypes.func
  })
};

export default LoggedButton;
