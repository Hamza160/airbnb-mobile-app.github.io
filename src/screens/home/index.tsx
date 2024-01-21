import * as React from 'react';
import {Text, View, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import BackgroundImage from '../../../assets/images/wallpaper.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      {/* Searchbar Componente */}
        <ImageBackground source={BackgroundImage} style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Search Button Clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Explore Button Clicked')}>
        <Fontisto name="search" size={25} color={'#F15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
   
    </View>
  );
};

export default HomeScreen;
