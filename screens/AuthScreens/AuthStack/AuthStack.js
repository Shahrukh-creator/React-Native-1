import React, { useEffect, useState } from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
// import AuthUser from '../AuthUser';
import AuthUserStack from '../AuthUserStack/AuthUserStack';

import auth, {firebase} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default function Auth({navigation}) {


  // Stack Navigator for Sign In and Sign up Screen
  // const[isSignedIn, setisSignedIn] = useState(true);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user=>{
  //     if(user)
  //     {
  //       setisSignedIn(true);
  //     }
  //     {
  //       setisSignedIn(false);
  //     }
  //   })
  // }, [input])
  
  return (
    <Stack.Navigator screenOptions = {{headerShown:false}} initialRouteName="SignIn">
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
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
}
