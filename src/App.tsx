import {
  FlatList,
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HomeScreen from './screens/Home';
import Post from './components/Post';
import feed from './data/feed';
import SearchResultsScreen from './screens/SearchResults';
import DestinationSearchScreen from './screens/DestinationSearch';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen /> */}
      <DestinationSearchScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
