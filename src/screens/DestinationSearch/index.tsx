import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const DestinationSearchScreen = () => {
  const [search, setSearch] = React.useState<string>('');
  return (
    <View>
      {/* Input Component */}
      <TextInput
        style={styles.searchInput}
        placeholder="Where are you going"
        value={search}
        onChange={setSearch}
      />
      {/* List of Destination */}
    </View>
  );
};

export default DestinationSearchScreen;
