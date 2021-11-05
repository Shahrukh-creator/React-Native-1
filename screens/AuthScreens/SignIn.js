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
import auth from '@react-native-firebase/auth';

export default class SignIn extends React.Component {

  constructor()
  {
   super();
    this.state = {
      email: '',
      password: '',
      emailError: true,
      passwordError: true,
    };
    
  }

  handleSubmitPress() {
    if (!this.state.email || !this.state.password) {
      alert('Details are Incomplete');
    } else {
      try {
        auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            console.log('User signed In!');
            this.props.navigation.navigate('Drawer');
            // Alert.alert('Success ✅', 'Logged successfully');
          });
      } catch (error) {
        alert(error);
      }
      this.setState({email: '', password: ''});
      
    }
  };

  
  validateEmail() {
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    this.setState({ emailError: !regexp.test(this.state.email) });
  }

  validatePassword() {
    if (this.state.password.length > 6) {
      this.setState({ passwordError: false });
      return;
    }
    this.setState({ passwordError: true });
    return;
  }

render()
{


  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/img2.png')} />

      <TextInput
        value={this.state.email}
        onChangeText={(text) =>   
        { 
          this.validateEmail();
          this.setState({email:text});
        }}
        placeholder={'Email'}
        style={styles.input}
      />
       {this.state.emailError ? (
          <Text style={styles.error}>Invalid email</Text>
        ) : null}
      <TextInput
        value={this.state.password}
        onChangeText={(text) =>  
        { 
          this.validatePassword();
          this.setState({password:text});
        }}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      {this.state.passwordError ? (
          <Text style={styles.error}>Minimum length is 6</Text>
        ) : null}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={this.handleSubmitPress.bind(this)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => this.props.navigation.navigate('SignUp')}>
        New Here ? Register
      </Text>
    </SafeAreaView>
  );
}
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
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor:"pink",
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
