import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentPicker from 'react-native-document-picker';
import Entypo from 'react-native-vector-icons/dist/Entypo/';
import chatuser1 from '../Data/images/profile3.jpeg';
import chatuser2 from '../Data/images/profile1.jpeg';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
// import {launchCamera} from 'react-native-image-picker';
// import {Camera} from 'react-native-vision-camera';

const Chating = () => {
  //camera permission

  //second options
  // useEffect(() => {
  //   CheckPermission();
  // }, []);
  // const CheckPermission = async () => {
  //   const newCameraPermission = await Camera.requestCameraPermission();
  //   const newMicrophonePermission = await Camera.requestMicrophonePermission();
  //   console.log(newCameraPermission);
  // };

  // const [cameraPhoto, setCameraPhoto] = useState();
  // let options = {
  //   saveToPhotos: true,
  //   mediaType: 'photo',
  //   cameraType: 'front',
  // };
  // const openCamera = async () => {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     const result = await launchCamera(options);
  //     setCameraPhoto(result.assets[0].uri);
  //   }
  // };

  //document picker
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick();
    } catch (error) {
      if (DocumentPicker.isCancel(e)) {
        console.log(e);
      }
    }
  };

  return (
    <ScrollView>
      <Text style={styles.timetext}> today 09:04 am </Text>

      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            Hey Sarjeet how are you?... plz call me
          </Text>
        </View>
      </View>

      <Text style={styles.timetext}> today 09:20 am </Text>

      {/* right user */}
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>
            Hey swati i m fine what ablou you?{' '}
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>sorry yar </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>
            actualy i was busy so i din't call you{' '}
          </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <Text style={styles.timetext}> today 10:13 am </Text>
      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            no issue yar but i missss u{' '}
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
      </View>
      <Text style={styles.timetext}>today 12:00 am </Text>
      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            Happy bdy my laddu <Ionicons name="heart" style={styles.emoj} />
            <Ionicons name="heart" style={styles.emoj} />
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
      </View>
      <Text style={styles.timetext}> today 09:04 am </Text>

      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            Hey Sarjeet how are you?... plz call me
          </Text>
        </View>
      </View>

      <Text style={styles.timetext}> today 09:20 am </Text>

      {/* right user */}
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>
            Hey swati i m fine what ablou you?{' '}
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>sorry yar </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <View style={styles.chatinguserrightmain}>
        <View style={[styles.rightusertext2]}>
          <Text style={{color: 'black', fontSize: 16}}>
            actualy i was busy so i din't call you{' '}
          </Text>
        </View>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser2} style={styles.chatuserimg} />
        </View>
      </View>
      <Text style={styles.timetext}> today 10:13 am </Text>
      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            no issue yar but i missss u{' '}
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
      </View>
      <Text style={styles.timetext}>today 12:00 am </Text>
      <View style={styles.chatingprofilemain}>
        <View style={styles.chatingprofileuser}>
          <Image source={chatuser1} style={styles.chatuserimg} />
        </View>
        <View style={styles.chatingtextbox}>
          <Text style={{color: 'black', fontSize: 16}}>
            Happy bdy my laddu <Ionicons name="heart" style={styles.emoj} />
            <Ionicons name="heart" style={styles.emoj} />
            <Ionicons name="heart" style={styles.emoj} />{' '}
          </Text>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.typingbox}>
          <TouchableOpacity>
            <Entypo name="emoji-happy" style={styles.chatemoj} />
          </TouchableOpacity>
          <TextInput placeholder="Messages" style={styles.chatemoj} />
          <View style={styles.typingiconright}>
            <TouchableOpacity onPress={selectDoc}>
              <Ionicons name="document-attach" style={styles.chatemoj} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="camera" style={styles.chatemoj} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sendicon}>
          <TouchableOpacity>
            <Ionicons name="send" style={styles.senddata} />
          </TouchableOpacity>
        </View>
      </View>

      {/* //end view */}
    </ScrollView>
  );
};

export default Chating;

const styles = StyleSheet.create({
  chatingprofilemain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  chatingprofileuser: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  chatuserimg: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  chatingtextbox: {
    padding: 20,
    backgroundColor: '#faedc0',
    marginLeft: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  // right chat=======
  chatinguserrightmain: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    marginTop: -6,
  },

  rightusertext2: {
    marginRight: 5,
    padding: 20,
    backgroundColor: '#faedc0',
    // borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  timetext: {
    backgroundColor: 'white',
    height: 'auto',
    width: 110,
    padding: 2,
    borderRadius: 5,
    alignSelf: 'center',
  },
  emoj: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center',
  },
  //typing box
  typingbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    width: '78%',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
  },
  typingiconright: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chatemoj: {
    fontSize: 25,
    color: '#223a82',
  },
  sendicon: {
    backgroundColor: '#e36409',
    height: 60,
    width: 60,
    borderRadius: 30,

    alignSelf: 'center',
  },
  senddata: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 28,
  },
});
