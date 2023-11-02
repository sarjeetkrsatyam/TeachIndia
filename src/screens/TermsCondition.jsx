import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const TermsCondition = () => {
  return (
    <ScrollView>
      <View style={styles.termsmain}>
        <Text style={styles.termstext}>Terms of use</Text>
        <Text style={styles.text} >
          A Terms and Conditions agreement acts as a legal contract between you
          (the company) and the user. It's where you maintain your rights to
          exclude users from your app in the event that they abuse your
          website/app, set out the rules for using your service and note other
          important details and disclaimers. Having a Terms and Conditions
          agreement is completely optional. No laws require you to have one. Not
          even the super-strict and wide-reaching General Data Protection
          Regulation (GDPR). Your Terms and Conditions agreement will be
          uniquely yours. While some clauses are standard and commonly seen in
          pretty much every Terms and Conditions agreement, it's up to you to
          set the rules and guidelines that the user must agree to. Terms and
          Conditions agreements are also known as Terms of Service or Terms of
          Use agreements. These terms are interchangeable, practically speaking.
          More rarely, it may be called something like an End User Services
          Agreement (EUSA). Check out our Terms and Conditions FAQ article for
          more helpful insight into these important agreements. You can use this
          agreement anywhere, regardless of what platform your business operates
          on:
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({
  termsmain: {
    width: '100%',
    height: '100%',
    backgroundColor: '#787777',
  },
  termstext: {
    fontSize: 28,
    marginTop:10,
    marginLeft:10,
    color: '#f79736',
    fontWeight:'bold'
  },
  text:{
    fontSize:20,
    color:'white',
    margin:10
  }
});
