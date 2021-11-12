
import React, { useEffect, useState } from 'react';

import ReduxScreen from '../screens/ReduxScreens/ReduxScreen';
import HomeScreen from '../screens/HomeScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import strings from '../localization/LocalizedStrings';
import { setLng, getLng } from '../helper/changeLng';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {

   
useEffect(() => {
    selectedLng()
  }, [])

  const selectedLng = async () => {
    const lngData = await getLng()
    if (!!lngData) {
      strings.setLanguage(lngData)
    }
    console.log("selected Language data==>>>", lngData);
    // let str1 = strings.CASE_UPDATE;
    // console.log(str1);
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"

     tabBarOptions={{
				activeTintColor: "#50d3a7",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 15,
				},
			}}
      // screenOptions={{
      //       tabBarActiveTintColor: '#00a3ff',
      //       tabBarInactiveTintColor: '#F3B1CD',
      //       tabBarLabelStyle: { textAlign: 'center',  fontSize: 40, },
      //       tabBarIndicatorStyle: {
      //         borderBottomColor: '#C2D5A8',
      //         borderBottomWidth: 2,
      //       },
      //       tabBarLabelStyle: {
      //         textTransform: 'none',
      //       },
      //     }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: `${strings.HOME}`,
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen
        name="ReduxScreen"
        component={ReduxScreen}
        options={{
          tabBarLabel: `${strings.REDUX}`,
          fontSize: 15,
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="bell" color={color} size={26} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}