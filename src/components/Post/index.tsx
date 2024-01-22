import {Text, View, Image} from 'react-native';
import * as React from 'react';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: 'https://www.zdnet.com/a/img/resize/d36e142bd1aa124b869cfb89a70d89d823f44565/2023/12/19/33404002-f49d-4e20-8789-9af8ddcd4da3/photobot.jpg?auto=webp&width=1280',
        }}
        style={styles.image}
      />
      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>1 bed . 1 bedroom</Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>
      {/* Old Price & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $36</Text> / night
      </Text>
      {/* Total Price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
