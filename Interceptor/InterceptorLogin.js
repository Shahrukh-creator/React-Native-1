import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert, StyleSheet} from 'react-native';
import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../localization/LocalizedStrings';

const InterceptorLogin = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

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
          placeholder= "Username"
          onChangeText={text => onChangeUsername(text)}
          value={username}
        style={styles.input}
      />


      <TextInput
        value={password}
        onChangeText={text => onChangePassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />


      {/* <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        // disabled ={email === '' || password === ''}
        onPress={() => _combined()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity> */}






      <TouchableOpacity
       style={styles.button}
        onPress={() => {
          navigation.navigate('Interceptor');
        }}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

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
          Sign In
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