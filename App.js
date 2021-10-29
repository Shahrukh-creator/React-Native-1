import  React, { Component }  from 'react';
import {Button, View, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './navigators/DrawerNavigator';
import AuthStack from './screens/AuthScreens/AuthStack/AuthStack';
import ProfileStackNavigator from './navigators/ProfileStackNavigator';

LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createNativeStackNavigator();

export default class App extends React.Component{

  render()
  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
       
        <Stack.Screen
          name="AuthStack"
          // Hello World
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}


