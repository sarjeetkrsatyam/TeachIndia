import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo/';
import AsTeacher from './AsTeacher';
import AsStudent from './AsStudent';

const UpdateProfile = () => {
  const [teacher, setTeacher] = useState(false);
  const [student, setStudent] = useState(false);
  return (
    <View>
      {/* as a teacher modal */}
      <Modal
        visible={teacher}
        onRequestClose={() => {
          setTeacher(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.teachernav}>
          <Text style={styles.nametext}>As a Teacher</Text>
          <TouchableOpacity
            onPress={() => {
              setTeacher(false);
            }}>
            <Entypo name="cross" style={styles.teachernavtext} />
          </TouchableOpacity>
        </View>
        <AsTeacher />
      </Modal>
      {/* as a student modal */}
      <Modal
        visible={student}
        onRequestClose={() => {
          setStudent(false);
        }}
        transparent={true}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <View style={styles.teachernav}>
          <Text style={styles.nametext}>As a Student</Text>
          <TouchableOpacity
            onPress={() => {
              setStudent(false);
            }}>
            <Entypo name="cross" style={styles.teachernavtext} />
          </TouchableOpacity>
        </View>
        <AsStudent />
      </Modal>

      <View style={styles.updatecontainer}>
        <View style={styles.asA}>
          <TouchableOpacity
            onPress={() => {
              setTeacher(true);
            }}>
            <Text style={styles.asabutton}>As a Teacher</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setStudent(true);
            }}>
            <Text style={styles.asabutton}>As a Student</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  updatecontainer: {
    height: '96.5%',
    width: '100%',
    backgroundColor: '#d1d1d1',
  },
  asA: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 12,
  },
  //as a teacher nav
  teachernav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d9d7d4',
    padding: 10,
  },
  teachernavtext: {
    fontSize: 30,
    color: '#f26c05',
    fontWeight: 'bold',
  },
  nametext: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 80,
  },
  asabutton: {
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 20,
    backgroundColor: '#b35f0b',
    color: 'white',
  },
});
