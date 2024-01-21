import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screens/home';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'}/>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
