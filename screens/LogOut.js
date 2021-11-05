import * as React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';

function LogOut({navigation}) {

  const logOut = () => {
    let userTemp = firebase.auth().currentUser;
                 if(userTemp)
                {
                 auth()
                   .signOut()
                 .then(() => {
                     console.log('User signed out!');
                      navigation.navigate('SignIn');
                                })
                }else
                 {
                    console.log('User Not signed In!');
                 }
  }
  
  return (
    <View >
    {logOut()}

      {/* <Text style={styles.textSize}>Log Out Screen</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={logOut}>
        <Text style={styles.buttonText}>Log Out</Text>

      </TouchableOpacity> */}
    </View>
  );
}
export default LogOut;


const styles = StyleSheet.create({
  textSize: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});