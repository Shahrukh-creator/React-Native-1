import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthUser from '../AuthUser';


const UserStack = createNativeStackNavigator();

export default function AuthUserStack() {
  // Stack Navigator for Sign In and Sign up Screen
  return (
    <UserStack.Navigator screenOptions = {{headerShown:false}} initialRouteName="AuthUser">
      <UserStack.Screen
        name="AuthUser"
        component={AuthUser}
      />
    </UserStack.Navigator>
  );
}
