import React, { Component }  from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';

const profileStack = createNativeStackNavigator();

export default class ProfileStackNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <profileStack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
          headerShown: true,
        }}>
        <profileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <profileStack.Screen name="ProfileScreen1" component={ProfileScreen1} />
      </profileStack.Navigator>
    );
  }
}
