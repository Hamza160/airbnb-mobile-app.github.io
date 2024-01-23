import * as React from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
const DestinationSearchScreen = () => {
  const [search, setSearch] = React.useState<string>('');
  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.searchInput}
        placeholder="Where are you going"
        value={search}
        onChangeText={setSearch}
      />
      {/* List of Destination */}
      <View>
        <FlatList 
          data={searchResults}
          renderItem={({item}) => 
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name='location-pin' size={30} color={'#000'}/>
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
          }
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default DestinationSearchScreen;
