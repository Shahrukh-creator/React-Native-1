import React , {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import AuthUserStack from '../AuthUserStack/AuthUserStack';

const Stack = createNativeStackNavigator();

export default class Auth extends React.Component {
  // Stack Navigator for Sign In and Sign up Screen
  render()
  {
    return (
    <Stack.Navigator screenOptions = {{headerShown:false}}  initialRouteName="AuthUserStack">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitleAlign: 'center',
          title: 'SignIn', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc',
            alignItems: 'center',
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleAlign: 'center',
          title: 'SignUp', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="AuthUserStack"
        component={AuthUserStack}
        options={{
          headerShown:false,
          headerTitleAlign: 'center',
          title: 'AuthUserStack', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
  }
}
