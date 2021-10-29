import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from './Store';

import { increment } from './Reducer';
import { decrement } from './Reducer';
import { reset } from './Reducer';


const AppScreen = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "red" }} onPress={() => dispatch(decrement())}>
          <Text style={{fontSize:20, fontWeight: "bold"}}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "grey" }} onPress={() => dispatch(reset())}>
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "blue" }} onPress={() => dispatch(increment())}>
          <Text style={{fontSize:20, fontWeight: "bold"}}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default function ReduxScreen() {
  return (
    <Provider store={store}>
        <AppScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
    color:'limegreen'
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});