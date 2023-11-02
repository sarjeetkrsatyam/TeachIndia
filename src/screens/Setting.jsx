import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import {Switch} from 'react-native-switch';
import SwitchToggle from 'react-native-switch-toggle';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons/';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons/';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [night, setNight] = useState(true);
  const [sleep, setSleep] = useState(true);
  const [rotate, SetRotate] = useState(true);
  const [screen, setScreen] = useState(true);
  const [text, setText] = useState('Press the switch!');

  // notification toggle
  const toggleSwitch = () => {
    if (isEnabled) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    setIsEnabled(previousState => !previousState);
  };
  // night toggle
  const toggle2Switch = () => {
    if (isEnabled) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    setNight(previousState => !previousState);
  };
  // sleep toggle
  const toggle3Switch = () => {
    if (sleep) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    setSleep(previousState => !previousState);
  };
  // night toggle
  const toggle4Switch = () => {
    if (rotate) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    SetRotate(previousState => !previousState);
  };
  // night toggle
  const toggle5Switch = () => {
    if (screen) {
      setText('Inactive');
    } else {
      setText('Active');
    }
    setScreen(previousState => !previousState);
  };

  return (
    <View>
      <View style={styles.settingcontainer}>
        <View>
          <View style={styles.bodymain}>
            <Ionicons name="notifications" style={styles.icons} />
            <Text style={styles.textmain}> Notifications</Text>
            <Switch
              trackColor={{false: 'gray', true: 'tomato'}}
              thumbColor={isEnabled ? 'tomato' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <Ionicons name="cloudy-night" style={styles.icons} />
            <Text style={styles.textmain}> Night Light</Text>
            <Switch
              trackColor={{false: 'gray', true: 'tomato'}}
              thumbColor={night ? 'tomato' : '#f4f3f4'}
              onValueChange={toggle2Switch}
              value={night}
            />
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons name="power-sleep" style={styles.icons} />
            <Text style={styles.textmain}> Sleep Mode</Text>
            <Switch
              trackColor={{false: 'gray', true: 'tomato'}}
              thumbColor={sleep ? 'tomato' : '#f4f3f4'}
              onValueChange={toggle3Switch}
              value={sleep}
            />
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons
              name="rotate-3d-variant"
              style={styles.icons}
            />
            <Text style={styles.textmain}> Auto-rotate screen</Text>
            <Switch
              trackColor={{false: 'gray', true: 'tomato'}}
              thumbColor={rotate ? 'tomato' : '#f4f3f4'}
              onValueChange={toggle4Switch}
              value={rotate}
            />
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialIcons name="data-saver-off" style={styles.icons} />
            <Text style={styles.textmain}> Screen saver</Text>
            <Switch
              trackColor={{false: 'gray', true: 'tomato'}}
              thumbColor={screen ? 'tomato' : '#f4f3f4'}
              onValueChange={toggle5Switch}
              value={screen}
            />
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons name="format-font" style={styles.icons} />
            <Text style={styles.textmain}> Font size</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-double-right"
                style={styles.iconsss}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              style={styles.icons}
            />
            <Text style={styles.textmain}> Brightness lebel </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 16}}>92%</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              style={styles.icons}
            />
            <Text style={styles.textmain}> Theme</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-double-right"
                style={styles.iconsss}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons name="brightness-6" style={styles.icons} />
            <Text style={styles.textmain}> Bright mode</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-double-right"
                style={styles.iconsss}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.bodymain}>
            <MaterialCommunityIcons name="update" style={styles.icons} />
            <Text style={styles.textmain}>Update & Security</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="chevron-double-right"
                style={styles.iconsss}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.savechange}>
            <Text style={styles.savetext}>Save change</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  settingcontainer: {
    width: '100%',
    height: '96%',
    backgroundColor: 'white',
  },
  bodymain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  textmain: {
    fontSize: 20,
    color: 'black',
    position: 'relative',
    marginLeft: 35,
  },
  icons: {
    fontSize: 28,
    position: 'absolute',
    color: 'black',
  },
  iconsss: {
    fontSize: 28,
    color: 'black',
  },
  savechange: {
    alignItems: 'center',
    margin: 10,
    padding: 15,
    backgroundColor: '#85420f',
    borderRadius: 30,
  },
  savetext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
