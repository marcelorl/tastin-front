import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './LoginButton.css';

const LoginButton = (props) => {
  const { auth } = props;

  return <RaisedButton className='login-button' label='Login' secondary onClick={auth.login.bind(this)} />;
};

LoginButton.muiName = 'FlatButton';

export default LoginButton;
