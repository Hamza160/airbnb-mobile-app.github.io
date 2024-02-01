import {StatusBar} from 'react-native';
import React from 'react';
import Router from './navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </>
  );
};

export default App;
