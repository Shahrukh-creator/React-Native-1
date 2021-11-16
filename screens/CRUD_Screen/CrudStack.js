import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrudScreen from './CrudScreen';


const crudStack = createNativeStackNavigator();


export default function CrudStack() {
    return (
         <crudStack.Navigator initialRouteName="CrudScreen" 
     screenOptions={{
            headerShown:true,
          headerTitleAlign: 'center',
          title: "CrudScreen", //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <crudStack.Screen name="CrudScreen" component={CrudScreen} />
        {/* <CrudStack.Screen name="ProfileScreen1" component={ProfileScreen1} /> */}


      </crudStack.Navigator>
    )
}
