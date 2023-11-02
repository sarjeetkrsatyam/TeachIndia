import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome/';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';

// images
import inst1 from '../Data/images/inst1.jpeg';
import inst2 from '../Data/images/inst2.jpeg';
import inst3 from '../Data/images/inst3.jpeg';
import inst4 from '../Data/images/inst4.jpeg';
import inst5 from '../Data/images/inst5.jpeg';

const Institute = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.neartext}>Institute Nearest You!...</Text>
        {/* //1st institute */}
        <View style={styles.institutemain}>
          <FontAwesome name="institution" style={styles.insticon} />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '500',
                marginLeft: 10,
              }}>
              SMGK Primry school masaurhi patna
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons
                name="location"
                style={{fontSize: 20, marginLeft: 10, color: 'red'}}
              />
              <Text style={{marginLeft: 5}}>Masaurhi patna Bihar </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagemain}>
          <Image source={inst1} style={styles.imgdata} />
        </View>
        {/* 2nd institute========== */}
        <View style={styles.institutemain}>
          <FontAwesome name="institution" style={styles.insticon} />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '500',
                marginLeft: 10,
              }}>
              DDS Primry school kolthur chennai
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons
                name="location"
                style={{fontSize: 20, marginLeft: 10, color: 'red'}}
              />
              <Text style={{marginLeft: 5}}>Chennai tamilnadu india </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagemain}>
          <Image source={inst2} style={styles.imgdata} />
        </View>

        <View style={styles.institutemain}>
          <FontAwesome name="institution" style={styles.insticon} />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '500',
                marginLeft: 10,
              }}>
              SMP Primry school masaurhi patna
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons
                name="location"
                style={{fontSize: 20, marginLeft: 10, color: 'red'}}
              />
              <Text style={{marginLeft: 5}}>Bhojaur patna Bihar </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagemain}>
          <Image source={inst3} style={styles.imgdata} />
        </View>

        <View style={styles.institutemain}>
          <FontAwesome name="institution" style={styles.insticon} />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '500',
                marginLeft: 10,
              }}>
              PPP school masaurhi patna
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons
                name="location"
                style={{fontSize: 20, marginLeft: 10, color: 'red'}}
              />
              <Text style={{marginLeft: 5}}> Barni masaurhi patna Bihar </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagemain}>
          <Image source={inst4} style={styles.imgdata} />
        </View>

        <View style={styles.institutemain}>
          <FontAwesome name="institution" style={styles.insticon} />
          <View>
            <Text
              style={{
                fontSize: 17,
                color: 'black',
                fontWeight: '500',
                marginLeft: 10,
              }}>
              Gurunanak Primry school masaurhi patna
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Ionicons
                name="location"
                style={{fontSize: 20, marginLeft: 10, color: 'red'}}
              />
              <Text style={{marginLeft: 5}}>
                {' '}
                Sanghatpar Masaurhi patna Bihar{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imagemain}>
          <Image source={inst5} style={styles.imgdata} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Institute;

const styles = StyleSheet.create({
  neartext: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#f21307',
    fontWeight: 'bold',
  },
  institutemain: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  insticon: {
    fontSize: 35,
    color: 'black',
  },
  imagemain: {
    width: 380,
    height: 400,

    alignSelf: 'center',
  },
  imgdata: {
    height: '100%',
    width: '100%',
  },
});
