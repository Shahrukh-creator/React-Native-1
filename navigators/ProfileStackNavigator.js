import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileScreen1 from '../screens/ProfileScreen1';
import ReduxScreen from '../screens/ReduxScreens/ReduxScreen';

const profileStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
      <profileStack.Navigator initialRouteName="ProfileScreen" 
     screenOptions={{
            headerShown:true,
          headerTitleAlign: 'center',
          title: 'ProfileScreen', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <profileStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <profileStack.Screen name="ProfileScreen1" component={ProfileScreen1} />
        <profileStack.Screen name="ReduxScreen" component={ReduxScreen} />

      </profileStack.Navigator>
  );
}
