import React, { Component } from 'react'
import {LogBox} from 'react-native';


import { Provider } from 'react-redux';


import store from './screens/ReduxScreens/Store';

import App1 from './App1'

LogBox.ignoreAllLogs();//Ignore all log notifications

LogBox.ignoreLogs(['Reanimated 2']);

export default class App extends React.Component {
  render() {
    return (
       <Provider store={store}>
        <App1 />
    </Provider>
    )
  }
}
