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
import strings from '../../localization/LocalizedStrings';
import {setLng, getLng} from '../../helper/changeLng';


 const BASE_PATH =
    'https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';


export default class SignUp extends React.Component {

constructor()
  {
   super();
    this.state = {
      email: '',
      password: '',
      firstname:'',
      lastname:'',
      firstnameError: true,
      lastnameError: true,
      emailError: true,
      passwordError: true,
    };
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
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  };

  
    validatefirstname() {
    if (this.state.firstname.length > 3) {
      this.setState({ firstnameError: false });
      return;
    }
    this.setState({ firstnameError: true });
    return;
  }

  validatelastname() {
    if (this.state.lastname.length > 3) {
      this.setState({ lastnameError: false });
      return;
    }
    this.setState({ lastnameError: true });
    return;
  }


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

  handleSubmitPress(){


    if (!this.state.email || !this.state.password || !this.state.firstname || !this.state.lastname) {

        alert('Details are Incomplete');
    } else
    {
       auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          console.log('User account created!');
          this.props.navigation.navigate('SignIn');
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
         this.setState({email: '', password: '',firstname:'',
      lastname:''});
      
    }
  };

render()
{
  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image source={{uri: BASE_PATH}} style={styles.sideMenuProfileIcon} />
      <TextInput
        value={this.state.firstname}
        onChangeText={(text) => { 
          this.validatefirstname();
          this.setState({firstname:text});
          }}
        placeholder={`${strings.FIRSTNAME}`}
        style={styles.input}
      />
      {this.state.firstnameError ? (
          <Text style={styles.error}>minimum length : 3</Text>
        ) : null}
      <TextInput
        value={this.state.lastname}
        onChangeText={(text) =>
        { 
          this.validatelastname();
          this.setState({lastname:text});
        }}
        placeholder={`${strings.LASTNAME}`}
        style={styles.input}
      />
      {this.state.lastnameError ? (
          <Text style={styles.error}>minimum length : 3</Text>
        ) : null}
      <TextInput
        value={this.state.email}
        onChangeText={(text) =>
        { 
          this.validateEmail();
          this.setState({email:text});
        }}
        placeholder={`${strings.EMAIL}`}
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
        placeholder={`${strings.PASSWORD}`}
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
        <Text style={styles.buttonText}>{strings.SIGN_UP}</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => this.props.navigation.navigate('SignIn')}>
        {strings.TEXT_2}
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
