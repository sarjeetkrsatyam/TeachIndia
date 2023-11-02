import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

// images=
//images
import share1 from '../Data/images/trend1.jpeg';
import share2 from '../Data/images/trend2.jpeg';
import share3 from '../Data/images/trend3.jpeg';
import share4 from '../Data/images/trend4.jpeg';
import share5 from '../Data/images/trend5.jpeg';

const Golive = () => {
  const images = [
    require('../Data/images/live1.jpeg'),
    require('../Data/images/live2.jpeg'),
    require('../Data/images/live3.jpeg'),
    require('../Data/images/live4.jpeg'),
    require('../Data/images/live5.jpeg'),
    require('../Data/images/live6.jpeg'),
  ];

  return (
    <View>
      <SliderBox
        images={images}
        dotColor="red"
        inactiveColor="white"
        dotStyle={{height: 18, width: 18, borderRadius: 10}}
        imageLoadingColor="white"
        autoplay={true}
        autoplayInterval={5000}
        circleLoop={true}
      />

      <Text style={styles.mosttext}>Hot & Trending Today!...</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.sharedcontainer}>
          <View style={styles.mostmain}>
            <TouchableOpacity>
              <Image source={share1} style={styles.shareimg} />
            </TouchableOpacity>
          </View>
          <View style={styles.mostmain}>
            <TouchableOpacity>
              <Image source={share2} style={styles.shareimg} />
            </TouchableOpacity>
          </View>

          <View style={styles.mostmain}>
            <TouchableOpacity>
              <Image source={share3} style={styles.shareimg} />
            </TouchableOpacity>
          </View>
          <View style={styles.mostmain}>
            <TouchableOpacity>
              <Image source={share4} style={styles.shareimg} />
            </TouchableOpacity>
          </View>
          <View style={styles.mostmain}>
            <TouchableOpacity>
              <Image source={share5} style={styles.shareimg} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.golive}>
          <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
            Go Live
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Golive;

const styles = StyleSheet.create({
  mosttext: {
    margin: 10,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  sharedcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  mostmain: {
    height: 200,
    width: 140,

    marginLeft: 10,
    borderRadius: 10,
  },
  shareimg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  golive: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 30,
    margin: 30,
    alignItems: 'center',
    marginTop: 90,
  },
});
