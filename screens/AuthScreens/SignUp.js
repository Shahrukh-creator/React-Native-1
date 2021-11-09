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
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useValidation } from 'react-native-form-validator';
import { setLng, getLng } from '../../helper/changeLng';
import strings from '../../localization/LocalizedStrings';


export default function SignUp({navigation}) {
  const [firstname, setfirstname] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');


  useEffect(() => {
    selectedLng()
  }, [])

  const selectedLng = async () => {
    const lngData = await getLng()
    if (!!lngData) {
      strings.setLanguage(lngData)
    }
    console.log("selected Language data==>>>", lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  }

  const handleSubmitPress = async () => {
    if (!email || !password || !firstname || !lastname) {
      alert('Details are Incomplete');
    } else {
         /// Insert In Async Storage
         try {
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('password', password);
          await AsyncStorage.setItem('firstname', firstname);
          await AsyncStorage.setItem('lastname', lastname);
         }
         catch (e){
          console.error(e);
         }
         /// Retrieve from Async Storage
         try {
         const Value1 = await AsyncStorage.getItem('email')
         const Value2 = await AsyncStorage.getItem('password')
         const Value3 = await AsyncStorage.getItem('firstname')
         const Value4 = await AsyncStorage.getItem('lastname')
         console.log(Value1);
         console.log(Value2);
         console.log(Value3);
         console.log(Value4);
         }  catch (e){
          console.error(e);
         }
         

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created!');
          navigation.navigate('SignIn');
          // Alert.alert('Success ✅', 'Account created successfully');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
       



      setfirstname('');
      setlastname('');
      setemail('');
      setpassword('');
    }
  };

  
    const { validate, isFieldInError, getErrorsInField } =
    useValidation({
      state: { firstname, lastname, email, password },
    });

    const _onPressButton = () => {
    validate({
      firstname: { minlength: 3, maxlength: 7, required: true },
      lastname: { minlength: 3, maxlength: 7, required: true },
      email: { email: true, required: true },
      password: {  minlength: 3, maxlength: 15, required: true },
    });
  };

  function _combined() {
     _onPressButton();
    handleSubmitPress();
  } 

  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/img2.png')} />

      
      <TextInput
        value={firstname}
        onChangeText={(text) => setfirstname(text)
          }
        placeholder={'Firstname'}
        style={styles.input}
      />
      {isFieldInError('firstname') &&
        getErrorsInField('firstname').map(errorMessage => (
          <Text key={ Math.random().toString() } style = {{color:'red'}}>{errorMessage}</Text>
        ))}
     
      <TextInput
        value={lastname}
        onChangeText={(text) =>
             setlastname(text)
          }
        placeholder={'Lastname'}
        style={styles.input}
      />
       {isFieldInError('lastname') &&
        getErrorsInField('lastname').map(errorMessage => (
          <Text key={ Math.random().toString() } style = {{color:'red'}}>{errorMessage}</Text>
        ))}
    
      <TextInput
        value={email}
        onChangeText={(text) => 
        setemail(text)
        }
        placeholder={'Email'}
        style={styles.input}
      />

       {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text key={ Math.random().toString()} style = {{color:'red'}}>{errorMessage}</Text>
        ))}
      
      <TextInput
        value={password}
        onChangeText={(text) =>

         setpassword(text)
        }
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text key={ Math.random().toString() } style = {{color:'red'}}>{errorMessage}</Text>
        ))}
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => _combined()}>
        <Text style={styles.buttonText}>{strings.SIGN_UP}</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('SignIn')}>
        {strings.TEXT_2}
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
  error: {
    fontSize: 15,
    paddingBottom: 1,
    marginTop: -30,
    color: 'red',
    borderBottomColor: "#ff0000",
    borderBottomWidth: 1,
  },
});
