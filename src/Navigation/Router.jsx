import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={() => ({
            headerShown: false,
            
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          //   options={() => ({
          //     headerShown: false,
          //     header: null,
          //     headerMode: 'none',
          //   })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
