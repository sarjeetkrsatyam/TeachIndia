import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PostData} from '../Data/Postdata/PostData';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import AntDesign from 'react-native-vector-icons/dist/AntDesign/';
import {Homedata} from '../Data/HomeData/HomeData';
// profile images
import profile1 from '../Data/images/profile1.jpeg';
import profile2 from '../Data/images/profile2.jpeg';
import profile3 from '../Data/images/profile3.jpeg';
import profile4 from '../Data/images/profile4.jpeg';

//post images
import post1 from '../Data/images/post2.jpeg';
import post2 from '../Data/images/post3.jpeg';
import post3 from '../Data/images/post4.jpeg';
import post4 from '../Data/images/post5.jpeg';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilback}>
          <Image source={profile1} style={styles.profileimg} />
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Name:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              Sarjeet kumar (Graduate)
            </Text>{' '}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Spe:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              All subject(2 years)
            </Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Ionicons name="location-sharp" style={styles.profiletext} />
            <Text>Bhojaur masaurhi patna Bihar (India)</Text>
          </View>
        </View>
      </View>
      <View style={styles.imagehead}>
        <Image source={post1} style={styles.imagedata} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 4,
          backgroundColor: '#9c9a9a',
          padding: 10,
          marginTop: -20,
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View>
          <TouchableOpacity>
            <Ionicons name="logo-whatsapp" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>368 shares</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>692 comments</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart-dislike" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>48 dislike</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}> 2.5k</Text>
        </View>
      </View>
      {/* ======2nd data ========== */}
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilback}>
          <Image source={profile2} style={styles.profileimg} />
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Name:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              Niharikanandan (Post Graduate)
            </Text>{' '}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Spe:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              All subject(4.7 years)
            </Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Ionicons name="location-sharp" style={styles.profiletext} />
            <Text>daulatpur masaurhi patna Bihar (India)</Text>
          </View>
        </View>
      </View>
      <View style={styles.imagehead}>
        <Image source={post3} style={styles.imagedata} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 4,
          backgroundColor: '#9c9a9a',
          padding: 10,
          marginTop: -20,
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View>
          <TouchableOpacity>
            <Ionicons name="logo-whatsapp" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>368 shares</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>692 comments</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart-dislike" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>48 dislike</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}> 2.5k</Text>
        </View>
      </View>

      {/* //=====================3rd post=================================== */}
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilback}>
          <Image source={profile3} style={styles.profileimg} />
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Name:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              Kumari vandana (Graduate)
            </Text>{' '}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Spe:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              All subject(2.8 years)
            </Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Ionicons name="location-sharp" style={styles.profiletext} />
            <Text>Khainiya masaurhi patna Bihar (India)</Text>
          </View>
        </View>
      </View>
      <View style={styles.imagehead}>
        <Image source={post4} style={styles.imagedata} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 4,
          backgroundColor: '#9c9a9a',
          padding: 10,
          marginTop: -20,
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View>
          <TouchableOpacity>
            <Ionicons name="logo-whatsapp" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>368 shares</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>692 comments</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart-dislike" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>48 dislike</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}> 2.5k</Text>
        </View>
      </View>
      {/* ========4th post -============ */}
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.profilback}>
          <Image source={profile4} style={styles.profileimg} />
        </View>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Name:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              Shruti kumari (8th)
            </Text>{' '}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'red'}}>
            Need:-{' '}
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              All subject(english, hindi)
            </Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Ionicons name="location-sharp" style={styles.profiletext} />
            <Text>Bhojaur masaurhi patna Bihar (India)</Text>
          </View>
        </View>
      </View>
      <View style={styles.imagehead}>
        <Image source={post1} style={styles.imagedata} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 4,
          backgroundColor: '#9c9a9a',
          padding: 10,
          marginTop: -20,
          borderBottomEndRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <View>
          <TouchableOpacity>
            <Ionicons name="logo-whatsapp" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>368 shares</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>692 comments</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart-dislike" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>48 dislike</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="heart" style={styles.likeicons} />
          </TouchableOpacity>
          <Text style={{color: 'white'}}> 2.5k</Text>
        </View>
      </View>




    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  posthead: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vh',
    height: 410,
    backgroundColor: '#fc7e3f',
    position: 'relative',
    borderBottomWidth: 2,
    borderColor: '#f59d31',
    marginTop: 10,
    borderTopWidth: 2,
  },
  profileside: {
    height: 404,
    width: '38%',
    borderBottomWidth: 2,
    borderColor: '#f59d31',
  },

  profile: {
    width: '70%',
    height: '33%',
    padding: 10,
    backgroundColor: '#fcd7a9',
    marginLeft: 30,
    borderRadius: 50,
    marginBottom: -20,
  },
  profileimg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textcontainer: {
    width: '100%',
    height: '66%',
    margin: 1,
    backgroundColor: '#fcd7a9',
  },
  profiletext: {
    fontSize: 16,
    color: 'red',
    gap: 1,
    fontWeight: 'bold',
  },
  profiledata: {
    fontSize: 14,
    color: 'black',
    gap: 1,
  },
  locationtext: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 1.5,
  },
  postside: {
    height: 410,
    width: '62%',
  },
  imagepost: {
    height: '100%',
    width: '100%',
  },
  likecontiner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    position: 'relative',
    width: '100%',
    height: 55,
    backgroundColor: '#fc7e3f',
    marginTop: -53,
    borderBottomWidth: 2,
    borderColor: '#f59d31',
  },
  likeicons: {
    display: 'flex',
    flexDirection: 'row',

    fontSize: 30,
    color: '#242857',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentcontainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',

    alignItems: 'flex-end',
    marginTop: -22,
  },
  commentdata: {
    fontSize: 14,
    color: 'white',
  },
  seconddata1: {
    marginLeft: 17,
  },
  seconddata2: {
    marginLeft: 20,
  },
  seconddata3: {
    marginLeft: 55,
  },
  //============new started stylish changes
  profilback: {
    height: 60,
    width: 60,
    borderRadius: 50,
    margin: 10,
  },
  imagehead: {
    height: 500,
    width: 385,
    alignItems: 'center',
    alignSelf: 'center',
  },
  imagedata: {
    height: '100%',
    width: '100%',
  },
});
