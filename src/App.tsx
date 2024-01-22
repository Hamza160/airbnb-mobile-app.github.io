import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screens/home';
import Post from './components/Post';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
