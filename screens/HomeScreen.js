import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ProfileScreen"
        onPress={() => navigation.navigate('ProfileStack')}
      />
       <Button
        title="Go to ReduxScreen"
        onPress={() => navigation.navigate('ReduxScreen')}
      />
       <Button
        title="Go to MapView"
        onPress={() => navigation.navigate('MapView')}
      />
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default HomeScreen;
