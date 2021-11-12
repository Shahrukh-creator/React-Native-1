import React, {Component} from 'react';
import {Button, View, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import LogOut from '../screens/LogOut'
import ProfileScreen2 from '../screens/ProfileScreen2';
import ProfileScreen3 from '../screens/ProfileScreen3';
import auth, {firebase} from '@react-native-firebase/auth';
import TabNavigator from './TabNavigator';
import CustomSidebarMenu from '../screens/CustomSidebarMenu/CustomSidebar';
import CallNumber from '../screens/CallNumberScreens/CallNumber';
import Camera from '../screens/CameraScreens/Camera';
import InterceptorNavigator from './InterceptorNavigator';
import strings from '../localization/LocalizedStrings';
import {setLng, getLng} from '../helper/changeLng';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
    
    

    
  componentDidMount(){
    this.selectedLng();
  }

   selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
    console.log('selected Language data==>>>', lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  };

    
    render()
    {
  return (
    <Drawer.Navigator     
     initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />} >

      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerTitleAlign: 'center',
          title: `${strings.HOME}`, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          // headerRight: () => (
          //   <Button
          //     onPress={() =>
          //        firebase.auth()
          //          .signOut()
          //        .then(() => {
          //            console.log('User signed out!');
          //             navigation.navigate('AuthStack');
          //                       })
          //             }
          //     title="LogOut"
          //   />
          // ),
        }}
      />
     
        <Drawer.Screen name="ProfileScreen2" component={ProfileScreen2}  options={{
          headerTitleAlign: 'center',
          title: `${strings.PROFILE_SCREEN_2}`, //Set Header Title
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
          title: `${strings.PROFILE_SCREEN_3}`, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>

        <Drawer.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTitleAlign: 'center',
          title: `${strings.CAMERA}`, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

       <Drawer.Screen name="Contact" component={CallNumber}  options={{
          headerTitleAlign: 'center',
          title:`${strings.CONTACT}`, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}/>

         <Drawer.Screen
        name="Interceptor"
        component={InterceptorNavigator}
        options={{
          headerTitleAlign: 'center',
          title: `${strings.INTERCEPTOR}`, //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />


        <Drawer.Screen name="LogOut" component={LogOut}  options={{
          headerShown:false,
          headerTitleAlign: 'center',
          title: `${strings.LOGOUT}`, //Set Header Title
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
}

const styles = StyleSheet.create({
  
  logo: {
   width:'50%',
   height:'30%',
  },
  
});

