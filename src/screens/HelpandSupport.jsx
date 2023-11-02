import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons/';

const HelpandSupport = () => {
  return (
    <View>
      <View style={styles.helpmain}>
        <Text style={styles.helptext}>Hello, How we can help you?..</Text>
        <View style={styles.searchmain}>
          <TextInput
            placeholder="      Ask to me.."
            style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
          />
          <Ionicons name="search" style={styles.searchicon} />
        </View>
        <Text
          style={{fontSize: 20, marginLeft: 20, margin: 10, color: 'red'}}>
          Quick Links
        </Text>

        <View style={styles.linkcontainer}>
          <TouchableOpacity>
            <View style={styles.linksacces}>
              <MaterialIcons
                name="security-update-good"
                style={styles.linkicons}
              />
              <Text style={styles.linktext}>Account Update</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.linksacces}>
              <MaterialIcons name="install-desktop" style={styles.linkicons} />
              <Text style={styles.linktext}>Install & Activate</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.linkcontainer, styles.secondcontainerlink]}>
          <TouchableOpacity>
            <View style={styles.linksacces}>
              <MaterialIcons name="add-to-queue" style={styles.linkicons} />
              <Text style={styles.linktext}>Add more Devices</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.linksacces}>
              <Ionicons name="logo-youtube" style={styles.linkicons} />
              <Text style={styles.linktext}>Video Tutorials</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.contacttext}>Contact Support</Text>
        <View style={styles.chatwithuscontainer}>
          <TouchableOpacity>
          <View style={styles.submitutton}>
            <Text style={styles.textofsubmit}>SUBMIT A REQUEST</Text>
          </View>
          </TouchableOpacity>
         <TouchableOpacity>
         <View style={styles.submitutton}>
            <Text style={styles.textofsubmit}>CHAT WITH US       </Text>
          </View>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HelpandSupport;

const styles = StyleSheet.create({
  helpmain: {
    height: '97%',
    width: '100%',
    backgroundColor: '#dedddc',
  },
  helptext: {
    fontSize: 20,
    color: '#fc8814',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    margin: 10,
  },
  searchmain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '8%',
    backgroundColor: '#f78f28',
    borderRadius: 50,
    textAlign: 'center',
  },
  searchicon: {
    marginLeft: 128,
    fontSize: 28,
    color: 'black',
  },
  linkcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  secondcontainerlink: {
    marginTop: -145,
  },
  linksacces: {
    backgroundColor: '#ad5905',
    height: '35%',
    width: 160,
    borderRadius: 20,
    padding: 20,
  },
  linktext: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkicons: {
    fontSize: 28,
    color: 'white',
    marginTop: -10,
    textAlign: 'center',
  },
  contacttext: {
    marginTop: -150,
    textAlign: 'center',
    fontSize: 22,
    color: '#fc8814',
  },
  chatwithuscontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitutton: {
    padding: 18,
    backgroundColor: '#ad5905',
    borderRadius: 30,
    marginTop:20
  },
  textofsubmit: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
