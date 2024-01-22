import {FlatList, StyleSheet, View} from 'react-native';
import * as React from 'react';
import feed from '../../data/feed';
import Post from '../../components/Post';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({});
