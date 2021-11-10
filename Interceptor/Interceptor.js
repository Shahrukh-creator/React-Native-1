import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert, StyleSheet} from 'react-native';
import Loader from 'react-native-modal-loader';
import axios from 'axios';

import strings from '../localization/LocalizedStrings';

const InterceptorScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateUserAccount = async (username, password) => {
    console.log(username, password);
    console.log("1");
    axios
      .post('/auth/register', {
        username: username,
        first_name: 'srk123',
        last_name: 'srk@1234',
        email: `${username}@example.com`,
        password: password,
      })
      .then(response => {
        console.log('Then', response);
        onChangeUsername('');
        onChangePassword('');
        navigation.navigate('InterceptorLogin');
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
          placeholder= "Username"
          onChangeText={text => onChangeUsername(text)}
          value={username}
        style={styles.input}
      />


      <TextInput
        onChangeText={text => onChangePassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('InterceptorLogin');
        }}>
         <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        mode="contained"
       
        onPress={() => {
          CreateUserAccount(username, password);
        }}>
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default InterceptorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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