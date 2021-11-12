import React, {Component} from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert, StyleSheet} from 'react-native';

import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../localization/LocalizedStrings';
import {setLng, getLng} from '../helper/changeLng';

 axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

export default class InterceptorUploadContact extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    isLoading: false,
  }


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

 

   CreateContact = async (firstName, phoneNumber) => {
    const { token } = this.props.route.params;
    console.log(firstName, phoneNumber, token);
    await axios
      .post(
        '/contacts/',
        {
          country_code: '+92',
          first_name: firstName,
          last_name: 'string',
          phone_number: phoneNumber,
          is_favorite: true,
        },
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      )
      .then(response => {
        console.log('Then', response.data);
        Alert.alert(
          'Contact created Successfully using token',
          response.data.phone_number,
        );
      })
      .catch(error => {
        Alert.alert('Failed', error);
        console.log('Catch', error);
      });
  };
  render()
  {

  return (
    <View style={styles.container}>
      <Loader loading={this.state.isLoading} color="#ff66be" />
   
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.FIRSTNAME}`}
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ firstName: text })}
          value={this.state.firstName}
          style={styles.input}
        />

        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.PHONE_NUMBER}`}
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({ phoneNumber: text })}
          value={this.state.phoneNumber}
          style={styles.input}
        />


      <TouchableOpacity
        style={styles.button}
        mode="contained"
         activeOpacity={0.5}
        onPress={() => {
          this.CreateContact(this.state.firstName, this.state.phoneNumber);
        }}>
        <Text
          style={styles.buttonText}>
          {strings.CREATE_ACTIVITY}
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