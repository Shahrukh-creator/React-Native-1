import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReduxScreen from '../screens/ReduxScreens/ReduxScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {

    render() {
       return (
    <Tab.Navigator
      initialRouteName="HomeScreen"

     tabBarOptions={{
				activeTintColor: "blue",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 15,
				},
                
                
			}}
            // screenOptions={{
            //  headerShown:false,
            // }}
   screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown:false,
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
        >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          fontSize: 15,
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="home" color={color} size={26} />
        //   ),
        }}
      />
      <Tab.Screen
        name="ReduxScreen"
        component={ReduxScreen}
        options={{
          tabBarLabel: "Redux",
          fontSize: 15,
        //   tabBarIcon: ({ color }) => (
        //     <MaterialCommunityIcons name="bell" color={color} size={26} />
        //   ),
        }}
      />
    </Tab.Navigator>
  );
    }
}
