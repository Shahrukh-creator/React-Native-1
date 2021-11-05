import React , {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthUser from '../AuthUser';


const UserStack = createNativeStackNavigator();

export default class AuthUserStack extends React.Component {
  // Stack Navigator for Sign In and Sign up Screen
  render()
  {
  return (
    <UserStack.Navigator screenOptions = {{headerShown:false}} initialRouteName="AuthUser">
      <UserStack.Screen
        name="AuthUser"
        component={AuthUser}
      />
    </UserStack.Navigator>
  );
  }
}
