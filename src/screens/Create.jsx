import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons/';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome/';
import Entypo from 'react-native-vector-icons/dist/Entypo/';
import DocumentPicker from 'react-native-document-picker';

const Create = () => {
  // document select
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick();
    } catch (error) {
      if (DocumentPicker.isCancel(e)) {
        console.log(e);
      }
    }
  };
  // for tetmodal
  const [textModal, setTextModal] = useState(false);

  return (
    <View>
      <View style={styles.datacontainer}>
        <View style={styles.textinputbox}>
          <TouchableOpacity
            onPress={() => {
              setTextModal(true);
            }}>
            <EvilIcons name="pencil" style={styles.pencil} />
            <Text style={styles.textdata}>Text</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textinputbox}>
          <TouchableOpacity onPress={selectDoc}>
            <FontAwesome name="folder-open" style={styles.pencil} />
            <Text style={styles.textdata}>File</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textinputbox}>
          <TouchableOpacity>
            <Entypo name="camera" style={styles.pencil} />
            <Text style={styles.textdata}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={textModal}
        onRequestClose={() => {
          setTextModal(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.tetmodalmain}>
          <View style={styles.textmodalnav}>
            <Text style={{fontSize: 20, color: 'black'}}>Write somthing</Text>
            <TouchableOpacity
              onPress={() => {
                setTextModal(false);
              }}>
              <Entypo name="cross" style={{fontSize: 28, color: 'black'}} />
            </TouchableOpacity>
          </View>
          <TextInput placeholder="" />
          <TextInput placeholder="" />
          <TextInput placeholder="" />
        </View>
      </Modal>
      <TouchableOpacity>
        <View style={styles.postmain}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Post
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  textinputbox: {
    height: 100,
    width: 100,
    backgroundColor: '#f59a45',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  pencil: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  textdata: {
    fontSize: 20,
    color: 'black',
  },
  datacontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  //text modal start ==============
  tetmodalmain: {
    height: '40%',
    width: '90%',
    backgroundColor: '#d6d4d2',
    marginTop: 190,
    alignSelf: 'center',

    borderWidth: 2,
    borderRadius: 10,
  },
  textmodalnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  postmain: {
    padding: 20,
    backgroundColor: '#ad5603',
    alignItems: 'center',
    borderRadius: 30,
    margin: 20,
    marginTop: 400,
  },
});
