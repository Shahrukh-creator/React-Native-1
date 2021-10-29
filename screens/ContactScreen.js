import React, {Component } from 'react';
import { Button, View, Text } from 'react-native';

class ContactScreen extends React.Component {
  render()
  {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <Button
        title="Go to ProfileScreen"
        onPress={() => this.props.navigation.navigate('Profile')}
      />
      <Button
        title="Go to HomeScreen"
        onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
  );
  }
}
export default ContactScreen;
