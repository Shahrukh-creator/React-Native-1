import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';

const profileStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
      <profileStack.Navigator initialRouteName="ProfileScreen" 
      screenOptions={{
      headerShown: true

  }}>
        {/* <profileStack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <profileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <profileStack.Screen name="ProfileScreen1" component={ProfileScreen1} />

      </profileStack.Navigator>
  );
}
