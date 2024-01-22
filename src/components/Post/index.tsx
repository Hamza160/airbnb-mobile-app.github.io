import {Text, View, Image} from 'react-native';
import * as React from 'react';
import styles from './styles';

const Post = ({post}) => {
  const {
    image,
    description,
    type,
    title,
    bed,
    bedroom,
    totalPrice,
    oldPrice,
    newPrice,
  } = post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>
        {bed} bed . {bedroom} bedroom
      </Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={3}>
        {type}. {title} {'\n'} {description}
      </Text>
      {/* Old Price & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice} </Text>
        <Text style={styles.newPrice}> ${newPrice}</Text> / night
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export default Post;
