import { View, Text } from 'react-native'
import React from 'react';
import Main from '../screens/Main';
import Recent from '../screens/Recent';
import Video from '../screens/Video';
import Live from '../screens/Live';
import Chat from '../screens/Chat';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TopTabnav = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Recent" component={Recent}
    
    />
    <Tab.Screen name="Video" component={Video} />
    <Tab.Screen name="Live" component={Live} />
    <Tab.Screen name="Chat" component={Chat} />
    
   
  </Tab.Navigator>
  )
}

export default TopTabnav