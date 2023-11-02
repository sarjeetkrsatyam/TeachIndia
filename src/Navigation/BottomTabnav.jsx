import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Create from '../screens/Create';
import Golive from '../screens/Golive';
import Institute from '../screens/Institute';
import RegisterScreen from '../screens/RegisterScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons/';
import AntDesign from 'react-native-vector-icons/dist/AntDesign/';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Bottom = createBottomTabNavigator();

const BottomTabnav = () => {
  return (
    <Bottom.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name == 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name == 'Create') {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          } else if (route.name == 'Golive') {
            iconName = focused ? 'wifi-sharp' : 'wifi-outline';
          } else if (route.name == 'Institute') {
            iconName = focused ? 'business' : 'business-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fa8f0c',
        inactiveTintColor: 'blue',
        showLabel: false,
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />

      <Bottom.Screen
        name="Search"
        component={Search}
        options={() => ({
          headerShown: false,
        })}
      />

      <Bottom.Screen
        name="Create"
        component={Create}
        options={() => ({
          headerShown: false,
        })}
      />
      <Bottom.Screen
        name="Golive"
        component={Golive}
        options={() => ({
          headerShown: false,
        })}
      />
      <Bottom.Screen
        name="Institute"
        component={Institute}
        options={() => ({
          headerShown: false,
        })}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabnav;
