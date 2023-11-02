import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons/';
import {SliderBox} from 'react-native-image-slider-box';
import Voice from '@react-native-voice/voice';

//images
import share1 from '../Data/images/shareimg1.jpeg';
import share2 from '../Data/images/shareimg2.jpeg';
import share3 from '../Data/images/shareimg3.jpeg';
import share4 from '../Data/images/shareimg4.jpeg';
import share5 from '../Data/images/shareimg5.jpeg';
// categery images
import allcate1 from '../Data/images/allcat1.jpeg';
import allcate2 from '../Data/images/allcat2.jpeg';
import allcate3 from '../Data/images/allcat3.jpeg';
import allcate4 from '../Data/images/allcat4.jpeg';
import allcate5 from '../Data/images/allcat5.jpeg';
import allcate6 from '../Data/images/allcat6.jpeg';

const Search = () => {
  const images = [
    require('../Data/images/slider6.jpeg'),
    require('../Data/images/slider1.jpeg'),
    require('../Data/images/slider3.jpeg'),
    require('../Data/images/slider4.jpeg'),
    require('../Data/images/slider5.jpeg'),
    require('../Data/images/slider2.jpeg'),
  ];

  //Voice mic=========
  const [result, setResult] = React.useState('');
  const [error, setError] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = err => setError(err.error);
  Voice.onSpeechResults = result => setResult(result.value[0]);

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
    } catch (err) {
      setError(err);
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.searchcontainer}>
        <View style={styles.inputbox}>
          <Ionicons name="search" style={styles.navicons} />
          <TextInput style={styles.inputboxdata} placeholder="# Explore" />
          <Text> {result} </Text>
          <Text> {error} </Text>
          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}>
            {isRecording ? (
              <MaterialIcons
                name="keyboard-voice"
                style={[styles.navicons, styles.miccolor]}
              />
            ) : (
              <MaterialIcons name="keyboard-voice" style={styles.navicons} />
            )}
          </TouchableOpacity>
        </View>
        <SliderBox
          images={images}
          dotColor="#e3690b"
          inactiveColor="white"
          dotStyle={{height: 10, width: 30, borderRadius: 10}}
          imageLoadingColor="white"
          autoplay={true}
          autoplayInterval={5000}
          circleLoop={true}
        />
        <Text style={styles.mosttext}>Most shared today!...</Text>

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

        <Text style={styles.allcategerytext}>All categery!...</Text>

        <View style={styles.allconatiner}>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate1} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Institute group</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate2} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Dancing life </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.allconatiner}>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate3} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Singing is Life</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate4} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Blind Institute</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.allconatiner}>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate5} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Child care Inst</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.allcategeryconatiner}>
            <TouchableOpacity>
              <Image source={allcate6} style={styles.allcatimg} />
              <Text style={styles.allcategerytextdata}>Oldage Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchcontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e6e4e3',
  },
  inputbox: {
    padding: 6,
    backgroundColor: '#bdbbb9',
    borderRadius: 40,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navicons: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  inputboxdata: {
    fontSize: 20,
    color: 'gray',
  },
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
  
  allcategerytext: {
    margin: 10,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',

    marginLeft: 10,
  },
  allconatiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
  },
  allcategeryconatiner: {
    width: 150,
    height: 150,

    margin: 10,
    borderRadius: 10,
    position: 'relative',
    marginBottom: 30,
  },
  allcategerytextdata: {
    padding: 14.5,
    position: 'absolute',
    fontSize: 18,
    marginTop: 120,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  allcatimg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  miccolor: {
    color: 'green',
    fontSize:35,
  },
});
