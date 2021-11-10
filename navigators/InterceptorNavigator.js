import React, { useEffect, useState } from 'react';

import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Interceptor from '../Interceptor/Interceptor';
import InterceptorLogin from '../Interceptor/InterceptorLogin';
import InterceptorContact from '../Interceptor/InterceptorContact';

import strings from '../localization/LocalizedStrings';
import { setLng, getLng } from '../helper/changeLng';

const InterceptorStack = createNativeStackNavigator();

export default function ProfileStackNavigator() {

  
useEffect(() => {
    selectedLng()
  }, [])

  const selectedLng = async () => {
    const lngData = await getLng()
    if (!!lngData) {
      strings.setLanguage(lngData)
    }
    console.log("selected Language data==>>>", lngData);
  }

  return (
      <InterceptorStack.Navigator initialRouteName="InterceptorLogin" 
     screenOptions={{
            headerShown:false,
          headerTitleAlign: 'center',
          title: "InterceptorLogin", //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <InterceptorStack.Screen name="Interceptor" component={Interceptor} />
        <InterceptorStack.Screen name="InterceptorLogin" component={InterceptorLogin} />
        <InterceptorStack.Screen name="InterceptorContact" component={InterceptorContact} />

      </InterceptorStack.Navigator>
  );
}
