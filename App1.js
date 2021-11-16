import * as React from 'react';
import {Button, View, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './navigators/DrawerNavigator';
import AuthStack from './screens/AuthScreens/AuthStack/AuthStack';
import ProfileStackNavigator from './navigators/ProfileStackNavigator';
import ReduxScreen from './screens/ReduxScreens/ReduxScreen';
import MapView1 from './screens/MapViewScreen/MapView';
import CrudStack from './screens/CRUD_Screen/CrudStack';

const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
      {/* //Hello */}
        <Stack.Screen
          name="AuthStack"
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

        <Stack.Screen
          name="CrudStack"
          component={CrudStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ReduxScreen"
          component={ReduxScreen}
          options={{
            headerShown:true,
          headerTitleAlign: 'center',
          title: 'ReduxScreen', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}

        />
        <Stack.Screen
          name="MapView"
          component={MapView1}
          options={{
            headerShown:true,
          headerTitleAlign: 'center',
          title: 'MapView', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
         
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        />

      </Stack.Navigator>
    </NavigationContainer> //Hello
  );
}

export default App1;
