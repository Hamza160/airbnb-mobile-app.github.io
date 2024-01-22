import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5B5B5B',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: '#000000'
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5B5B5B',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
    color: '#000',
  },
  totalPrice: {
    color: '#5B5B5B',
    textDecorationLine: 'underline'
  },
});

export default styles;
