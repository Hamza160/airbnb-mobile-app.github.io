import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  searchButton: {
    backgroundColor: '#FFFFFF',
    height: 60,
    left: 0,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    width: width - 20,
    marginHorizontal: 10,
    gap:10
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default styles;
