import React, {Component} from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert, StyleSheet} from 'react-native';
import Loader from 'react-native-modal-loader';
import axios from 'axios';

import {setLng, getLng} from '../helper/changeLng';
import strings from '../localization/LocalizedStrings';

axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

export default class InterceptorScreen extends React.Component {
  
  state = {
    username: '',
    password: '',
    loading: false,
  }


   CreateUserAccount = async (username, password) => {
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
        this.setState({ username: '' });
        this.setState({ password: '' });
         this.props.navigation.navigate('InterceptorLogin');
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

  componentDidMount(){
    this.selectedLng();
  }

   selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      strings.setLanguage(lngData);
    }
    console.log('selected Language data==>>>', lngData);
  };
  render()
  {

  return (
    <View style={styles.container}>
      <Loader loading={this.state.isLoading} color="#ff66be" />

      <TextInput
          placeholder= {`${strings.USERNAME}`}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        style={styles.input}
      />


      <TextInput
         onChangeText={text => this.setState({ password: text })}
         value={this.state.password}
        placeholder={`${strings.PASSWORD}`}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate('InterceptorLogin');
        }}>
         <Text style={styles.buttonText}>
         {strings.SIGN_IN}
        </Text>
      </TouchableOpacity>

       <View style={styles.buttonSpace}></View>

      <TouchableOpacity
        style={styles.button}
        mode="contained"
       
        onPress={() => {
          this.CreateUserAccount(this.state.username, this.state.password);
        }}>
        <Text style={styles.buttonText}>
         {strings.SIGN_UP}
        </Text>
      </TouchableOpacity>
    </View>
  );
  }
};


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