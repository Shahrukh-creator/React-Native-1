import * as React from 'react';
import {Button, View, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './navigators/DrawerNavigator';
import AuthStack from './screens/AuthScreens/AuthStack/AuthStack';
import ProfileStackNavigator from './navigators/ProfileStackNavigator';
// import TabNavigator from './navigators/TabNavigator';
import ReduxScreen from './screens/ReduxScreens/ReduxScreen';
import MapView from './screens/MapViewScreen/MapView';


LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createNativeStackNavigator();

function App() {
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
        {/* <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
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
          component={MapView}
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

export default App;
