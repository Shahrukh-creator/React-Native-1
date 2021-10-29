import React, {Component} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

export default function SignUp({navigation}) {
  const [firstname, setfirstname] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');

  const handleSubmitPress = () => {


    if (!email || !password || !firstname || !lastname) {

        alert('Details are Incomplete');
    } else
    {
        setfirstname('');
        setlastname('');
        setemail('');
        setpassword('');
        navigation.navigate('SignIn');
    }
  };

  //   onLogin = () => {

  //     Alert.alert('React Native Credentials: ' + firstname + ' '
  //      + ' ' + lastname + ' ' + email + ' ' + password);
  //   }

  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/img2.png')} />
      <TextInput
        value={firstname}
        onChangeText={text => setfirstname(text)}
        placeholder={'Firstname'}
        style={styles.input}
      />
      <TextInput
        value={lastname}
        onChangeText={text => setlastname(text)}
        placeholder={'Lastname'}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={text => setemail(text)}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={text => setpassword(text)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('SignIn')}>
        Already Registered ?
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 30,
  },
  logo: {
    width: '50%',
    height: '30%',
  },
  registerTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
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
