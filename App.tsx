import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Router from './src/Navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#ff8d36'} />
      <Router />
    </>
  );
};

export default App;
