import * as React from 'react';
import { Button, View, Text } from 'react-native';

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <Button
        title="Go to ProfileScreen"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default ContactScreen;
