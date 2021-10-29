import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNavigator from './ProfileStackNavigator';

import Tab2 from '../screens/TabScreens/Tab2';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator
      options={{headerShown: false}}>
        <Tab.Screen name="ProfileStackNavigator" component={ProfileStackNavigator}
        options={{headerShown: false}} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    )
}
