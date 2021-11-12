import React from 'react';
import {TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import styles from '../../styles/Index';
import Loader from 'react-native-modal-loader';
import axios from 'axios';

import strings from '../../localization/LocalizedStrings';

const InterceptorScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateUserAccount = async (username, password) => {
    console.log(username, password);
    axios
      .post('/auth/register', {
        username: username,
        first_name: 'umer46',
        last_name: 'nazir651',
        username: `${username}@example.com`,
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
    <View style={styles.CommonStyles.container}>
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.USERNAME}`}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeUsername(text)}
          value={username}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <View style={styles.AuthStyles.inputView}>
        <TextInput
          editable
          maxLength={20}
          placeholder={`${strings.PASSWORD}`}
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}
          style={styles.AuthStyles.InputField}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.AuthStyles.button,
          {justifyContent: 'center', alignItems: 'center', bottom: 80},
        ]}
        onPress={() => {
          navigation.navigate('InterceptorLogin');
        }}>
        <Text style={{alignItems: 'center', justifyContent: 'center'}}>
          {strings.SIGN_IN}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.AuthStyles.button,
          {justifyContent: 'center', alignItems: 'center'},
        ]}
        mode="contained"
        disabled={password === '' || username === ''}
        onPress={() => {
          CreateUserAccount(username, password);
        }}>
        <Text style={{alignItems: 'center', justifyContent: 'center'}}>
          {strings.SIGN_UP}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorScreen;
