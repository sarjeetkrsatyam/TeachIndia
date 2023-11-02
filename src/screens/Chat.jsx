import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo/';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome/';

//images
import chtpro1 from '../Data/images/profile3.jpeg';
import chtpro2 from '../Data/images/profile4.jpeg';
import chtpro3 from '../Data/images/profile5.jpeg';
import Chating from './Chating';
import ChatStatus from './ChatStatus';

const Chat = () => {
  const [chating, setChating] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <View>
      {/* ========status modal start=========== */}
      <Modal
        visible={status}
        onRequestClose={() => {
          setStatus(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.chattingmain}>
          <View style={styles.chatingnv}>
            <View style={styles.chatnavleft}>
              <View style={styles.statusnavicon}>
                <TouchableOpacity>
                  <FontAwesome name="user-circle-o" style={styles.chatingimg} />
                </TouchableOpacity>
                <View style={{marginLeft:10}}>
                <Text style={{color: 'black', fontWeight:'bold'}}>Swati sharma</Text>
                <Text >53 minutes ago</Text>

                </View>
                
              </View>
             
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setStatus(false);
                }}>
                <Ionicons name="close" style={styles.chatcrossicon} />
              </TouchableOpacity>
            </View>
          </View>

          <ChatStatus />
        </View>
      </Modal>

      {/* ========status modal end=========== */}

      {/*=========== chat box modal================ */}
      <Modal
        visible={chating}
        onRequestClose={() => {
          setChating(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.chattingmain}>
          <View style={styles.chatingnv}>
            <View style={styles.chatnavleft}>
              <TouchableOpacity
                onPress={() => {
                  setChating(false);
                }}>
                <Ionicons
                  name="arrow-back-outline"
                  style={styles.chatcrossicon}
                />
              </TouchableOpacity>

              <View>
                <TouchableOpacity>
                  <FontAwesome name="user-circle-o" style={styles.chatingimg} />
                </TouchableOpacity>
              </View>
              <Text style={{color: 'black'}}>Swati sharma</Text>
            </View>
            <View style={styles.chatnavright}>
              <TouchableOpacity>
                <Ionicons name="call" style={styles.naviconleft} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="videocam" style={styles.naviconleft} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="alert-circle-sharp"
                  style={styles.naviconleft}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Chating />
        </View>
      </Modal>
      {/* ==========chat box modal end=================== */}

      <ScrollView>
        {/* chat 1st start */}

        <View style={styles.chatContainer}>
          <View style={styles.chatmain}>
            <TouchableOpacity
              onPress={() => {
                setStatus(true);
              }}>
              <View style={[styles.chatprofile]}>
                <Image source={chtpro1} style={styles.chatproimg} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setChating(true);
              }}>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sawati sharma
                </Text>
                <Text>Hey swati how are you? call me! . 23 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* chat 1st end */}

        {/* chat 1st start */}

        <View style={styles.chatContainer}>
          <View style={styles.chatmain}>
            <View style={[styles.chatprofile, styles.chatprofile2]}>
              <Image source={chtpro2} style={styles.chatproimg} />
            </View>
            <TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sawati sharma
                </Text>
                <Text>Hey swati how are you? call me! . 23 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* chat 1st end */}
        {/* chat 1st start */}

        <View style={styles.chatContainer}>
          <View style={styles.chatmain}>
            <TouchableOpacity>
              <View style={[styles.chatprofile]}>
                <Image source={chtpro3} style={styles.chatproimg} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setChating(true);
              }}>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sawati sharma
                </Text>
                <Text>Hey swati how are you? call me! . 23 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* chat 1st end */}
        {/* chat 1st start */}

        <View style={styles.chatContainer}>
          <View style={styles.chatmain}>
            <TouchableOpacity>
              <View style={[styles.chatprofile]}>
                <Image source={chtpro2} style={styles.chatproimg} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sawati sharma
                </Text>
                <Text>Hey swati how are you? call me! . 23 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* chat 1st end */}
        {/* chat 1st start */}

        <View style={styles.chatContainer}>
          <View style={styles.chatmain}>
            <View style={[styles.chatprofile, styles.chatprofile2]}>
              <Image source={chtpro2} style={styles.chatproimg} />
            </View>
            <TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  Sawati sharma
                </Text>
                <Text>Hey swati how are you? call me! . 23 Aug</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* chat 1st end */}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'white',
    marginTop: 5,
  },
  chatmain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  chatprofile: {
    height: 70,
    width: 70,
    backgroundColor: '#18781d',
    borderRadius: 40,
    padding: 3,
  },
  chatprofile2: {
    backgroundColor: 'white',
  },
  chatproimg: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  // =========chating page=====
  chattingmain: {
    width: '100%',
    height: '85%',
    backgroundColor: 'pink',
    marginTop: '18%',
  },
  chatingnv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
  },
  chatcrossicon: {
    fontSize: 30,
    color: '#174396',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  chatnavleft: {
    width: '48%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilechating: {},
  chatingimg: {
    // height:'100%',
    // width:'100%',
    // borderRadius:50,
    fontSize: 30,
    color: '#174396',
  },
  chatnavright: {
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  naviconleft: {
    fontSize: 26,
    color: '#174396',
  },

  // status ==========
  statusnavicon:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',

  }
});
