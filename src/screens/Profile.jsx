import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import profile1 from '../Data/images/profile1.jpeg';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import UpdateProfile from './UpdateProfile';
import HelpandSupport from './HelpandSupport';
import TermsCondition from './TermsCondition';
import {useNavigation} from '@react-navigation/native';
import Setting from './Setting';

const Profile = () => {
  // usenavigation
  const navigation = useNavigation();

  const [setting, setSetting] = useState(false);
  const [update, setUpdate] = useState(false);
  const [help, setHelp] = useState(false);
  const [terms, setTerms] = useState(false);
  return (
    <View>
      {/* =======Setting page============ */}
      <Modal
        visible={setting}
        onRequestClose={() => {
          setSetting(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.noficationnav}>
         
          <TouchableOpacity
            onPress={() => {
              setSetting(false);
            }}>
            <Ionicons name="arrow-back-outline" style={styles.backicon} />
          </TouchableOpacity>
          <Text style={[styles.navtext, styles.secondsetingtext]}>Settings</Text>
        </View>
        <Setting/>
      </Modal>

      {/* //=====Update profile modal */}
      <Modal
        visible={update}
        onRequestClose={() => {
          setUpdate(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        {/* //nav side ====== */}
        <View style={styles.noficationnav}>
          <TouchableOpacity
            onPress={() => {
              setUpdate(false);
            }}>
            <Ionicons name="arrow-back-outline" style={styles.backicon} />
          </TouchableOpacity>
          <Text style={styles.navtext}>Update Your Profile</Text>
          <TouchableOpacity
            onPress={() => {
              setSetting(true);
            }}>
            <Ionicons name="settings-outline" style={styles.backicon} />
          </TouchableOpacity>
        </View>
        <UpdateProfile />
      </Modal>

      {/* =====Help and support modal======== */}
      <Modal
        visible={help}
        onRequestClose={() => {
          setHelp(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.noficationnav}>
          <TouchableOpacity
            onPress={() => {
              setHelp(false);
            }}>
            <Ionicons name="arrow-back-outline" style={styles.backicon} />
          </TouchableOpacity>
          <Text style={styles.navtext}>Help & Support</Text>
          <TouchableOpacity
            onPress={() => {
              setSetting(true);
            }}>
            <Ionicons name="settings-outline" style={styles.backicon} />
          </TouchableOpacity>
        </View>
        <HelpandSupport />
      </Modal>
      {/* =======Terms and condition========= */}

      <Modal
        visible={terms}
        onRequestClose={() => {
          setTerms(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.noficationnav}>
          <TouchableOpacity
            onPress={() => {
              setTerms(false);
            }}>
            <Ionicons name="arrow-back-outline" style={styles.backicon} />
          </TouchableOpacity>
          <Text style={styles.navtext}>Terms & Condition</Text>
          <TouchableOpacity
            onPress={() => {
              setSetting(true)
            }}>
            <Ionicons name="settings-outline" style={styles.backicon} />
          </TouchableOpacity>
        </View>
        <TermsCondition />
      </Modal>

      <View style={styles.profilemain}>
        <View style={styles.profilewidth}>
          <Image source={profile1} style={styles.profileimg} />
        </View>
        <View>
          <View style={styles.profiletextmain}>
            <Text style={styles.texthead}>Name :- </Text>
            <Text style={styles.textdata}>Sarjeet Kumar</Text>
          </View>
          <View style={styles.profiletextmain}>
            <Text style={styles.texthead}>Qualification :- </Text>
            <Text style={styles.textdata}>Graduate (B-Tech)</Text>
          </View>
          <View style={styles.profiletextmain}>
            <Text style={styles.texthead}>Experiance :- </Text>
            <Text style={styles.textdata}>2.5 years</Text>
          </View>
          <View style={styles.profiletextmain}>
            <Text style={styles.texthead}>Specialist :- </Text>
            <Text style={styles.textdata}>Math, English, Computer </Text>
          </View>
          <View style={styles.profiletextmain}>
            <Text style={styles.texthead}>
              {' '}
              <Ionicons
                name="location-sharp"
                style={[styles.texthead, styles.locationsize]}
              />{' '}
            </Text>
            <Text style={styles.textdata}>
              Bhojaur masaurhi patna Delhi (804452)
            </Text>
          </View>
        </View>

        <View style={styles.followermain}>
          <TouchableOpacity>
            <View>
              <Text style={styles.texthead}>Followers</Text>
              <Text style={styles.textdata}>2.37K</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={styles.texthead}>Following</Text>
              <Text style={styles.textdata}>129</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={styles.texthead}>Total Post</Text>
              <Text style={styles.textdata}>207</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setUpdate(true);
          }}>
          <View style={styles.buttonmain}>
            <Text style={styles.bottomtext}>Update your Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setHelp(true);
          }}>
          <View style={styles.buttonmain}>
            <Text style={styles.bottomtext}>Help and Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTerms(true);
          }}>
          <View style={styles.buttonmain}>
            <Text style={styles.bottomtext}>Terms and condition</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <View style={styles.buttonmain}>
            <Text style={styles.bottomtext}>LOGOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilemain: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f7eee6',
  },
  profilewidth: {
    height: '20%',
    width: '40%',
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  profileimg: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  profiletextmain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 10,
  },
  texthead: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d6380d',
  },
  textdata: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  locationsize: {
    fontSize: 25,
  },
  followermain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonmain: {
    width: '90%',
    padding: 10,
    backgroundColor: '#b85f0d',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 30,
  },
  bottomtext: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  //update profile =======
  noficationnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
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
  // for setting
  secondsetingtext:{
    marginRight:140
  }
});
