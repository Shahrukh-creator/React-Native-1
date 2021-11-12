import React, { useState, useEffect } from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert, StyleSheet} from 'react-native';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../localization/LocalizedStrings';
import {setLng, getLng} from '../helper/changeLng';


const InterceptorLogin = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

useEffect(() => {
    selectedLng();
  }, []);
  
  
  const selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
    console.log('selected Language data==>>>', lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  };

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const LogInUser = async (username, password) => {
    console.log(username, password); 

    await axios
      .post('/auth/login', {
        username: username,
        password: password,
      })
      .then(response => {
        console.log('Then', response.data.token);
        onChangeUsername('');
        onChangePassword('');
        Alert.alert('Successfully logged IN, Auth Token', response.data.token);
        navigation.navigate('InterceptorContact', {
          token: response.data.token,
        });
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

   


  return (
    <View style={styles.container}>
      <Loader loading={isLoading} color="#ff66be" />
     

      <TextInput
          placeholder= {`${strings.USERNAME}`}
          onChangeText={text => onChangeUsername(text)}
          value={username}
        style={styles.input}
      />


      <TextInput
        value={password}
        onChangeText={text => onChangePassword(text)}
        placeholder={`${strings.PASSWORD}`}
        secureTextEntry={true}
        style={styles.input}
      />



      <TouchableOpacity
       style={styles.button}
        onPress={() => {
          navigation.navigate('Interceptor');
        }}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>
           {strings.SIGN_UP}
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonSpace}></View>

      <TouchableOpacity
        style={styles.button}
        mode="contained"
        // disabled={password === '' || username === ''}
        activeOpacity={0.5}
        onPress={() => {
          LogInUser(username, password);
        }}>
        <Text
          style={styles.buttonText}>
          {strings.SIGN_IN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorLogin;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonSpace: {
    marginBottom: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 120,
    height: 120,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'pink',
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
    borderRadius: 5,
    borderWidth: 2,
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