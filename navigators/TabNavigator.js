
import * as React from 'react';
// import {Icon} from 'react-native-elements';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReduxScreen from '../screens/ReduxScreens/ReduxScreen';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
     
      screenOptions={{
            tabBarActiveTintColor: '#00a3ff',
            tabBarInactiveTintColor: '#F3B1CD',
            tabBarLabelStyle: { textAlign: 'center',  fontSize: 40, },
            tabBarIndicatorStyle: {
              borderBottomColor: '#C2D5A8',
              borderBottomWidth: 2,
            },
            tabBarLabelStyle: {
              textTransform: 'none',
            },
          }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen
        name="ReduxScreen"
        component={ReduxScreen}
        options={{
          tabBarLabel: 'Redux',
          fontSize: 15,
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={26} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}