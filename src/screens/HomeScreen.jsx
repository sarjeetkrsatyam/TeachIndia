import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Data/colors/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Main from './Main';
import TopTabnav from '../Navigation/TopTabnav';
import BottomTabnav from '../Navigation/BottomTabnav';
import Post from './Post';

const HomeScreen = () => {

    const navigation = useNavigation();


    return (
        <>
        <Main />
         
          <BottomTabnav />
         
         

          
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({


})


