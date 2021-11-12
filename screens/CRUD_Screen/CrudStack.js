import React, { Component }  from 'react';
import {Button, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Crud1 from './Crud1';
import Crud2 from './Crud2';

const crudStack = createNativeStackNavigator();

export default class CrudStack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <crudStack.Navigator
        initialRouteName="Crud1"
        screenOptions={{
          headerShown: true,
        }}>
        <crudStack.Screen name="Crud1" component={Crud1} />
        <crudStack.Screen name="Crud2" component={Crud2} />
      </crudStack.Navigator>
    );
  }
}
