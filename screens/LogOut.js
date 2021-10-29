import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class LogOut extends React.Component {
  render()
  {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Log Out Screen</Text>
      <Button
        title="Go to SignIn Screen"
        onPress={() => this.props.navigation.navigate('SignIn')}
      />
    </View>
  );
  }
}
export default LogOut;
