import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
const OnlineUser = () => {
  const images = [
    require('../Data/images/profile1.jpeg'),
    require('../Data/images/profile2.jpeg'),
    require('../Data/images/profile3.jpeg'),
    require('../Data/images/profile4.jpeg'),
  ];

  return (
    <View style={styles.onlinecontainer}>
      <SliderBox images={images} />
    </View>
  );
};

export default OnlineUser;

const styles = StyleSheet.create({
  onlinecontainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
