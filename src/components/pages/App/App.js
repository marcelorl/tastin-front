import React from 'react';
import AppTemplate from '../../templates/App';

const App = (props) => {
  console.log('FODASE', props);
  return <AppTemplate {...props} />;
};

export default App;
