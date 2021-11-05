import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

class LogOut extends React.Component {

  logOut = () => {
    let userTemp = firebase.auth().currentUser;
                 if(userTemp)
                {
                 auth()
                   .signOut()
                 .then(() => {
                     console.log('User signed out!');
                      this.props.navigation.navigate('SignIn');
                                })
                }else
                 {
                    console.log('User Not signed In!');
                 }
  }
 componentDidMount()
 {
   this.logOut();
 }
  render()
  {
  return (
    <View>
        
    </View>
  );
  }
}
export default LogOut;
