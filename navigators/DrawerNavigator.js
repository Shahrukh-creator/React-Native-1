import * as React from 'react';
import {Button, View, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import Profile from '../screens/ProfileScreen';
import Home from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
// import ProfileScreen1 from '../screens/ProfileScreen1';
import ProfileScreen2 from '../screens/ProfileScreen2';
import ProfileScreen3 from '../screens/ProfileScreen3';

import LogOut from '../screens/LogOut'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home}    
      options={{
          headerTitleAlign: 'center',
          title: 'Home', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        />

        {/* ////Profile screens are deleted from drawer 
        ////beacuse inside drawer, stacks are not updating during fetching,
        ////only stack can update in stack.. */}

      {/* <Drawer.Screen name="Profile" component={Profile}  options={{
          headerTitleAlign: 'center',
          title: 'Profile', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>


<Drawer.Screen name="ProfileScreen1" component={ProfileScreen1}  options={{
          headerTitleAlign: 'center',
          title: 'ProfileScreen 1', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/> */}

        <Drawer.Screen name="ProfileScreen2" component={ProfileScreen2}  options={{
          headerTitleAlign: 'center',
          title: 'ProfileScreen 2', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
        <Drawer.Screen name="ProfileScreen3" component={ProfileScreen3}  options={{
          headerTitleAlign: 'center',
          title: 'ProfileScreen 3', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>


       <Drawer.Screen name="Contact" component={ContactScreen}  options={{
          headerTitleAlign: 'center',
          title: 'Contact', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>

        <Drawer.Screen name="LogOut" component={LogOut}  options={{
          headerTitleAlign: 'center',
          title: 'LogOut', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  

  logo: {
   width:'50%',
   height:'30%',
  },
  
});

