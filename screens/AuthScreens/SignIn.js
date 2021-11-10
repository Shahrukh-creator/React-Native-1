import React, {useEffect, useState} from 'react';
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
  I18nManager,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import RNRestart from 'react-native-restart';
import {useValidation} from 'react-native-form-validator';
import auth from '@react-native-firebase/auth';
import strings from '../../localization/LocalizedStrings';
import {setLng, getLng} from '../../helper/changeLng';

export default function SignIn({navigation}) {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');

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

  const onChangeLng = async lng => {
    if (lng === 'en') {
      await I18nManager.forceRTL(false);
      setLng('en');
      RNRestart.Restart();
      return;
    }
    if (lng === 'ur') {
      await I18nManager.forceRTL(true);
      setLng('ur');
      RNRestart.Restart();
      return;
    }
    if (lng === 'ar') {
      await I18nManager.forceRTL(true);
      setLng('ar');
      RNRestart.Restart();
      return;
    }
  };

  const handleSubmitPress = () => {
    if (!email || !password) {
      alert('Details are Incomplete');
    } else {
      try {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('User signed In!');
            navigation.navigate('Drawer');
            // Alert.alert('Success ✅', 'Logged successfully');
          });
      } catch (error) {
        alert(error);
      }

      setemail('');
      setpassword('');
    }
  };

  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {email, password},
  });

  const _onPressButton = () => {
    validate({
      email: {email: true, required: true},
      password: {minlength: 3, maxlength: 15, required: true},
    });
  };

  function _combined() {
    _onPressButton();
    handleSubmitPress();
  }
  const BASE_PATH =
    'https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';

  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 55,
          top:-15
        }}>
        {/* /// For English */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => onChangeLng('en')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>

        {/* /// For Hindi */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => onChangeLng('ur')}>
          <Text style={styles.buttonText}>Urdu</Text>
        </TouchableOpacity>

        {/* /// For Arabic */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => onChangeLng('ar')}>
          <Text style={styles.buttonText}>Arabic</Text>
        </TouchableOpacity>
      </View>

      <Image source={{uri: BASE_PATH}} style={styles.sideMenuProfileIcon} />


      <TextInput
        value={email}
        onChangeText={text => setemail(text)}
        placeholder={`${strings.EMAIL}`}
        style={styles.input}
      />

      {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text key={Math.random().toString()} style={{color: 'red'}}>
            {errorMessage}
          </Text>
        ))}

      <TextInput
        value={password}
        onChangeText={text => setpassword(text)}
        placeholder={`${strings.PASSWORD}`}
        secureTextEntry={true}
        style={styles.input}
      />

      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text key={Math.random().toString()} style={{color: 'red'}}>
            {errorMessage}
          </Text>
        ))}

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        // disabled ={email === '' || password === ''}
        onPress={() => _combined()}>
        <Text style={styles.buttonText}>{strings.SIGN_IN}</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('SignUp')}>
        {strings.TEXT_1}
      </Text>

      {/* <Text> {strings.HOME} </Text> */}
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
