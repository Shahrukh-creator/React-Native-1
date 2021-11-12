import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import Call API
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';

export default function CallNumber() {
    const [inputValue, setInputValue] = useState('00000000000');

const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 11) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  const counter = useSelector(state => state.counter)


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
         Make a Phone Call
        </Text>
        <Text style={styles.titleTextsmall}>
          Enter Contact Number to Call
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={
            (inputValue) => setInputValue(inputValue)
          }
          placeholder={'Place 11 digits'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Make a Call
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>{counter}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
    color:'limegreen'
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'black',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});