/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, View} from 'react-native';
import * as React from 'react';
import styles from './styles';

const GuestsScreen = () => {
    const [counter, setCounter] = React.useState<number>(0);
  return (
    <View style={styles.container}>
      {/* Row 1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Adults</Text>
          <Text style={{color: '#8D8D8D'}}>Ages 13 or Above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.pressables}>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.text}>{counter}</Text>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Adults</Text>
          <Text style={{color: '#8D8D8D'}}>Ages 13 or Above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.pressables}>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.text}>{counter}</Text>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 1: Adults */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Adults</Text>
          <Text style={{color: '#8D8D8D'}}>Ages 13 or Above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.pressables}>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Text style={styles.text}>{counter}</Text>
          <Pressable
            onPress={() => setCounter(prevCounter => prevCounter + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
