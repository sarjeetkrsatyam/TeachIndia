import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import status1 from '../Data/images/status1.jpeg';
import status2 from '../Data/images/status2.jpeg';
import status3 from '../Data/images/status3.jpeg';
import status4 from '../Data/images/status4.jpeg';

const ChatStatus = () => {
  const navigation = useNavigation();
  const [reply, setReply] = useState(false);
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([
    {
      content: status2,
      type: 'image',
      finish: 0,
    },
    {
      content: status1,
      type: 'image',
      finish: 0,
    },
    {
      content: status3,
      type: 'image',
      finish: 0,
    },
    {
      content: status4,
      type: 'image',
      finish: 0,
    },
  ]);

  const progress = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 9000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        next();
      }
    });
  };

  const next = () => {
    if (current != content.length - 1) {
      let tempData = content;
      tempData[current].finish = 1;
      setContent(tempData);
      setCurrent(current + 1);
      progress.setValue(0);
    } else {
      close();
    }
  };

  const previous = () => {
    if (current - 1 >= 0) {
      let tempData = content;
      tempData[current].finish = 1;
      setContent(tempData);
      progress.setValue(0);
      setCurrent(current - 1);
    } else {
      close();
    }
  };

  const close = () => {
    progress.setValue(0);
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.statusmain}>
        <Image
          source={content[current].content}
          style={styles.statusimg}
          onLoadEnd={() => {
            progress.setValue(0);
            start();
          }}
        />
      </View>
      <View style={styles.clickstatus}>
        <TouchableWithoutFeedback
          onPress={() => {
            // if (current > 0) {
            //   setCurrent(current - 1);
            // }
            previous();
          }}>
          <Text style={styles.clickstatusleft}></Text>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            // if (current != content.length - 1) {
            //   setCurrent(current + 1);
            // }
            next();
          }}>
          <Text style={styles.clickstatusright}></Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.statusline}>
        {content.map((item, index) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                height: 3,
                backgroundColor: '#f2f0eb',
                marginLeft: 10,
              }}>
              <Animated.View
                style={{
                  flex: current == index ? progress : content[index].finish,
                  height: 3,
                  backgroundColor: '#9e4608',
                }}></Animated.View>
            </View>
          );
        })}
      </View>

      <TouchableOpacity>
        <Ionicons name="chevron-up-sharp" style={styles.replyicon} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatStatus;

const styles = StyleSheet.create({
  statusmain: {
    height: '90.5%',
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  replyicon: {
    fontSize: 30,
    backgroundColor: '#e6e3df',
    marginTop: -11.5,
    textAlign: 'center',
    color: 'black',
    position: 'relative',
  },
  statusimg: {
    height: '100%',
    width: '100%',
    position: 'relative',
    resizeMode: 'cover',
  },
  statusline: {
    position: 'absolute',
    width: '100%',
    height: '1%',

    top: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  // statuslineview: {
  //   // position: 'absolute',
  //   // width: '70%',
  //   // height: '1%',
  //   // backgroundColor: '#de6316',
  //   // marginLeft: 10,
  //   flex: 1,
  //   height: 3,
  //   backgroundColor: '#f2f0eb',
  //   marginLeft: 10,
  // },
  // statusviewanimated: {
  //   flex: current == index ? progress : content[index].finish,
  //   height: 3,
  //   backgroundColor: 'red',
  //   // marginLeft: 10,
  // },
  clickstatus: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    position: 'absolute',
  },
  clickstatusleft: {
    position: 'absolute',

    height: 533,
    width: 183,
  },
  clickstatusright: {
    position: 'absolute',

    marginLeft: 210,
    height: 533,
    width: 183,
  },
});
