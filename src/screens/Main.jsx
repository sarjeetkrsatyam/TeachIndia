import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons/';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6/';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
// ========Images===========
import notiprofile1 from '../Data/images/profile1.jpeg';
import notiprofile2 from '../Data/images/profile3.jpeg';
import notiprofile3 from '../Data/images/profile4.jpeg';
import notiprofile4 from '../Data/images/profile5.jpeg';
import HomeScreen from './HomeScreen';
import Chat from './Chat';
import Profile from './Profile';
import OnlineUser from './OnlineUser';
import Setting from './Setting';

const Main = () => {
  //usenavigation========
  const navigation = useNavigation();

  // modal useState
  const [isModal, setIsModal] = useState(false);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(false);
  const [setting, setSetting] = useState(false);

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
    <View>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0.5}}
        colors={['#fc8923', '#f77d50', '#a14e06']}>
        <View style={styles.Main}>
          <TouchableOpacity
            onPress={() => {
              setIsModal(true);
            }}>
            <MaterialIcons name="language" style={styles.language} />
          </TouchableOpacity>

          <TextInput style={styles.inputbox} />

          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}>
            {/* <Ionicons name="mic" style={styles.searchmic} /> */}
            {isRecording ? (
              <Ionicons
                name="mic"
                style={[styles.searchmic, styles.miccolor]}
              />
            ) : (
              <Ionicons name="mic" style={styles.searchmic} />
            )}
          </TouchableOpacity>

          <View style={styles.NavIcons}>
            <TouchableOpacity
              onPress={() => {
                setNotification(true);
              }}>
              <Ionicons name="notifications" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setChat(true);
              }}>
              <Ionicons name="logo-wechat" style={styles.iconchat} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setProfile(true);
              }}>
              <FontAwesome6 name="user-tie" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.voicesoung}>{result}# </Text>
      </LinearGradient>

      {/* =======Setting page============ */}
      <Modal
        visible={setting}
        onRequestClose={() => {
          setSetting(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={[styles.noficationnav]}>
          <TouchableOpacity
            onPress={() => {
              setSetting(false);
            }}>
            <Ionicons name="arrow-back-outline" style={styles.backicon} />
          </TouchableOpacity>
          <Text style={[styles.navtext, styles.secondsetingtext]}>
            Settings
          </Text>
        </View>
        <Setting />
      </Modal>

      {/* //============ change your language Modal===================== */}
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        //  animationType="slide"
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.languagemodalcontainer}>
          <View style={styles.navlanguage}>
            <TouchableOpacity
              onPress={() => {
                setIsModal(false);
              }}>
              <Ionicons name="arrow-back-outline" style={styles.backicon} />
            </TouchableOpacity>
            <Text style={styles.navtext}>Change your Language</Text>
          </View>

          <View style={styles.languageContainer}>
            <View>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Hindi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>English</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Bhojpuri</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Punjabi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Haryanwi</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Telugu</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* //============Right side language MODAL=========== */}
            <View>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Gujrati</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Bengoli</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Karnataka</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Tamil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Kerla</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.textlanguagecontainer}>
                  <Text style={styles.languagetext}>Marathi</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* ==============Nofication Modal====================== */}
      <Modal
        visible={notification}
        onRequestClose={() => setNotification(false)}
        animationType="slide"
        transparent={true}
        animationIn="slideInRight"
        animationOut="slideOutRight">
        <ScrollView>
          <View style={styles.noficationcontainer}>
            <View style={styles.noficationnav}>
              <TouchableOpacity
                onPress={() => {
                  setNotification(false);
                }}>
                <Ionicons name="arrow-back-outline" style={styles.backicon} />
              </TouchableOpacity>
              <Text style={styles.navtext}>Notifications</Text>
              <TouchableOpacity
                onPress={() => {
                  setSetting(true);
                }}>
                <Ionicons name="settings-outline" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* 1st notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Satyam Singh, Nitish Rana{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 1.3k others likes your post
                  </Text>{' '}
                </Text>
                <Text>2 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/*2nd notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile2} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sarjeet kumar, Santosh{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 103 others likes your comment "Jay Shree Ram Jay
                    Hanuman"
                  </Text>{' '}
                </Text>
                <Text>30 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/*3rd notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile3} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sonam sharma{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    send follow request to you
                  </Text>{' '}
                </Text>
                <Text>40 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/* 4th notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile4} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Satyam Singh, Nitish Rana{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 1.3k others likes your post
                  </Text>{' '}
                </Text>
                <Text>2 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/*5th notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Satyam Singh, Nitish Rana{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 1.3k others likes your post
                  </Text>{' '}
                </Text>
                <Text>2 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/* 6th notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Satyam Singh, Nitish Rana{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 1.3k others likes your post
                  </Text>{' '}
                </Text>
                <Text>2 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}

            {/* 7th notification middle */}
            <View style={styles.notificationmidcontainer}>
              <View style={styles.notificationleft}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                </View>
              </View>
              <View style={styles.notificationright}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Satyam Singh, Nitish Rana{' '}
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    and 1.3k others likes your post
                  </Text>{' '}
                </Text>
                <Text>2 minutes ago</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" style={styles.backicon} />
              </TouchableOpacity>
            </View>
            {/* notification end */}
          </View>
        </ScrollView>
      </Modal>
      {/* ======================Chat Modal======================== */}

      <Modal
        visible={chat}
        onRequestClose={() => setChat(false)}
        //  animationType="slide"
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.noficationcontainer}>
          <View style={styles.noficationnav}>
            <TouchableOpacity
              onPress={() => {
                setChat(false);
              }}>
              <Ionicons name="arrow-back-outline" style={styles.backicon} />
            </TouchableOpacity>
            <Text style={styles.navtext}>Your Chat</Text>
            <TouchableOpacity
              onPress={() => {
                setSetting(true);
              }}>
              <Ionicons name="settings-outline" style={styles.backicon} />
            </TouchableOpacity>
          </View>
          {/* =========Chat middle========== */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.chatstatusmain}>
              <View style={styles.chatstatus}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                  <View style={styles.statusonline}></View>
                  <Text style={styles.statustext}>Sarjeet kr</Text>
                </View>
              </View>
              {/* ==2nd chat status */}
              <View style={styles.chatstatus}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                  <View style={styles.statusonline}></View>
                  <Text style={styles.statustext}>Sarjeet kr </Text>
                </View>
              </View>
              {/* 3rd chat status */}
              {/* ==2nd chat status */}
              <View style={styles.chatstatus}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                  <View style={styles.statusonline}></View>
                  <Text style={styles.statustext}>Sarjeet kr</Text>
                </View>
              </View>
              {/* 3rd chat status */}
              {/* ==2nd chat status */}
              <View style={styles.chatstatus}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                  <View style={styles.statusonline}></View>
                  <Text style={styles.statustext}>Sarjeet kr </Text>
                </View>
              </View>
              {/* 3rd chat status */}
              {/* ==2nd chat status */}
              <View style={styles.chatstatus}>
                <View style={styles.notiprofile}>
                  <Image source={notiprofile1} style={styles.notiprofileimg} />
                  <View style={styles.statusonline}></View>
                  <Text style={styles.statustext}>Sarjeet kr </Text>
                </View>
              </View>
              {/* 3rd chat status */}
            </View>
          </ScrollView>

          <Chat />
        </View>
      </Modal>
      {/* ==================Profile Modal====================== */}

      <Modal
        visible={profile}
        onRequestClose={() => setProfile(false)}
        //  animationType="slide"
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.profilecontainer}>
          {/* nav start */}
          <View style={styles.noficationnav}>
            <TouchableOpacity
              onPress={() => {
                setProfile(false);
              }}>
              <Ionicons name="arrow-back-outline" style={styles.backicon} />
            </TouchableOpacity>
            <Text style={styles.navtext}>Your Profile</Text>
            <TouchableOpacity
              onPress={() => {
                setSetting(true);
              }}>
              <Ionicons name="settings-outline" style={styles.backicon} />
            </TouchableOpacity>
          </View>
          {/* nav end  */}
          <Profile />
        </View>
      </Modal>
      {/* ===============END Modal===================== */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  Main: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    alignItem: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  inputbox: {
    padding: 8,
    width: 180,
    backgroundColor: '#e1dfe6',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    fontSize: 16,
    color: 'black',
  },
  searchmic: {
    fontSize: 30,
    padding: 10,
    backgroundColor: '#e1dfe6',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    color: '#32236b',
  },
  NavIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    marginLeft: 2,
    fontSize: 27,
    color: '#32236b',
  },
  iconchat: {
    marginLeft: 7,
    marginRight: 8,
    fontSize: 27,
    color: '#32236b',
  },
  language: {
    marginTop: 10,
    fontSize: 27,
    color: '#32236b',
    marginRight: 8,
  },

  // Language Modal style=====================
  languagemodalcontainer: {
    width: '80%',
    height: '52%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  navlanguage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  backicon: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  navtext: {
    fontSize: 20,
    color: 'black',
  },
  languageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  textlanguagecontainer: {
    height: 45,
    width: 110,
    backgroundColor: '#f7ad3e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  languagetext: {
    fontSize: 18,
    color: 'white',
  },
  // ==============Notifaction Modal==============
  noficationcontainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#f7c497',
    marginTop: 70,
    position: 'relative',
  },
  noficationnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },
  notificationmidcontainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    backgroundColor: '#f5f0e4',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  notiprofile: {
    height: 90,
    width: 90,

    borderRadius: 45,
  },
  notiprofileimg: {
    height: '100%',
    width: '100%',
    borderRadius: 45,
  },
  notificationright: {
    width: '65%',
    marginLeft: 8,
  },

  // =============Chat Modal ==================
  chatstatusmain: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 55,
  },
  chatstatus: {
    display: 'flex',
    flexDirection: 'row',
    padding: 3,
  },
  statusonline: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#2bd41c',
    alignSelf: 'flex-end',
    marginTop: -25,
  },
  statustext: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 8,
    // marginTop: 70,
    // position: 'absolute',
  },
  // for setting
  secondsetingtext: {
    marginRight: 140,
  },
  //voice sound========
  voicesoung: {
    position: 'absolute',
    marginLeft: 60,
    marginTop: 25,
    color: 'black',
  },
  miccolor: {
    color: 'green',
  },
});
