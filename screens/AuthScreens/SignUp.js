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
import auth from '@react-native-firebase/auth';

export default function SignUp({navigation}) {
  const [firstname, setfirstname] = React.useState('');
  const [lastname, setlastname] = React.useState('');
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [firstnameError, setfirstnameError] = useState(true);
  const [lastnameError, setlastnameError] = useState(true);
  const [emailError, setemailError] = useState(true);
  const [passwordError, setpasswordError] = useState(true);

  const handleSubmitPress = () => {
    if (!email || !password || !firstname || !lastname) {
      alert('Details are Incomplete');
    } else {
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

  
  const validatefirstname = () =>  {
    if (firstname.length > 3) {
      setfirstnameError(false);
      return;
    }
    setfirstnameError(true);
    return;
  }

const validatelastname = () =>  {
    if (lastname.length > 3) {
      setlastnameError(false);
      return;
    }
    setlastnameError(true);
    return;
  }

  const validateEmail = () =>  {
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    setemailError(!regexp.test(email));
  }

  const validatePassword = () =>  {
    if (password.length > 6) {
      setpasswordError(false);
      return;
    }
    setpasswordError(true);
    return;
  }

  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/img2.png')} />
      <TextInput
        value={firstname}
        onChangeText={(text) => {
            validatefirstname();
             setfirstname(text);
          }}
        placeholder={'Firstname'}
        style={styles.input}
      />
      {firstnameError ? (
          <Text style={styles.error}>minimum length : 3</Text>
        ) : null}
      <TextInput
        value={lastname}
        onChangeText={(text) => {
            validatelastname();
             setlastname(text);
          }}
        placeholder={'Lastname'}
        style={styles.input}
      />
      {lastnameError ? (
          <Text style={styles.error}>minimum length : 3</Text>
        ) : null}
      <TextInput
        value={email}
        onChangeText={(text) => {
        validateEmail();
        setemail(text);
        }}
        placeholder={'Email'}
        style={styles.input}
      />
       {emailError ? <Text style={styles.error}>Invalid email</Text> : null}
      <TextInput
        value={password}
        onChangeText={(text) =>
        {
          validatePassword();
          setpassword(text);
        }}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      {passwordError ? (
        <Text style={styles.error}>Minimum length is 6</Text>
      ) : null}
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
