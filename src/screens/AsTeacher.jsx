import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import DocumentPicker from 'react-native-document-picker';
import DropDownPicker from 'react-native-dropdown-picker';

import profile from '../Data/images/profile1.jpeg';

const AsTeacher = () => {
  //dropdown picker
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const items = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Transgender', value: 'Transgender'},
  ];

  // documents picker
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
    <View>
      <View style={styles.asteachermain}>
        <View style={styles.profile}>
          <Image source={profile} style={styles.profileimg} />
          <TouchableOpacity onPress={selectDoc}>
            <Ionicons name="camera-outline" style={styles.camerachange} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.namemain}>
            <TextInput placeholder="Frst name" style={styles.nametext} />
            <TextInput placeholder="Middle name" style={styles.nametext} />
            <TextInput placeholder="Last name" style={styles.nametext} />
          </View>
          <TextInput placeholder="Enter your Email:-" style={styles.nametext} />
          <TextInput
            placeholder="Enter your Number:-"
            style={styles.nametext}
          />
          <TextInput
            placeholder="Enter your Institute Name:-"
            style={styles.nametext}
          />
          <TextInput
            placeholder="Enter your Experiance:-"
            style={styles.nametext}
          />
          <TextInput
            placeholder="Specialist in Subject:-"
            style={styles.nametext}
          />
          <TextInput
            placeholder="Enter your teaching Time:-"
            style={styles.nametext}
          />
          <TextInput
            placeholder="Enter your Location:-"
            style={styles.nametext}
          />
        </View>
        <View style={styles.namemain}>
          <TextInput placeholder="Age" style={[styles.nametext, styles.age]} />
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={val => setCurrentValue(val)}
            placeholder="Gender"
            style={styles.gender}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.savechange}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsTeacher;

const styles = StyleSheet.create({
  asteachermain: {
    width: '100%',
    height: '97%',
    backgroundColor: '#f7a307',
  },
  profile: {
    height: 90,
    width: 90,
    backgroundColor: 'red',
    borderRadius: 80,
    alignSelf: 'center',
    marginTop: 10,
    position: 'relative',
  },
  profileimg: {
    height: '100%',
    width: '100%',
    borderRadius: 80,
  },
  camerachange: {
    position: 'absolute',
    fontSize: 28,
    color: 'black',
    alignSelf: 'flex-end',
    marginTop: -30,
  },
  namemain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nametext: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#e6e4e1',
    fontSize: 16,
    borderRadius: 5,
    margin: 8,
    fontSize: 18,
    color: 'black',
  },
  savechange: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#b35f0b',
    borderRadius: 30,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 20,
    
  },
  gender: {
    width: 150,
    height: 10,
    alignSelf: 'flex-end',
    marginRight: 60,
    borderColor: '#e6e4e1',
    backgroundColor: '#e6e4e1',
  },
  age: {
    marginLeft: 60,
  },
});
